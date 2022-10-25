export default interface Pokemon {
    id:number;
    name:string;
    stats: {
        base_stat: number,
        effort: number,
        stat:{
            name: string,
            url: string,
        }
    }[]
}