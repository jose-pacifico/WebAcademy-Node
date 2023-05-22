import http from "http";
import fs from "fs";
import dotenv from "dotenv";

dotenv.config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];
const fsPromises = fs.promises;

const server = http.createServer((req, res) => {
    let url = req.url;
    let url_split = url.split(".");
    let extensao = url_split[1];
    let fileType = "text/html"

    if (extensao == "css") {
        fileType = "text/css"
    } else if (extensao == "js") {
        fileType = "text/javascript"
    }

    res.writeHead(200, {
        "Content-Type": `${fileType}; charset=utf-8`
    });

    let filename = (url == "/") ? "index.html" : url;

    fsPromises.readFile(`${folder}/${filename}`).then((content) => {
      res.end(content);
    });

});

server.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
});