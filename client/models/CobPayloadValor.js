"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobPayloadValor = void 0;
var CobPayloadValor;
(function (CobPayloadValor) {
    /**
     * ##### Modalidade do Agente
     * <table><tr><th>SIGLA</th><th>Descrição</th></tr><tr><td>AGTEC</td><td>Agente Estabelecimento Comercial</td></tr><tr><td>AGTOT</td><td>Agente Outra Espécie de Pessoa Jurídica ou Correspondente no País</td></tr><tr><td>AGPSS</td><td>Agente Facilitador de Serviço de Saque (<b>ATENÇÃO</b>: no mapeamento para o campo 'modalidadeAgente', da pacs.008, esse valor deve ser substituído por <b>AGFSS</b>)</td></tr></table>
     *
     */
    let modalidadeAgente;
    (function (modalidadeAgente) {
        modalidadeAgente["AGTEC"] = "AGTEC";
        modalidadeAgente["AGTOT"] = "AGTOT";
        modalidadeAgente["AGPSS"] = "AGPSS";
    })(modalidadeAgente = CobPayloadValor.modalidadeAgente || (CobPayloadValor.modalidadeAgente = {}));
})(CobPayloadValor || (exports.CobPayloadValor = CobPayloadValor = {}));
