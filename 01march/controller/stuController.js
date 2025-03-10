const homePage=(req,res)=>{
    res.send("<h1>this is home page</h1>");
}

const subjectPage = (req, res) => {
    res.send("<h1>this is subject page</h1>");
}

const feesPage = (req, res) => {
    res.send("<h1>this is fees page</h1>");
}

module.exports = {
    homePage,
    subjectPage,
    feesPage
}








// const homePage=(req, res)=>{
//     res.send("<h1>this is home page<h1>")
// }

// const subjectPage=(req, res)=>{
//     res.send("<h1>this is subject page<h1>")
// }
// const feesPage=(req, res)=>{
//     res.send("<h1>this is fees page<h1>")
// }
// module.exports={
//     homePage,
//     subjectPage,
//     feesPage
// }