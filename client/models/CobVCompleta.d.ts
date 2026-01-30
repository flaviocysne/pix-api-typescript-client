import type { CobrancaStatus } from './CobrancaStatus';
import type { CobVGerada } from './CobVGerada';
import type { Pix } from './Pix';
import type { TxId } from './TxId';
export type CobVCompleta = (CobVGerada & {
    pix?: Array<(Pix & {
        txid?: TxId;
    })>;
} & {
    status?: CobrancaStatus;
} & {
    status: CobrancaStatus;
});
