"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const TextValidator_1 = __importDefault(require("./TextValidator"));
const EmailValidator = (input) => {
    try {
        if (input === undefined || input === null)
            return false;
        const cleaned = input.trim().replace(/ /, "").toString().toLowerCase();
        const userSplit = cleaned.split("@");
        if (userSplit.length != 2)
            return false;
        const user = userSplit[0];
        const userResult = TextValidator_1.default(user);
        if (!userResult)
            return false;
        const companySplit = userSplit[1].split(".");
        if (companySplit.length < 2)
            return false;
        const company = companySplit[0];
        const companyResult = TextValidator_1.default(company);
        if (!companyResult)
            return false;
        const domain = companySplit[1];
        const domainResult = TextValidator_1.default(domain);
        if (!domainResult)
            return false;
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.default = EmailValidator;
