const http = require("http");

const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/home" || request.url === "/") {
        response.write("<h2>hello world</h2>");
    } else if (request.url == "/about") {
        response.write("<h2>About</h2>");
    } else if (request.url == "/contact") {
        response.write("<h2>Contacts</h2>");
    } else {
        response.write("<h2>Not found</h2>");
    }
    response.end();
};

http.createServer(requestHandler).listen(80);
