"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecStatus = void 0;
var RecStatus;
(function (RecStatus) {
    let status;
    (function (status) {
        status["CRIADA"] = "CRIADA";
        status["APROVADA"] = "APROVADA";
        status["REJEITADA"] = "REJEITADA";
        status["EXPIRADA"] = "EXPIRADA";
        status["CANCELADA"] = "CANCELADA";
    })(status = RecStatus.status || (RecStatus.status = {}));
})(RecStatus || (exports.RecStatus = RecStatus = {}));
