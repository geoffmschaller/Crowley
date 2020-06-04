"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class APIResponse {
}
APIResponse.error = (res, message, payload) => {
    return res.status(200).json({
        status: 500,
        message: message,
        payload: payload
    });
};
APIResponse.success = (res, message, payload) => {
    return res.status(200).json({
        status: 200,
        message: message,
        payload: payload
    });
};
exports.default = APIResponse;
