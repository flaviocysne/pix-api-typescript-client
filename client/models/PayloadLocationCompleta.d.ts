import type { PayloadLocationId } from './PayloadLocationId';
import type { TxId } from './TxId';
/**
 * Identificador da localização do payload completo.
 */
export type PayloadLocationCompleta = {
    id: PayloadLocationId;
    txid?: TxId;
    /**
     * Localização do Payload a ser informada na criação da cobrança.
     */
    readonly location: string;
    tipoCob: PayloadLocationCompleta.tipoCob;
    /**
     * Data e hora em que a location foi criada. Respeita RFC 3339.
     */
    readonly criacao: string;
};
export declare namespace PayloadLocationCompleta {
    enum tipoCob {
        COB = "cob",
        COBV = "cobv"
    }
}
