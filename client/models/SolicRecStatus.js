"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SolicRecStatus = void 0;
var SolicRecStatus;
(function (SolicRecStatus) {
    let status;
    (function (status) {
        status["CRIADA"] = "CRIADA";
        status["ENVIADA"] = "ENVIADA";
        status["RECEBIDA"] = "RECEBIDA";
        status["REJEITADA"] = "REJEITADA";
        status["ACEITA"] = "ACEITA";
        status["EXPIRADA"] = "EXPIRADA";
        status["CANCELADA"] = "CANCELADA";
    })(status = SolicRecStatus.status || (SolicRecStatus.status = {}));
})(SolicRecStatus || (exports.SolicRecStatus = SolicRecStatus = {}));
