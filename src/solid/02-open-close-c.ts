// import axios from "axios";

export class HttpClient{
    // async get(url: string){
    //     const { status, data } = await axios.get(url);
    //     console.log({status, data});
    //     return {status, data};
    // }

    async get(url: string){

        const resp = await fetch(url);
        const data = await resp.json();

        return {data: data, status: 500};
    }
}