"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var _a, _b;
Object.defineProperty(exports, "__esModule", { value: true });
const promises_1 = require("fs/promises");
const http_1 = require("http");
const dotenv_1 = require("dotenv");
(0, dotenv_1.config)();
const DIR = (_a = process.env.DIR) !== null && _a !== void 0 ? _a : "./public";
const PORT = (_b = process.env.PORT) !== null && _b !== void 0 ? _b : 3333;
const server = (0, http_1.createServer)((req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const files = yield (0, promises_1.readdir)(DIR);
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    res.write(files.join("<br>"));
    res.end();
}));
server.listen(PORT, () => {
    console.log(`Aplicação rodando na porta ${PORT}`);
});
//depois ajustar o negocio- do build
