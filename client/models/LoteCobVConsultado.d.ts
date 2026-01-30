import type { Problema } from './Problema';
import type { TxId } from './TxId';
export type LoteCobVConsultado = {
    id: number;
    descricao: string;
    /**
     * Timestamp que indica o momento em que foi criado o lote. Respeita o formato definido na RFC 3339.
     */
    criacao: string;
    cobsv: Array<{
        txid: TxId;
        status: 'EM_PROCESSAMENTO' | 'CRIADA' | 'NEGADA';
        problema?: Problema;
        /**
         * Data e hora em que a cobrança foi criada. Respeita RFC 3339.
         */
        readonly criacao?: string;
    }>;
};
