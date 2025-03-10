// const http=require("http");
// const uc= require("uppercase");
// http.createServer((req, res)=>{
//     res.write("<h1>welocme to India</h1>");
    
//     res.end();

// }).listen(9000, ()=>{
//     console.log("server run on 9000! port");
// });








const http=require("http");
const bpl= require(".bhopal");
http.createServer((req, res)=>{
    res.write("<h1>welocme to India</h1>");
    res.write(bpl.myName());
    res.write(MyCollege());
    res.end();
}).listen(9000, ()=>{
    console.log("server run on 9000! port");
});









// const fs=require("fs");
// fs.rename("devansh.pdf","usha.xls",(err)=>{
//     if(err)throw err;
//     console.log("file succesfully creates");
// })



// const fs=require("fs");
// fs.unlink("gauri.txt",(err)=>{
//     if(err)throw err;
//     console.log("file succesfully creates");
// })






// const fs=require("fs");
// fs.writeFile("gauri.txt","hello i am gauri",(err)=>{
//     if(err)throw err;
//     console.log("file succesfully creates");
// })










// const fs=require("fs");
// fs.open("devansh.pdf","w",(err)=>{
//     if(err)throw err;
//     console.log("file succesfully creates");
// })






// const fs=require("fs");
// fs.appendFile("ram.txt","i am from ayodhya",(err)=>{
//     if(err)throw err;
//     console.log("file succesfully creates");
// })



// const http =require("http");
// const fs=require("fs");
// http.createServer((req, res)=>{
//     fs.readFileSync("raju.txt",(err,data)=>{
//         if(err)throw err;
//         res.write(data);
//         res.end();
//     })

// }).listen(8000,()=>{
//     console.log("server run on 8000!!");
// })


// var http=require("http");

// http.createServer((req, res)=>{
//     res.write("<h1>Welcome !!!<h1>");
//     res.write("<h2>To!!<h2>");
//     res.write("<h3>Cybrom!!!<h3>");
    
//     res.end();
// }).listen(9000);


