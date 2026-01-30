export type RecStatus = {
    status: RecStatus.status;
};
export declare namespace RecStatus {
    enum status {
        CRIADA = "CRIADA",
        APROVADA = "APROVADA",
        REJEITADA = "REJEITADA",
        EXPIRADA = "EXPIRADA",
        CANCELADA = "CANCELADA"
    }
}
