import axios from "axios";
import { Slang } from "../Slang";

export interface RestManagerReqOpts {
    Rmethod: string;
    Rurl: string;
    Rparams: object;
    Rheaders: object;
    Rwhat: string;
}

export class RestManager {

    public async req({
        Rmethod,
        Rurl,
        Rparams,
        Rheaders,
        Rwhat
    } : RestManagerReqOpts) {
        axios.request({
            method: Rmethod,
            url: Rurl,
            params: Rparams,
            headers: Rheaders
        }).then(async (response): Promise<any> => {
            switch(Rwhat) {
                case 'definition' :
                    return console.log( response.data.list[0].definition);
                    break;
                case 'permalink' :
                    return console.log( response.data.list[0].permalink);
                    break;
                case 'thumbs_up' :
                    return console.log( response.data.list[0].thumbs_up);
                    break;
                case 'author' :
                    return console.log( response.data.list[0].author);
                    break;
                case 'word' :
                    return console.log( response.data.list[0].word);
                    break;
                case 'defid' :
                    return console.log( response.data.list[0].defid);
                    break;
                case 'current_vote' :
                    return console.log( response.data.list[0].current_vote);
                    break;
                case 'written_on' :
                    return console.log( response.data.list[0].written_on);
                    break;
                case 'example' :
                    return console.log( response.data.list[0].example);
                    break;
                case 'thumbs_down' :
                    return console.log( response.data.list[0].thumbs_down);
                    break;
                default:
                    return console.log( response.data.list[0]);

            }
        }).catch(async (error) => {
            console.error(error);
        });
    }
}