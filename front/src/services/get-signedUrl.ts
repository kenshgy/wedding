import http from "../http-common";

class GetSignedUrl {
  async get(fileName: string) {
    const result = await http.get("https://pocif7c33c.execute-api.ap-northeast-1.amazonaws.com/dev/files/signedUrl?fileName=" + fileName);
    return result.data;
  }
}

export default new GetSignedUrl();