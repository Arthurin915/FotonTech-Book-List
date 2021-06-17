-- CreateTable
CREATE TABLE "Book" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "subtitle" TEXT,
    "author" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "pageCount" INTEGER,
    "bookCover" TEXT NOT NULL
);
