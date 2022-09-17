const readline = require("readline");

const r1 = readline.createInterface(process.stdin , process.stdout);

r1.question("please enter your name : " , (name) =>{
    console.log("Hello" +" " + name);
    r1.close();
})