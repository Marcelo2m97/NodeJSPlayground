const requireESM = require("esm")(module)
requireESM(`./${process.argv[2] || "Import.js"}`)

