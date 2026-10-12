// 招待状サイトの Worker。静的ファイル（front/dist）を配り、アルバムの写真を R2 から出す。
// kenmiki.com（apex）へのアクセスは wedding.kenmiki.com へ転送する。
const SITE = "wedding.kenmiki.com";

// AlbumView の parseDate が読む形（YYYY/MM/DD HH:MM:SS、日本時間）
function formatDate(d) {
  const j = new Date(d.getTime() + 9 * 60 * 60 * 1000);
  const p = (n) => String(n).padStart(2, "0");
  return `${j.getUTCFullYear()}/${p(j.getUTCMonth() + 1)}/${p(j.getUTCDate())} ${p(j.getUTCHours())}:${p(j.getUTCMinutes())}:${p(j.getUTCSeconds())}`;
}

async function listPhotos(env) {
  const contents = [];
  let cursor;
  do {
    const page = await env.PHOTOS.list({ cursor, limit: 1000 });
    for (const o of page.objects) {
      contents.push({ name: o.key, size: String(o.size), lastModified: formatDate(o.uploaded) });
    }
    cursor = page.truncated ? page.cursor : undefined;
  } while (cursor);
  return Response.json({ contents }, { headers: { "cache-control": "public, max-age=60" } });
}

async function getPhoto(env, key) {
  const obj = await env.PHOTOS.get(key);
  if (!obj) return new Response("Not Found", { status: 404 });
  const headers = new Headers();
  obj.writeHttpMetadata(headers);
  headers.set("etag", obj.httpEtag);
  headers.set("cache-control", "public, max-age=86400");
  return new Response(obj.body, { headers });
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.hostname !== SITE && url.hostname.endsWith("kenmiki.com")) {
      return Response.redirect(`https://${SITE}${url.pathname}${url.search}`, 301);
    }
    if (request.method === "GET" && url.pathname === "/api/photos") return listPhotos(env);
    if (request.method === "GET" && url.pathname.startsWith("/photos/")) {
      return getPhoto(env, decodeURIComponent(url.pathname.slice("/photos/".length)));
    }
    return env.ASSETS.fetch(request);
  },
};
