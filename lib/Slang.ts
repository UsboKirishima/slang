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
        query: string,
        what: string
     ) {
        return rest.req({
            Rmethod: 'GET',
            Rurl: 'https://mashape-community-urban-dictionary.p.rapidapi.com/define',
            Rparams: {term: query},
            Rheaders: {
              'X-RapidAPI-Key': this.APIkey,
              'X-RapidAPI-Host': 'mashape-community-urban-dictionary.p.rapidapi.com'
            },
            Rwhat: what
        });

    }

    
    public async definition(query: string) {
        return this.start(query, 'definition')
    } 
    
    public async permalink(query: string) {
        return this.start(query, 'permalink')
    } 
    
    public async thumbs_up(query: string) {
        return this.start(query, 'thumbs_up')
    } 
    
    public async author(query: string) {
        return this.start(query, 'author')
    } 
    
    public async word(query: string) {
        return this.start(query, 'word')
    } 
    
    public async defid(query: string) {
        return this.start(query, 'defid')
    } 
    
    public async current_vote(query: string) {
        return this.start(query, 'current_vote')
    } 
    
    public async written_on(query: string) {
        return this.start(query, 'written_on')
    } 
    
    public async example(query: string) {
        return this.start(query, 'example')
    } 
    
    public async thumbs_down(query: string) {
        return this.start(query, 'thumbs_down')
    } 

}