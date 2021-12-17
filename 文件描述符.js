// const fs = require("fs");
// // 将 r 作为 fs.open() 调用的第二个参数。该标志意味着打开文件用于读取。
// fs.open("./1.txt", "r", (err, fd) => {
//     //fd 是文件描述符。
//     console.log(fd);
// });

const fs = require("fs");

try {
    const fd = fs.openSync("./1.txt", "r");
} catch (err) {
    console.error(err);
}
