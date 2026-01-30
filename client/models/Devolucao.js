"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Devolucao = void 0;
var Devolucao;
(function (Devolucao) {
    /**
     * Status da devolução.
     */
    let status;
    (function (status) {
        status["EM_PROCESSAMENTO"] = "EM_PROCESSAMENTO";
        status["DEVOLVIDO"] = "DEVOLVIDO";
        status["NAO_REALIZADO"] = "NAO_REALIZADO";
    })(status = Devolucao.status || (Devolucao.status = {}));
})(Devolucao || (exports.Devolucao = Devolucao = {}));
