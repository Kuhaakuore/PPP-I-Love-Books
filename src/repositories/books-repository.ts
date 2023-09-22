import { Book, CreateBook } from "../protocols/book";
import { CreateReview } from "../protocols/review";
import prisma from "../database/index";

export async function getBooks() {
  const result = await prisma.books.findMany();
  return result;
}

export async function getBook(id: number) {
  const result = await prisma.books.findUnique({
    where: { id: id },
  });
  return result;
}

export async function createBook(book: CreateBook) {
  await prisma.books.create({
    data: {...book, purchaseDate: (new Date(book.purchaseDate)).toISOString()},
  });
}

export async function reviewBook(bookReview: CreateReview) {
  const { bookId, grade, review } = bookReview;
  await prisma.books.update({
    where: { id: bookId },
    data: { grade, review, read: true },
  });
}
