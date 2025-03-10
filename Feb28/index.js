const express = require("express");
const app = express();
const empRoute = require("./routes/employees"); // Correct import
const useRouter = require("./routes/userRouter");

app.use("/employees", empRoute); // Use empRoute, not employeesRoute
app.use("/users", useRouter);

app.listen(8000, () => {
    console.log("Server is running on port 8000");
});
