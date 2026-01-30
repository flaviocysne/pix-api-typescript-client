export type RecAtualizacao = {
    /**
     * Histórico das mudanças de status da recorrência.
     */
    atualizacao: Array<{
        /**
         * Status da recorrência.
         */
        status: 'CRIADA' | 'APROVADA' | 'REJEITADA' | 'EXPIRADA' | 'CANCELADA';
        /**
         * Data e hora do registro de status atualizado. Respeita RFC 3339.
         */
        data: string;
    }>;
};
