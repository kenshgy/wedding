import http from "../http-common";
class PutS3 {

    async  put(url: string | URL, data: any) {
        const uploadResponse = http.put(url as string, data, {
            headers: {
                'Content-Type': data.type
            }
        })
        await uploadResponse
    }
}

export default new PutS3();