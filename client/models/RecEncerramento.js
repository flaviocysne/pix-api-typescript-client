"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RecEncerramento = void 0;
var RecEncerramento;
(function (RecEncerramento) {
    /**
     * Código da rejeição. Corresponde ao código de rejeição presente no catálogo de mensagens.
     */
    let codigo;
    (function (codigo) {
        codigo["AP13"] = "AP13";
        codigo["AP14"] = "AP14";
    })(codigo = RecEncerramento.codigo || (RecEncerramento.codigo = {}));
    let solicitante;
    (function (solicitante) {
        solicitante["PSP_PAGADOR"] = "PSP_PAGADOR";
        solicitante["USUARIO_PAGADOR"] = "USUARIO_PAGADOR";
        solicitante["PSP_RECEBEDOR"] = "PSP_RECEBEDOR";
        solicitante["USUARIO_RECEBEDOR"] = "USUARIO_RECEBEDOR";
    })(solicitante = RecEncerramento.solicitante || (RecEncerramento.solicitante = {}));
})(RecEncerramento || (exports.RecEncerramento = RecEncerramento = {}));
