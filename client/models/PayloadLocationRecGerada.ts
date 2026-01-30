/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PayloadLocationRecId } from './PayloadLocationRecId';
/**
 * Identificador da localização do payload completo.
 */
export type PayloadLocationRecGerada = {
    id: PayloadLocationRecId;
    /**
     * Localização do Payload a ser informada na criação da recorrência.
     */
    readonly location: string;
    /**
     * Data e hora em que a location foi criada. Respeita RFC 3339.
     */
    readonly criacao: string;
};

