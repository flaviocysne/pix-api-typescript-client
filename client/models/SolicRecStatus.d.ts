export type SolicRecStatus = {
    status: SolicRecStatus.status;
};
export declare namespace SolicRecStatus {
    enum status {
        CRIADA = "CRIADA",
        ENVIADA = "ENVIADA",
        RECEBIDA = "RECEBIDA",
        REJEITADA = "REJEITADA",
        ACEITA = "ACEITA",
        EXPIRADA = "EXPIRADA",
        CANCELADA = "CANCELADA"
    }
}
