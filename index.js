const fs = require("fs")
for(let i =1; i < 64; i++){
    fs.writeFileSync(`./mambo data/${i}.json`, JSON.stringify(make(i))) 
}

function make(m) {
    return {name:`Mambo Xmas ${m}`, image:`ipfs://bafybeifj35vodbgq5xbigqvwgf5lzf2646lpp7k6ei7sur2wmp72hkzgvi/${m}.png`}
}