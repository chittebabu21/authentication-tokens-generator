var jwt = require('jsonwebtoken');

function _interopNamespaceDefault(e) {
    var n = Object.create(null);
    if (e) {
        Object.keys(e).forEach(function (k) {
            if (k !== 'default') {
                var d = Object.getOwnPropertyDescriptor(e, k);
                Object.defineProperty(n, k, d.get ? d : {
                    enumerable: true,
                    get: function () { return e[k]; }
                });
            }
        });
    }
    n.default = e;
    return Object.freeze(n);
}

var jwt__namespace = /*#__PURE__*/_interopNamespaceDefault(jwt);

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol, Iterator */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var OAuth2 = /** @class */ (function () {
    function OAuth2(publicKey, privateKey) {
        if (!privateKey) {
            privateKey = publicKey;
        }
        this.publicKey = publicKey;
        this.privateKey = privateKey;
    }
    OAuth2.prototype.generateAccessToken = function (payload, options) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                jwt__namespace.sign(payload, _this.privateKey, options, function (err, token) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else {
                                        resolve(token);
                                    }
                                });
                            })];
                    case 1:
                        token = _a.sent();
                        return [2 /*return*/, token];
                    case 2:
                        _a.sent();
                        throw new Error("Failed to generate access token.");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OAuth2.prototype.generateRefreshToken = function (payload, options) {
        return __awaiter(this, void 0, void 0, function () {
            var token;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                jwt__namespace.sign(payload, _this.privateKey, options, function (err, token) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else {
                                        resolve(token);
                                    }
                                });
                            })];
                    case 1:
                        token = _a.sent();
                        return [2 /*return*/, token];
                    case 2:
                        _a.sent();
                        throw new Error("Failed to generate refresh token.");
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OAuth2.prototype.validateToken = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            var payload;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, new Promise(function (resolve, reject) {
                                jwt__namespace.verify(token, _this.publicKey, function (err, payload) {
                                    if (err) {
                                        reject(err);
                                    }
                                    else {
                                        resolve(payload);
                                    }
                                });
                            })];
                    case 1:
                        payload = _a.sent();
                        return [2 /*return*/, payload ? true : false];
                    case 2:
                        _a.sent();
                        throw new Error('Failed to validate token.');
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    OAuth2.prototype.getPayload = function (token) {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                try {
                    return [2 /*return*/, JSON.parse(Buffer.from(token.split('.')[1], 'base64').toString())];
                }
                catch (err) {
                    throw new Error("Failed to get payload.");
                }
                return [2 /*return*/];
            });
        });
    };
    OAuth2.prototype.parseToken = function (token) {
        return jwt__namespace.decode(token);
    };
    return OAuth2;
}());

exports.OAuth2 = OAuth2;
//# sourceMappingURL=index.js.map
