import express from "express";
import bodyParser from "body-parser";
import path from "path";
import taskRoutes from "./routes/taskRoutes";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views")); 
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/", taskRoutes);

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
