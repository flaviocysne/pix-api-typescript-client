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
export declare namespace RecEncerramento {
    /**
     * Código da rejeição. Corresponde ao código de rejeição presente no catálogo de mensagens.
     */
    enum codigo {
        AP13 = "AP13",
        AP14 = "AP14"
    }
    enum solicitante {
        PSP_PAGADOR = "PSP_PAGADOR",
        USUARIO_PAGADOR = "USUARIO_PAGADOR",
        PSP_RECEBEDOR = "PSP_RECEBEDOR",
        USUARIO_RECEBEDOR = "USUARIO_RECEBEDOR"
    }
}
