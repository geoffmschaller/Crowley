"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BooleanValidator = (input) => {
    if (input === undefined || input === null)
        return false;
    return (input.toLowerCase() === 'true' || input.toLowerCase() === 'false');
};
exports.default = BooleanValidator;
