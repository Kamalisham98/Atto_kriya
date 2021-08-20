import { Router } from "express";
import toDoController from "../controllers/toDoController";
import middlewares from '../middlewares/checker';
const router = Router();

router.get("/", toDoController.get);
router.post("/", middlewares.duplicate,toDoController.add);
router.put("/toOnProgress/:id", toDoController.updateToOnProgress);
router.put("/toDone/:id", toDoController.updateToDone);
router.delete("/:id",middlewares.findData, toDoController.deleteData)
export default router;
