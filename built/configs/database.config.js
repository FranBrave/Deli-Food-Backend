"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
exports.__esModule = true;
exports.dbConnect = void 0;
var mongoose_1 = require("mongoose");
var mongoose_2 = __importDefault(require("mongoose"));
mongoose_2["default"].set('strictQuery', true);
var dbConnect = function () {
    (0, mongoose_1.connect)(process.env.MONGO_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }).then(function () { return console.log('Database connected'); }, function (error) { return console.log(error); });
};
exports.dbConnect = dbConnect;
