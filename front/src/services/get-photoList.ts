
import http from "../http-common";

class GetPhotoListApi {
    async get(startAfter: string){
        const url = 'https://8patbwauza.execute-api.ap-northeast-1.amazonaws.com/default/getPhotoListPython?startAfter=' + startAfter
        const result = await http.get(url);
        return result.data.contents;
      }
}

export default new GetPhotoListApi();