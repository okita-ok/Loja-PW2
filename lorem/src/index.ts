import {createServer} from "http";
import {config as dotenvConfig} from "dotenv";
import {readFile} from "fs/promises";
import {geraLorem} from "./utils/lorem";
import {loremIpsum} from "lorem-ipsum";

dotenvConfig();
const PORT = process.env.PORT ?? 3366;
// const PORT =  3366;

const server = createServer(async(req, res)=>{
    res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})
    // const teste = loremIpsum();
    const homepage = await readFile("./src/utils/homepage.html")
    //res.write(homepage)


    if(req.url === "/"){
        console.log("AAAAAAAAAAAAAAAAA")
        res.writeHead(200, {"Content-Type":"text/html;charset=utf-8"})
    }
    res.end(homepage)
})

server.listen(PORT, ()=>{
    console.log(`Aplicação rodando na porta ${PORT}`)
});