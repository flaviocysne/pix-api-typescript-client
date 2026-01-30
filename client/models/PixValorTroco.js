"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PixValorTroco = void 0;
var PixValorTroco;
(function (PixValorTroco) {
    /**
     * ##### Modalidade do Agente
     * <table><tr><th>SIGLA</th><th>Descrição</th></tr><tr><td>AGTEC</td><td>Agente Estabelecimento Comercial</td></tr><tr><td>AGTOT</td><td>Agente Outra Espécie de Pessoa Jurídica ou Correspondente no País</td></tr></table>
     *
     */
    let modalidadeAgente;
    (function (modalidadeAgente) {
        modalidadeAgente["AGTEC"] = "AGTEC";
        modalidadeAgente["AGTOT"] = "AGTOT";
    })(modalidadeAgente = PixValorTroco.modalidadeAgente || (PixValorTroco.modalidadeAgente = {}));
})(PixValorTroco || (exports.PixValorTroco = PixValorTroco = {}));
