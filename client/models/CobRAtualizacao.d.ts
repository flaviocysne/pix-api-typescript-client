export type CobRAtualizacao = {
    /**
     * Histórico das mudanças de status das cobranças recorrentes.
     */
    atualizacao: Array<{
        /**
         * Status da cobrança.
         */
        status: 'CRIADA' | 'ATIVA' | 'CONCLUIDA' | 'EXPIRADA' | 'REJEITADA' | 'CANCELADA';
        /**
         * Data e hora do registro de status atualizado. Respeita RFC 3339.
         */
        data: string;
    }>;
    encerramento?: ({
        /**
         * Informações sobre o cancelamento da cobrança
         */
        cancelamento?: {
            solicitante: CobRAtualizacao.solicitante;
            /**
             * Código do cancelamento. Corresponde ao código de cancelamento presente no catálogo de mensagens.
             */
            codigo: CobRAtualizacao.codigo;
            /**
             * Descricao da causa do cancelamento
             */
            descricao: string;
        };
    } | {
        /**
         * Informações sobre a rejeição da cobrança
         */
        rejeicao?: {
            /**
             * Código da rejeição. Corresponde ao código de rejeição presente no catálogo de mensagens.
             */
            codigo: CobRAtualizacao.codigo;
            /**
             * Descricao da causa da rejeição
             */
            descricao: string;
        };
    });
};
export declare namespace CobRAtualizacao {
    enum solicitante {
        PSP_PAGADOR = "PSP_PAGADOR",
        USUARIO_PAGADOR = "USUARIO_PAGADOR",
        PSP_RECEBEDOR = "PSP_RECEBEDOR",
        USUARIO_RECEBEDOR = "USUARIO_RECEBEDOR"
    }
    /**
     * Código do cancelamento. Corresponde ao código de cancelamento presente no catálogo de mensagens.
     */
    enum codigo {
        ACCT = "ACCT",
        BLCK = "BLCK",
        CCLD = "CCLD",
        FAIL = "FAIL",
        OTHR = "OTHR",
        SLBD = "SLBD",
        SLCR = "SLCR"
    }
}
