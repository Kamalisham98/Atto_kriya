import { Router } from "express";
import doneController from "../controllers/doneController";
import middlewares from '../middlewares/checker'
const router = Router();

router.get("/", doneController.get);
router.post("/", middlewares.duplicate,doneController.add);
router.put("/toOnProgress/:id", doneController.updateToOnProgress);
router.put("/toTodo/:id", doneController.updateToTodo);
router.delete("/:id",middlewares.findData, doneController.deleteData)
export default router;
