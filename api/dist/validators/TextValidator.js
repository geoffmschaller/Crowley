"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const TextValidator = (input, max, min) => {
    try {
        if (input === undefined || input === null)
            return false;
        const cleaned = input.trim().replace(/ /, "");
        if (max && cleaned.length > max)
            return false;
        if (min && cleaned.length < min)
            return false;
        return cleaned !== null && cleaned !== "";
    }
    catch (e) {
        return false;
    }
};
exports.default = TextValidator;
