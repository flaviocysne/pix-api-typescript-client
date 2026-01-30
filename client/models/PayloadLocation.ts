/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
export namespace PayloadLocation {
    export enum tipoCob {
        COB = 'cob',
        COBV = 'cobv',
    }
}

