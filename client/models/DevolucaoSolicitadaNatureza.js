"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevolucaoSolicitadaNatureza = void 0;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indica qual é a natureza da devolução solicitada. Uma solicitação de devolução pelo usuário recebedor pode ser relacionada a um Pix
 * comum (com código: `MD06` da pacs.004), ou a um Pix de Saque ou Troco (com códigos possíveis: `MD06` e `SL02` da pacs.004). Na ausência
 * deste campo a natureza deve ser interpretada como sendo de um Pix comum (`ORIGINAL`).
 *
 * As naturezas são assim definidas:
 * - `ORIGINAL`: quando a devolução é solicitada pelo usuário recebedor e se refere a um Pix comum ou ao valor da compra em um Pix Troco (`MD06`);
 * - `RETIRADA`: quando a devolução é solicitada pelo usuário recebedor e se refere a um Pix Saque ou ao valor do troco em um Pix Troco (`SL02`).
 *
 * Os valores de devoluções são sempre limitados aos valores máximos a seguir:
 * - Pix comum: o valor da devolução é limitado ao valor do próprio Pix (a natureza nesse caso deve ser: ORIGINAL);
 * - Pix Saque: o valor da devolução é limitado ao valor da retirada (a natureza nesse caso deve ser: RETIRADA); e
 * - Pix Troco: o valor da devolução é limitado ao valor relativo à compra ou ao troco:
 * - Quando a devolução for referente à compra, o valor limita-se ao valor da compra (a natureza nesse caso deve ser ORIGINAL); e
 * - Quando a devolução for referente ao troco, o valor limita-se ao valor do troco (a natureza nesse caso deve ser RETIRADA).
 *
 */
var DevolucaoSolicitadaNatureza;
(function (DevolucaoSolicitadaNatureza) {
    DevolucaoSolicitadaNatureza["ORIGINAL"] = "ORIGINAL";
    DevolucaoSolicitadaNatureza["RETIRADA"] = "RETIRADA";
})(DevolucaoSolicitadaNatureza || (exports.DevolucaoSolicitadaNatureza = DevolucaoSolicitadaNatureza = {}));
