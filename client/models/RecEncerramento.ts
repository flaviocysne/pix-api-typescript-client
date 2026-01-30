/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type RecEncerramento = {
    encerramento?: ({
        /**
         * Informações sobre a rejeição da recorrência
         */
        rejeicao?: {
            /**
             * Código da rejeição. Corresponde ao código de rejeição presente no catálogo de mensagens.
             */
            codigo: RecEncerramento.codigo;
            /**
             * Descricao da causa da rejeição
             */
            descricao: string;
        };
    } | {
        /**
         * Informações sobre o cancelamento da recorrência
         */
        cancelamento?: {
            solicitante: RecEncerramento.solicitante;
            /**
             * Código do cancelamento. Corresponde ao código de cancelamento presente no catálogo de mensagens.
             */
            codigo: RecEncerramento.codigo;
            /**
             * Descricao do cancelamento.
             */
            descricao: string;
        };
    });
};
export namespace RecEncerramento {
    /**
     * Código da rejeição. Corresponde ao código de rejeição presente no catálogo de mensagens.
     */
    export enum codigo {
        AP13 = 'AP13',
        AP14 = 'AP14',
    }
    export enum solicitante {
        PSP_PAGADOR = 'PSP_PAGADOR',
        USUARIO_PAGADOR = 'USUARIO_PAGADOR',
        PSP_RECEBEDOR = 'PSP_RECEBEDOR',
        USUARIO_RECEBEDOR = 'USUARIO_RECEBEDOR',
    }
}

