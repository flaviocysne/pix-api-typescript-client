/**
 * Identificador da localização do payload solicitada.
 */
export type PayloadLocationSolicitada = {
    tipoCob: PayloadLocationSolicitada.tipoCob;
};
export declare namespace PayloadLocationSolicitada {
    enum tipoCob {
        COB = "cob",
        COBV = "cobv"
    }
}
