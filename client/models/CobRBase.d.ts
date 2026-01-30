import type { DadosBancariosRecebedor } from './DadosBancariosRecebedor';
/**
 * Atributos de cobrança recorrente
 */
export type CobRBase = {
    /**
     * Informações adicionais da fatura.
     */
    infoAdicional?: string;
    calendario?: {
        /**
         * Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601. É a data de vencimento da cobrança.
         */
        dataDeVencimento: string;
    };
    /**
     * Valor da cobrança recorrente
     */
    valor?: {
        /**
         * Valor original da cobrança.
         */
        original: string;
    };
    /**
     * Campo de ativação do ajuste da data prevista para liquidação para próximo dia útil caso o vencimento corrente seja um dia não útil. O PSP Recebedor deverá considerar os feriados locais com base no código município do usuário pagador.
     */
    ajusteDiaUtil: boolean;
    /**
     * O objeto recebedor organiza as informações sobre o recebedor da cobrança.
     */
    recebedor?: DadosBancariosRecebedor;
};
