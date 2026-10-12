
import http from "../http-common";

class GetPhotoListApi {
    async get(startAfter: string){
        const url = '/api/photos?startAfter=' + encodeURIComponent(startAfter)
        const result = await http.get(url);
        return result.data.contents;
      }
}

export default new GetPhotoListApi();