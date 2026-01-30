import type { CobRBase } from './CobRBase';
import type { CobRStatus } from './CobRStatus';
import type { DadosBancariosRecebedor } from './DadosBancariosRecebedor';
import type { DadosDevedorRecorrencia } from './DadosDevedorRecorrencia';
import type { PessoaJuridicaRecorrencia } from './PessoaJuridicaRecorrencia';
import type { RecId } from './RecId';
import type { TxId } from './TxId';
/**
 * Dados criados ou alterados da cobrança recorrente via API Pix
 */
export type CobRGerada = {
    idRec?: RecId;
} & {
    txid?: TxId;
} & CobRBase & {
    calendario?: {
        /**
         * Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601. É a data de criação da cobrança.
         */
        criacao: string;
    };
} & {
    recebedor?: PessoaJuridicaRecorrencia;
} & CobRStatus & DadosDevedorRecorrencia & {
    idRec: RecId;
    txid: TxId;
    calendario: {
        /**
         * Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601. É a data de criação da cobrança.
         */
        criacao: string;
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
    recebedor: DadosBancariosRecebedor | PessoaJuridicaRecorrencia;
    status: CobRStatus.status;
};
