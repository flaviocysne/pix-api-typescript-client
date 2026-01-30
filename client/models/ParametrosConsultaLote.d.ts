import type { Paginacao } from './Paginacao';
/**
 * Parâmetros utilizados para a realização de uma consulta de lote de cobranças com vencimento.
 */
export type ParametrosConsultaLote = {
    /**
     * Data inicial utilizada na consulta. Respeita RFC 3339.
     */
    inicio: string;
    /**
     * Data de fim utilizada na consulta. Respeita RFC 3339.
     */
    fim: string;
    paginacao: Paginacao;
};
