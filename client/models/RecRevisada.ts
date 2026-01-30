/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayloadLocationRecId } from './PayloadLocationRecId';
import type { RecAtivacaoSolicitada } from './RecAtivacaoSolicitada';
/**
 * Atributos de Revisão da Configuração de Recorrência
 */
export type RecRevisada = ({
    status?: RecRevisada.status;
} & {
    vinculo?: {
        /**
         * O objeto devedor organiza as informações sobre o devedor da recorrência.
         */
        devedor?: {
            /**
             * Nome do usuário.
             */
            nome: string;
        };
    };
} & {
    loc?: PayloadLocationRecId;
} & {
    /**
     * Informações sobre calendário da recorrência
     */
    calendario?: {
        /**
         * Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601. Data estimada de primeiro pagamento.
         */
        dataInicial?: string;
    };
} & RecAtivacaoSolicitada);
export namespace RecRevisada {
    export enum status {
        CANCELADA = 'CANCELADA',
    }
}

