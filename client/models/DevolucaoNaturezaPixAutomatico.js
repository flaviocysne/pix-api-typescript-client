"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevolucaoNaturezaPixAutomatico = void 0;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indica qual é a natureza da devolução. Uma devolução pode ser relacionada a um Pix comum (com códigos possíveis: `MD06` e `FR01` da pacs.004 e `REFU` da pacs.008). Na ausência deste campo a natureza deve ser interpretada como
 * sendo de um Pix comum (`ORIGINAL`).
 *
 * As naturezas são assim definidas:
 * - `ORIGINAL`: quando a devolução é solicitada pelo usuário recebedor e se refere a um Pix comum (`MD06`);
 * - `MED_FRAUDE`: quando a devolução ocorre no âmbito do MED (Mecanismo Especial de Devolução) por fundada suspeita de fraude e se refere a um Pix comum (`FR01`).
 * - `MED_PIX_AUTOMATICO`: reembolso total ou parcial ao participante do usuário pagador no âmbito do MED (Mecanismo Especial de Devolução) para o Pix Automático pela utilização de recursos próprios para ressarcimento do usuário pagador.(`REFU`);
 *
 * Os valores de devoluções são sempre limitados aos valores máximos a seguir:
 * - Pix comum: o valor da devolução é limitado ao valor do próprio Pix (a natureza nesse caso pode ser: ORIGINAL, MED_PIX_AUTOMATICO ou MED_FRAUDE);
 *
 */
var DevolucaoNaturezaPixAutomatico;
(function (DevolucaoNaturezaPixAutomatico) {
    DevolucaoNaturezaPixAutomatico["ORIGINAL"] = "ORIGINAL";
    DevolucaoNaturezaPixAutomatico["MED_PIX_AUTOMATICO"] = "MED_PIX_AUTOMATICO";
    DevolucaoNaturezaPixAutomatico["MED_FRAUDE"] = "MED_FRAUDE";
})(DevolucaoNaturezaPixAutomatico || (exports.DevolucaoNaturezaPixAutomatico = DevolucaoNaturezaPixAutomatico = {}));
