import http from "../http-common";

class FileUpload {
  async get(fileName: string) {
    const result = await http.get("files/signedUrl?fileName=" + fileName);
    return result.data;
  }
}

export default new FileUpload();