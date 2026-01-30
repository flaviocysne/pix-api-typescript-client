"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CobrancaStatus = void 0;
/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Estado do registro da cobrança. Não se confunde com o estado da cobrança em si, ou seja, não guarda relação com o fato de a cobrança encontrar-se vencida ou expirada, por exemplo.
 *
 * Os status são assim definidos:
 * - `ATIVA`: indica que o registro se refere a uma cobrança que foi gerada mas ainda não foi paga nem removida;
 * - `CONCLUIDA`: indica que o registro se refere a uma cobrança que já foi paga e, por conseguinte, não pode acolher outro pagamento;
 * - `REMOVIDO_PELO_USUARIO_RECEBEDOR`: indica que o usuário recebedor solicitou a remoção do registro da cobrança; e
 * - `REMOVIDO_PELO_PSP`: indica que o PSP Recebedor solicitou a remoção do registro da cobrança.
 *
 */
var CobrancaStatus;
(function (CobrancaStatus) {
    CobrancaStatus["ATIVA"] = "ATIVA";
    CobrancaStatus["CONCLUIDA"] = "CONCLUIDA";
    CobrancaStatus["REMOVIDA_PELO_USUARIO_RECEBEDOR"] = "REMOVIDA_PELO_USUARIO_RECEBEDOR";
    CobrancaStatus["REMOVIDA_PELO_PSP"] = "REMOVIDA_PELO_PSP";
})(CobrancaStatus || (exports.CobrancaStatus = CobrancaStatus = {}));
