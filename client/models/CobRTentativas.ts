/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { EndToEndId } from './EndToEndId';
export type CobRTentativas = {
    /**
     * Histórico de Tentativas de Cobrança
     */
    tentativas?: Array<{
        /**
         * Data da liquidação da cobrança. Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601.
         */
        dataLiquidacao: string;
        /**
         * Tipo da tentativa da cobrança.
         */
        tipo: 'AGND' | 'NTAG' | 'RIFL';
        /**
         * Status da tentativa da cobrança.
         */
        status: 'SOLICITADA' | 'AGENDADA' | 'PAGA' | 'CANCELADA' | 'REJEITADA' | 'EXPIRADA';
        endToEndId: EndToEndId;
        /**
         * Histórico das mudanças de status da tentativa de cobrança.
         */
        atualizacao: Array<{
            /**
             * Status da tentativa da cobrança.
             */
            status: 'SOLICITADA' | 'AGENDADA' | 'PAGA' | 'CANCELADA' | 'REJEITADA' | 'EXPIRADA';
            /**
             * Data e hora do registro de status atualizado. Respeita RFC 3339.
             */
            data: string;
        }>;
        /**
         * Informações sobre a rejeição da tentativa da cobrança
         */
        rejeicao?: {
            /**
             * Código da rejeição da tentativa. Corresponde ao código de rejeição presente no catálogo de mensagens. Os códigos de rejeição da tentativa `AC05`,`AM09`,`DENC`,`DS27`,`DTED`,`MIDI`,`MSUC`,`NITX`,`RC09` e `DTED` causam a rejeição da cobrança recorrente correspondente.
             */
            codigo: 'AB10' | 'AC05' | 'AC06' | 'AM02' | 'AM09' | 'DENC' | 'DS27' | 'DTED' | 'DTNT' | 'FBRD' | 'IRNT' | 'MIDI' | 'MSUC' | 'NIEC' | 'NIPA' | 'NITX' | 'QUNT' | 'RC09' | 'UDEI';
            /**
             * Descricao da causa da rejeição
             */
            descricao: string;
        };
    }>;
};

