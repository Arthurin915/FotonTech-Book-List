import { INTEGER,  STRING } from 'sequelize';
import database from "./index";

export const BookTable = database.define('book', {
    id: {
        type: INTEGER,
        autoIncrement: true,
        allowNull: true,
        primaryKey: true
    },
    title: {
        type: STRING,
        allowNull: true
    },
    subtitle: {
        type: STRING,
        allowNull: true
    },
    author: {
        type: STRING,
        allowNull: true
    },
    description: {
        type: STRING,
        allowNull: true
    },
    pageCount: {
        type: INTEGER,
        allowNull: true
    },
    bookCover: {
        type: STRING,
        allowNull: true
    }
})
