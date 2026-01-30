"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobRStatus = void 0;
var CobRStatus;
(function (CobRStatus) {
    let status;
    (function (status) {
        status["CRIADA"] = "CRIADA";
        status["ATIVA"] = "ATIVA";
        status["CONCLUIDA"] = "CONCLUIDA";
        status["EXPIRADA"] = "EXPIRADA";
        status["REJEITADA"] = "REJEITADA";
        status["CANCELADA"] = "CANCELADA";
    })(status = CobRStatus.status || (CobRStatus.status = {}));
})(CobRStatus || (exports.CobRStatus = CobRStatus = {}));
