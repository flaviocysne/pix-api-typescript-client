export type SolicRecAtualizacao = {
    atualizacao: Array<{
        status: 'CRIADA' | 'ENVIADA' | 'RECEBIDA' | 'REJEITADA' | 'ACEITA' | 'EXPIRADA' | 'CANCELADA';
        /**
         * Data e hora do registro de status atualizado. Respeita RFC 3339.
         */
        data: string;
    }>;
};
