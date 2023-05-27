"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Main = void 0;
const MultiplesOf3Or5_1 = require("./challenges/MultiplesOf3Or5");
class Main {
    constructor() {
        this.run = () => {
            const ceiling = 10;
            const rslt = MultiplesOf3Or5_1.Challenge.solution(ceiling);
            console.log('rslt', rslt);
        };
    }
}
exports.Main = Main;
