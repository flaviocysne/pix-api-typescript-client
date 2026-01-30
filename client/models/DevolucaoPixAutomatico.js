"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevolucaoPixAutomatico = void 0;
var DevolucaoPixAutomatico;
(function (DevolucaoPixAutomatico) {
    /**
     * Status da devolução.
     */
    let status;
    (function (status) {
        status["EM_PROCESSAMENTO"] = "EM_PROCESSAMENTO";
        status["DEVOLVIDO"] = "DEVOLVIDO";
        status["NAO_REALIZADO"] = "NAO_REALIZADO";
    })(status = DevolucaoPixAutomatico.status || (DevolucaoPixAutomatico.status = {}));
})(DevolucaoPixAutomatico || (exports.DevolucaoPixAutomatico = DevolucaoPixAutomatico = {}));
