import http from "../http-common";

class GetSignedUrl {
  async get(fileType: string) {
    const result = await http.get("https://auzjl6sk33.execute-api.ap-northeast-1.amazonaws.com/default/createUrl?fileType=" + fileType);
    console.log(result)
    return result.data;
  }
}

export default new GetSignedUrl();