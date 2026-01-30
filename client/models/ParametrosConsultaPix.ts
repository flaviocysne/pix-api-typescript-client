/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Paginacao } from './Paginacao';
import type { TxId } from './TxId';
/**
 * Parâmetros utilizados para a realização de uma consulta de Pix.
 */
export type ParametrosConsultaPix = {
    /**
     * Data inicial utilizada na consulta. Respeita RFC 3339.
     */
    inicio: string;
    /**
     * Data de fim utilizada na consulta. Respeita RFC 3339.
     */
    fim: string;
    txid?: TxId;
    /**
     * Filtro pela existência de txid.
     */
    txIdPresente?: boolean;
    /**
     * Filtro pela existência de devolução.
     */
    devolucaoPresente?: boolean;
    /**
     * CPF
     */
    cpf?: string;
    /**
     * CNPJ
     */
    cnpj?: string;
    paginacao: Paginacao;
};

