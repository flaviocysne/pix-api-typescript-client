/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CobRAtualizacao } from './CobRAtualizacao';
import type { CobRStatus } from './CobRStatus';
import type { CobRTentativas } from './CobRTentativas';
import type { PixAutomatico } from './PixAutomatico';
import type { RecId } from './RecId';
import type { TxId } from './TxId';
/**
 * Dados enviados para criação da cobrança recorrente via API Pix
 */
export type CobRNotification = {
    idRec?: RecId;
} & {
    txid?: TxId;
} & CobRStatus &
    CobRAtualizacao &
    CobRTentativas & {
        pix?: Array<
            PixAutomatico & {
                txid?: TxId;
            }
        >;
    } & {
        idRec: RecId;
        txid: TxId;
        status: CobRStatus.status;
    };
