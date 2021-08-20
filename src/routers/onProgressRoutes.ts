import { Router } from "express";
import OnProgressController from "../controllers/onProgressController";
import middlewares from '../middlewares/checker';
const router = Router();

router.get("/", OnProgressController.get);
router.post("/", middlewares.duplicate,OnProgressController.add);
router.put("/toTodo/:id", OnProgressController.updateToTodo);
router.put("/toDone/:id", OnProgressController.updateToDone);
router.delete("/:id",middlewares.findData, OnProgressController.deleteData)
export default router;
