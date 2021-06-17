import { Book } from "@prisma/client";
import { Request, Response, Router } from "express";
import database from "../libraries/database";

const router = Router();


router.post("/cadastrar", async (req: Request, res: Response) => {
  let senha = req.body.senha;
  try {
    const usuario: Book = await database.book.create({
      data: {
        username: req.body.username,
        senha: senha,
      },
    });

    if (usuario) {
      res.send(usuario);
    }
  } catch (ex) {
    res.send(ex);
  }
});

export default router;
