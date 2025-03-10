const homePage = (req, res)=>{
    res.send("<h1>this is home page<h1>");
}
const AboutPage = (req, res)=>{
    res.send("<h1>this is about page<h1>")
}
module.exports={
    homePage,
    AboutPage
}