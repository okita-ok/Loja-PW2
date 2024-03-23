import {loremIpsum} from "lorem-ipsum";

export function geraLorem(paragrafos: number){
    const lorem = loremIpsum({
        count: paragrafos,
        units: "paragraphs"
    })  
    return lorem;
}