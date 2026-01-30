import type { CobGerada } from './CobGerada';
import type { CobrancaStatus } from './CobrancaStatus';
import type { Pix } from './Pix';
import type { TxId } from './TxId';
export type CobCompleta = (CobGerada & {
    status?: CobrancaStatus;
} & {
    pix?: Array<(Pix & {
        txid?: TxId;
    })>;
} & {
    status: CobrancaStatus;
});
