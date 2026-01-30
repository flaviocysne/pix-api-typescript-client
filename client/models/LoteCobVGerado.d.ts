import type { CobVGerada } from './CobVGerada';
export type LoteCobVGerado = {
    id: number;
    descricao: string;
    /**
     * Timestamp que indica o momento em que foi criado o lote. Respeita o formato definido na RFC 3339.
     */
    criacao: string;
    cobsv: Array<CobVGerada>;
};
