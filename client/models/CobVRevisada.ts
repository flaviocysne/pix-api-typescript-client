/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CobBase } from './CobBase';
import type { CobDataDeVencimento } from './CobDataDeVencimento';
import type { CobVValor } from './CobVValor';
import type { DadosDevedor } from './DadosDevedor';
import type { PayloadLocationCob } from './PayloadLocationCob';
/**
 * Dados enviados para revisão da cobrança com vencimento via API Pix
 */
export type CobVRevisada = ({
    /**
     * Os campos aninhados sob o identificador calendário organizam informações a respeito de controle de tempo da cobrança.
     */
    calendario?: CobDataDeVencimento;
} & DadosDevedor & {
    loc?: PayloadLocationCob;
} & {
    status?: CobVRevisada.status;
} & {
    valor?: CobVValor;
} & CobBase);
export namespace CobVRevisada {
    export enum status {
        REMOVIDA_PELO_USUARIO_RECEBEDOR = 'REMOVIDA_PELO_USUARIO_RECEBEDOR',
    }
}

