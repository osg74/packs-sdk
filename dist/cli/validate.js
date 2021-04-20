"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateMetadata = exports.handleValidate = void 0;
const helpers_1 = require("../testing/helpers");
const upload_validation_1 = require("../testing/upload_validation");
async function handleValidate({ manifestFile }) {
    const { manifest } = await Promise.resolve().then(() => __importStar(require(manifestFile)));
    return validateMetadata(manifest);
}
exports.handleValidate = handleValidate;
async function validateMetadata(manifest) {
    var _a;
    try {
        await upload_validation_1.validatePackMetadata(manifest);
    }
    catch (e) {
        const packMetadataValidationError = e;
        const validationErrors = (_a = packMetadataValidationError.validationErrors) === null || _a === void 0 ? void 0 : _a.map(error => error.message).join('\n');
        helpers_1.printAndExit(`${e.message}: \n${validationErrors}`);
    }
}
exports.validateMetadata = validateMetadata;
