import type { Paginacao } from './Paginacao';
/**
 * Parâmetros utilizados para a realização de uma consulta de locations.
 */
export type ParametrosConsultaPayloadLocation = {
    /**
     * Data inicial utilizada na consulta. Respeita RFC 3339.
     */
    inicio: string;
    /**
     * Data de fim utilizada na consulta. Respeita RFC 3339.
     */
    fim: string;
    /**
     * Filtro pela existência de txid.
     */
    txIdPresente?: boolean;
    tipoCob?: ParametrosConsultaPayloadLocation.tipoCob;
    paginacao: Paginacao;
};
export declare namespace ParametrosConsultaPayloadLocation {
    enum tipoCob {
        COB = "cob",
        COBV = "cobv"
    }
}
