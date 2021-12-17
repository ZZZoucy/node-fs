const path = require("path");

/*
const notes = "./1.txt";
// 获取文件的父文件夹 .
console.log(path.dirname(notes));
// 获取文件名 1.txt
console.log(path.basename(notes));
// 给 basename 指定第二个参数来获取不带扩展名的文件名 1
console.log(path.basename(notes, path.extname(notes)));
// 获取文件的扩展名 .txt
console.log(path.extname(notes));
*/

const name = "users";
// 连接路径的两个或多个片段
console.log(path.join("./", name, "notes.txt"));
// 获得相对路径的绝对路径计算  /Users/zzzouchunyyy/Desktop/Jirengu/node-fs/notes.txt
console.log(path.resolve("notes.txt"));
// 当包含诸如 .、.. 或双斜杠之类的相对说明符时，其会尝试计算实际的路径： notes.txt
console.log(path.normalize("./users/..//notes.txt"));
