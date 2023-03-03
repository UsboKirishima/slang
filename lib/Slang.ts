import { RestManager } from "./rest/RestManager";

const rest = new RestManager();

export interface SlangOpts {
    APIkey: string;
}

export class Slang {

    private readonly APIkey: string;

    public constructor(opts: SlangOpts) {
        this.APIkey = opts.APIkey;
    }

    public async start(
        query: string
     ) {
        let data = rest.req({
            Rmethod: 'GET',
            Rurl: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
            Rparams: {term: query},
            Rheaders: {
              'X-RapidAPI-Key': this.APIkey,
              'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
            }
        });

        return data;
    }

}