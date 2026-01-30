/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CNPJ } from './CNPJ';
import type { CPF } from './CPF';
import type { RecId } from './RecId';
/**
 * Dados criados ou alterados da cobrança recorrente via API Pix
 */
export type SolicRecBase = {
    idRec: RecId;
    calendario: {
        /**
         * Data da expiração da solicitação enviada ao usuário pagador. Respeita RFC 3339.
         */
        dataExpiracaoSolicitacao: string;
    };
    destinatario: (CPF | CNPJ);
};

