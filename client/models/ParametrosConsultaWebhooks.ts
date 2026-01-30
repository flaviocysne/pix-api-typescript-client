/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Paginacao } from './Paginacao';
/**
 * Parâmetros utilizados para a realização de uma consulta de Webhooks.
 */
export type ParametrosConsultaWebhooks = {
    /**
     * Data inicial utilizada na consulta. Respeita RFC 3339.
     */
    inicio?: string;
    /**
     * Data de fim utilizada na consulta. Respeita RFC 3339.
     */
    fim?: string;
    paginacao?: Paginacao;
};

