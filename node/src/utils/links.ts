export function createLink(filename: string) {
    return `<a href="/${filename}">${filename}</a><br>\n`;
}

function createTupla<T>(v1: T, v2: T):[T,T]{
    return [v1,v2];
}

// createTupla<number>('1',3)
// // createTupla<string>('1',3)

// function createTupla<T, R>(v1: T, v2: R):[T,R]{
//     return [v1,v2];
// }

//// createTupla<string>('1','3')

function createTuplaNumber(v1: number, v2: number){
    return [v1,v2];
}

function createTuplaStrings(v1: string, v2: string){
    return [v1,v2];
}

// export default createLink;