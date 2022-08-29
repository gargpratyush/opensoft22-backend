"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbConn = require('../config/db.config');
exports.getAllItems = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    dbConn.query('select * from menu', (err, result) => {
        if (err)
            console.log(err);
        res.status(200).send(result);
    });
});
exports.getItemByName = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    dbConn.query(`select * from menu where menu.name = '${req.params.name}'`, (err, result) => {
        if (err)
            console.log(err);
        res.status(200).send(result);
    });
});
exports.getItemByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    dbConn.query(`select * from menu where menu.ID = '${req.params.id}'`, (err, result) => {
        if (err)
            console.log(err);
        res.status(200).send(result);
    });
});
exports.addItem = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const newitem = req.body;
    dbConn.query(`insert into menu (name,category,nonveg,price,frequency) values ('${newitem.name}','${newitem.category}',${newitem.nonveg},'${newitem.price}',0)`, (err) => {
        if (err)
            console.log(err);
    });
});
exports.deleteItemByID = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    dbConn.query(`delete * from menu where id='${req.params.id}'`, (err) => {
        if (err)
            console.log(err);
    });
});
