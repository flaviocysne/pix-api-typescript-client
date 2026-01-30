import type { PayloadLocationId } from './PayloadLocationId';
/**
 * Identificador da localização do payload.
 */
export type PayloadLocation = {
    id: PayloadLocationId;
    /**
     * Localização do Payload a ser informada na criação da cobrança.
     */
    readonly location: string;
    tipoCob: PayloadLocation.tipoCob;
    /**
     * Data e hora em que a location foi criada. Respeita RFC 3339.
     */
    readonly criacao: string;
};
export declare namespace PayloadLocation {
    enum tipoCob {
        COB = "cob",
        COBV = "cobv"
    }
}
