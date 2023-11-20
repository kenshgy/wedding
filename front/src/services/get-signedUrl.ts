import http from "../http-common";

class GetSignedUrl {
  async get(fileName: string) {
    const result = await http.get("api/files/signedUrl?fileName=" + fileName);
    return result.data;
  }
}

export default new GetSignedUrl();