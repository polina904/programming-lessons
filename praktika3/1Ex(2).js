const http = require("http");
const requestHandler = (request, response) => {
    response.setHeader("Content-Type", "text/html; charset=utf-8;");
    if (request.url === "/todos/", digit) {
    urle1=request.url;
    urle2=urle1.split('/').reverse()[0];
    console.log(urle2);
    if (request.url === "/todos/"+urle2) {
        response.write(kirpich);

    } else {
        response.write("<h2>Not found</h2>");
    }
    response.end();
    return [urle2];
    //response.end();
};
http.createServer(requestHandler).listen(3000);
console.log(urle2);
let promise = new Promise(function (resolve, reject) {
    function download() {
        axios.get("https://jsonplaceholder.typicode.com/todos").then(
                response => {
                    const a = response.data;
                    console.log(response);
                    let json = JSON.stringify(a);
                    console.log(typeof json); // мы получили строку!
                    console.log(typeof json);
                    console.log(json);
                    fs.writeFile('todos1.json', json, function (err) {
                        if (err) return console.log(err);
@@ -47,8 +52,7 @@ promise.then(
            }
            const todos = JSON.parse(data);
            console.log("upload has done");
            digit=69;
            kirpich = todos[digit];
            kirpich = todos[0];
            console.log(kirpich);
            console.log("данные получены!");
        })