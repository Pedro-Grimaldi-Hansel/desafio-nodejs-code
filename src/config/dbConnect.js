import mongoose from "mongoose";

mongoose.connect("mongodb+srv://pedro:123@desafio-nodejs-code.o5e8prt.mongodb.net/desafio-nodejs-code");

let db = mongoose.connection;

export default db;