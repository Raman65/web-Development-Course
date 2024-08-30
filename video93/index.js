// You have to write a Node.js program to clear clutter inside of a directory and organize the contents of a directory into different folders

// for example, these files become:

// 1. name.jpg
// 2. name.png
// 3. this.pdf
// 4. raman.zip
// 5. rohan.zip
// 6. cat.jpg
// 7. raman.pdf

// this:
// jpg/name.jpg, jpg/cat.jpg
// png/name.png
// pdf/this.pdf, pdf/raman.pdf
// zip/raman.zip, zip/rohan.zip

import fs from "fs/promises";
import fsn from "fs";
import path from "path";

const basepath = "E:\\web-development-course\\video93";

let files = await fs.readdir(basepath);

for (const item of files) {
  console.log("running for", item);

  let ext = item.split(".")[item.split(".").length - 1];
  if (ext != "js" && ext != "json" && item.split(".").length > 1) {
    if (fsn.existsSync(path.join(basepath, ext))) {
      fs.rename(path.join(basepath, item), path.join(basepath, ext, item));
    } else {
      fs.mkdir(ext);
    }
    console.log(item);
  }
}
