const fs = require("fs");
fs.stat("./1.txt", (err, stats) => {
    if (err) {
        console.error(err);
        return;
    }
    //可以访问 `stats` 中的文件属性
    console.log(stats);
    console.log(stats.isFile());
    console.log(stats.isDirectory());
    console.log(stats.size);
});
