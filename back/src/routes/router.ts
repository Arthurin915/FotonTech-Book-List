import { Router } from "express";
import { getAllBooks, getBook, registerBook } from "../controllers/book";

const router = Router();


router.post("/book", registerBook );
router.get("/book/:id", getBook );
router.get("/book", getAllBooks );

export default router;
