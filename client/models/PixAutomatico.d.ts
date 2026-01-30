import type { DevolucaoPixAutomatico } from './DevolucaoPixAutomatico';
import type { EndToEndId } from './EndToEndId';
import type { PixValorAbatimento } from './PixValorAbatimento';
import type { PixValorDesconto } from './PixValorDesconto';
import type { PixValorJuros } from './PixValorJuros';
import type { PixValorMulta } from './PixValorMulta';
import type { PixValorOriginal } from './PixValorOriginal';
import type { TxId } from './TxId';
export type PixAutomatico = {
    endToEndId: EndToEndId;
    txid: TxId;
    /**
     * Valor do Pix.
     */
    valor: (PixValorOriginal | PixValorJuros | PixValorMulta | PixValorAbatimento | PixValorDesconto);
    /**
     * Horário em que o Pix foi processado no PSP.
     */
    horario: string;
    infoPagador?: string;
    devolucoes?: Array<DevolucaoPixAutomatico>;
};
