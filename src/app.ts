import express from "express";
import * as dotenv from "dotenv";


//import router
import indexRouter from "./routers/index";
import toDoRoutes from "./routers/toDoRoutes";
import onProgressRoutes from "./routers/onProgressRoutes";
import doneRoutes from "./routers/doneRoutes";

const app = express();
dotenv.config();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// router
app.use(indexRouter);
app.use("/todo", toDoRoutes);
app.use("/onProgress", onProgressRoutes);
app.use("/done", doneRoutes);
((port = process.env.APP_PORT || 3000) => {
  app.listen(port, () => console.log(`Server on port ${port}`));
})();
