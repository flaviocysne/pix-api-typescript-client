/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
export namespace PayloadLocationCompleta {
    export enum tipoCob {
        COB = 'cob',
        COBV = 'cobv',
    }
}

