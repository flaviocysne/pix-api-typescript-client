/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CobRBase } from './CobRBase';
import type { DadosBancariosRecebedor } from './DadosBancariosRecebedor';
import type { DadosDevedorRecorrencia } from './DadosDevedorRecorrencia';
import type { RecId } from './RecId';
/**
 * Dados enviados para criação da cobrança recorrente via API Pix
 */
export type CobRSolicitada = ({
    idRec?: RecId;
} & CobRBase & DadosDevedorRecorrencia & {
    idRec: RecId;
    calendario: {
        /**
         * Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601. É a data de vencimento da cobrança.
         */
        dataDeVencimento: string;
    };
    /**
     * Valor da cobrança recorrente
     */
    valor: {
        /**
         * Valor original da cobrança.
         */
        original: string;
    };
    /**
     * O objeto recebedor organiza as informações sobre o recebedor da cobrança.
     */
    recebedor: DadosBancariosRecebedor;
});

