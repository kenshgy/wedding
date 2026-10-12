# wedding

## About

結婚式の招待状アプリ

## 開発

開発環境の構築手順

### prerequisit

. [Node.js](https://nodejs.org/ja)

### ローカル起動手順

```
cd front
npm install
npm run dev
```

## デプロイ

Cloudflare Workers（静的アセット + R2）で配信する。2026-10-13 に AWS（S3 静的サイト・API Gateway）から移した。

- サイト: https://wedding.kenmiki.com/ （誰でも見られる）
- `https://kenmiki.com/` は Worker が `wedding.kenmiki.com` へ 301 で転送する
- アルバム（`/album`）の写真は R2 バケット `kenmiki-wedding-photo`。Worker が `/api/photos`（一覧）と `/photos/<名前>`（画像）で出す
- 写真のアップロード（`/upload`）は式が終わったので廃止した。写真を足すときは R2 に直接入れる（`npx wrangler r2 object put kenmiki-wedding-photo/<名前> --file <ファイル> --remote`）

```
cd front && npm ci && npm run build && cd ..
CLOUDFLARE_API_TOKEN=... CLOUDFLARE_ACCOUNT_ID=... npx wrangler@4 deploy
```

`backend/`（写真アップロード用の署名 URL を出す Lambda）は使っていない。

# 参考サイト

招待状
https://sample.weddingday.jp/?design=v4_floral_pink

手紙の部分
https://qiita.com/yuki384/items/5eaff34c6fbc786d6782
