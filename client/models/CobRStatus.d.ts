export type CobRStatus = {
    status?: CobRStatus.status;
};
export declare namespace CobRStatus {
    enum status {
        CRIADA = "CRIADA",
        ATIVA = "ATIVA",
        CONCLUIDA = "CONCLUIDA",
        EXPIRADA = "EXPIRADA",
        REJEITADA = "REJEITADA",
        CANCELADA = "CANCELADA"
    }
}
