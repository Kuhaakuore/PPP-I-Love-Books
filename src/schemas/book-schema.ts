import joi from "joi";
import { CreateBook } from "../protocols/book";

export const bookSchema = joi.object<CreateBook>({
  title: joi.string().trim().required(),
  author: joi.string().trim().required(),
  publisher: joi.string().trim().required(),
  purchaseDate: joi.date().required(),
  cover: joi.string().trim().required()
});