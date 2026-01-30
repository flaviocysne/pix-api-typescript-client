"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DevolucaoNatureza = void 0;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Indica qual é a natureza da devolução. Uma devolução pode ser relacionada a um Pix comum (com códigos possíveis: `MD06`, `BE08` e `FR01` da pacs.004 e `REFU` da pacs.008),
 * ou a um Pix de Saque ou Troco (com códigos possíveis:  `MD06` e `SL02` da pacs.004). Na ausência deste campo a natureza deve ser interpretada como
 * sendo de um Pix comum (`ORIGINAL`).
 *
 * As naturezas são assim definidas:
 * - `ORIGINAL`: quando a devolução é solicitada pelo usuário recebedor e se refere a um Pix comum ou ao valor da compra em um Pix Troco (`MD06`);
 * - `RETIRADA`: quando a devolução é solicitada pelo usuário recebedor e se refere a um Pix Saque ou ao valor do troco em um Pix Troco (`SL02`);
 * - `MED_OPERACIONAL`: quando a devolução ocorre no âmbito do MED por motivo de falha operacional e se refere a um Pix comum (`BE08`);
 * - `MED_FRAUDE`: quando a devolução ocorre no âmbito do MED por fundada suspeita de fraude e se refere a um Pix comum (`FR01`).
 * - `MED_PIX_AUTOMATICO`: reembolso total ou parcial ao participante do usuário pagador no âmbito do MED (Mecanismo Especial de Devolução) para o Pix Automático pela utilização de recursos próprios para ressarcimento do usuário pagador.(`REFU`);
 *
 * Os valores de devoluções são sempre limitados aos valores máximos a seguir:
 * - Pix comum: o valor da devolução é limitado ao valor do próprio Pix (a natureza nesse caso pode ser: ORIGINAL, MED_OPERACIONAL ou MED_FRAUDE);
 * - Pix Saque: o valor da devolução é limitado ao valor da retirada (a natureza nesse caso deve ser: RETIRADA); e
 * - Pix Troco: o valor da devolução é limitado ao valor relativo à compra ou ao troco:
 * - Quando a devolução for referente à compra, o valor limita-se ao valor da compra (a natureza nesse caso deve ser ORIGINAL); e
 * - Quando a devolução for referente ao troco, o valor limita-se ao valor do troco (a natureza nesse caso deve ser RETIRADA).
 *
 */
var DevolucaoNatureza;
(function (DevolucaoNatureza) {
    DevolucaoNatureza["ORIGINAL"] = "ORIGINAL";
    DevolucaoNatureza["RETIRADA"] = "RETIRADA";
    DevolucaoNatureza["MED_OPERACIONAL"] = "MED_OPERACIONAL";
    DevolucaoNatureza["MED_FRAUDE"] = "MED_FRAUDE";
    DevolucaoNatureza["MED_PIX_AUTOMATICO"] = "MED_PIX_AUTOMATICO";
})(DevolucaoNatureza || (exports.DevolucaoNatureza = DevolucaoNatureza = {}));
