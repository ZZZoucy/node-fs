const fs = require("fs");

const content = "一些内容";

// 默认会替换文件中已有的内容
/*
fs.writeFile("./1.txt", content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    //文件写入成功。
    fs.readFile("./1.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data); // 一些内容
    });
});
*/

// 可以通过指定标志来修改默认的行为：
// fs.writeFile("./1.txt", content, { flag: 'a+' }, (err) => {}

// 将内容追加到文件末尾的便捷方法是 fs.appendFile() 方法
fs.appendFile("./1.txt", content, (err) => {
    if (err) {
        console.error(err);
        return;
    }
    //文件写入成功。
    fs.readFile("./1.txt", "utf8", (err, data) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(data);
    });
});
