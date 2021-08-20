import { Router } from "express";
import toDoController from "../controllers/toDoController";
import middlewares from '../middlewares/validator';
const router = Router();

router.get("/", toDoController.get);
router.post("/", middlewares.duplicate,toDoController.add);
router.put("/toOnProgress/:id", middlewares.findData,toDoController.updateToOnProgress);
router.put("/toDone/:id", middlewares.findData,toDoController.updateToDone);
router.delete("/:id",middlewares.findData, toDoController.deleteData)
export default router;
