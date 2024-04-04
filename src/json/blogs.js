const fs = require("fs");
const articlesList = [
  "Importance_of_shalow_copy_in_useState",
  "implementation-of-combination-in-recursive-way",
  "Menu-toggle-display-problem",
  "wave-like-css-effect",
];
let articles = articlesList.reduce((data, article) => {
  data[article.toLowerCase()] = fs.readFileSync(`./${article}.md`, {
    encoding: "utf8",
    flag: "r",
  });
  return data;
}, {});
fs.writeFileSync("article.json", JSON.stringify(articles));
