import { createUser, getAllUsers, getUser, logIn, addFavorite, changePassword, isServerRunning} from "../controller/usersCT.js";
import { Router } from "express";
export const router = Router();
router.get("/serverStatus", isServerRunning);
router.post("/", createUser);
router.get("/", getAllUsers);
router.get("/:email", getUser);
router.post("/login", logIn);
router.patch("/characters", addFavorite);
router.patch("/changePassword", changePassword);