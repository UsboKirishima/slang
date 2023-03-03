import axios from "axios";

export class RestManager {

    public async req({
        Rmethod,
        Rurl,
        Rparams,
        Rheaders
    }:{
        Rmethod: string;
        Rurl: string;
        Rparams: object;
        Rheaders: object;
    }) {
        axios.request({
            method: Rmethod,
            url: Rurl,
            params: Rparams,
            headers: Rheaders
        }).then(async (response) => {
            console.log(response.data.list[0])
        }).catch(async (error) => {
            console.error(error);
        });
    }
}