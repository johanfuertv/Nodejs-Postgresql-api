import Router from "express";
import {getUsers, createUsers, getUsersById,deleteUsers,updateUsers} from "../controllers/controller.index.js"

const router = Router();

router.get("/users",getUsers);
router.get("/users/:id",getUsersById);
router.post("/users",createUsers);
router.delete("/users/:id",deleteUsers);
router.put("/users/:id",updateUsers);
export default router;