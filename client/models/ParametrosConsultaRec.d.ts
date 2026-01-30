import type { Paginacao } from './Paginacao';
/**
 * Parâmetros utilizados para a realização de uma consulta de recorrências.
 */
export type ParametrosConsultaRec = {
    /**
     * Data inicial utilizada na consulta. Respeita RFC 3339.
     */
    inicio: string;
    /**
     * Data de fim utilizada na consulta. Respeita RFC 3339.
     */
    fim: string;
    /**
     * Filtro pelo CPF do devedor. Não pode ser utilizado ao mesmo tempo que o CNPJ.
     */
    cpf?: string;
    /**
     * Filtro pelo CNPJ do devedor. Não pode ser utilizado ao mesmo tempo que o CPF.
     */
    cnpj?: string;
    /**
     * Filtro pela existência de location vinculada.
     */
    locationPresente?: boolean;
    /**
     * Filtro pelo status das recorrências.
     */
    status?: string;
    recebedor?: {
        /**
         * Convênio entre usuário e participante recebedor.
         */
        convenio?: string;
    };
    paginacao: Paginacao;
};
