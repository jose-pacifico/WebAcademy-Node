const http = require("http");
const fs = require("fs");
const {
    createLink,
    createBack
} = require("./util");
require("dotenv").config();

const PORT = process.env.PORT || 3333;
const folder = process.argv[2];
console.log(folder);

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/html; charset=utf-8"
    })
    fs.readdir(folder, (err, files) => {
        if (req.url === '/') {
            if (err) console.error(err)
            else {
                files.forEach(f => res.write(`${createLink(f)}`));
                res.end();
            }
        } else {
            fs.readFile(`${folder}/${req.url}`, (err, content) => {
                if (err) console.error(err)
                else {
                    res.write(createBack());
                    res.end(content);
                }
            });
        }
    })
});

server.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`);
})