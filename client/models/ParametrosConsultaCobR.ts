/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Paginacao } from './Paginacao';
import type { RecId } from './RecId';
/**
 * Parâmetros utilizados para a realização de uma consulta de cobranças.
 */
export type ParametrosConsultaCobR = {
    /**
     * Data inicial utilizada na consulta. Respeita RFC 3339.
     */
    inicio: string;
    /**
     * Data de fim utilizada na consulta. Respeita RFC 3339.
     */
    fim: string;
    idRec?: RecId;
    /**
     * Filtro pelo CPF do devedor. Não pode ser utilizado ao mesmo tempo que o CNPJ.
     */
    cpf?: string;
    /**
     * Filtro pelo CNPJ do devedor. Não pode ser utilizado ao mesmo tempo que o CPF.
     */
    cnpj?: string;
    /**
     * Filtro pelo status das cobranças.
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

