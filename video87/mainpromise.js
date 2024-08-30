
import fs from "fs/promises"

let a = await fs.readFile("badal.txt")

let b = await fs.appendFile("badal.txt", "\n\n\n\n\nThis is amazing promise")
console.log(a.toString(), b);
