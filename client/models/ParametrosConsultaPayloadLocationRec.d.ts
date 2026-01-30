import type { Paginacao } from './Paginacao';
/**
 * Parâmetros utilizados para a realização de uma consulta de locations.
 */
export type ParametrosConsultaPayloadLocationRec = {
    /**
     * Data inicial utilizada na consulta. Respeita RFC 3339.
     */
    inicio: string;
    /**
     * Data de fim utilizada na consulta. Respeita RFC 3339.
     */
    fim: string;
    /**
     * Filtro pela existência de id da recorrência.
     */
    idRecPresente?: boolean;
    recebedor?: {
        /**
         * Convênio entre usuário e participante recebedor.
         */
        convenio?: string;
    };
    paginacao: Paginacao;
};
