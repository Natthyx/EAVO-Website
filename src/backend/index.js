import { writeFile, readFile } from "fs";

// writeFile("temp.js", 'console.log("hey")', (err) => {
//   if (err) {
//     console.log(err);
//   }
//   console.log("noice");
// });

readFile("./temp.js", "utf8", (err, data) => {
  if (err) throw err;
  else console.log(data);
});
