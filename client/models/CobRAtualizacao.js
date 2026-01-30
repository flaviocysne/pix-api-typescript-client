"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobRAtualizacao = void 0;
var CobRAtualizacao;
(function (CobRAtualizacao) {
    let solicitante;
    (function (solicitante) {
        solicitante["PSP_PAGADOR"] = "PSP_PAGADOR";
        solicitante["USUARIO_PAGADOR"] = "USUARIO_PAGADOR";
        solicitante["PSP_RECEBEDOR"] = "PSP_RECEBEDOR";
        solicitante["USUARIO_RECEBEDOR"] = "USUARIO_RECEBEDOR";
    })(solicitante = CobRAtualizacao.solicitante || (CobRAtualizacao.solicitante = {}));
    /**
     * Código do cancelamento. Corresponde ao código de cancelamento presente no catálogo de mensagens.
     */
    let codigo;
    (function (codigo) {
        codigo["ACCT"] = "ACCT";
        codigo["BLCK"] = "BLCK";
        codigo["CCLD"] = "CCLD";
        codigo["FAIL"] = "FAIL";
        codigo["OTHR"] = "OTHR";
        codigo["SLBD"] = "SLBD";
        codigo["SLCR"] = "SLCR";
    })(codigo = CobRAtualizacao.codigo || (CobRAtualizacao.codigo = {}));
})(CobRAtualizacao || (exports.CobRAtualizacao = CobRAtualizacao = {}));
