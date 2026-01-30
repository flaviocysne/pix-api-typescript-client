/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { PayloadLocationRecCompleta } from '../models/PayloadLocationRecCompleta';
import type { PayloadLocationRecConsultadas } from '../models/PayloadLocationRecConsultadas';
import type { PayloadLocationRecGerada } from '../models/PayloadLocationRecGerada';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PayloadLocationRecService {
    /**
     * Criar location do payload.
     * Criar location do payload
     * @returns PayloadLocationRecGerada Dados da location do Payload.
     * @throws ApiError
     */
    public static postLocrec(): CancelablePromise<PayloadLocationRecGerada> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/locrec',
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Consultar locations cadastradas.
     * Endpoint para consultar locations cadastradas
     * @param inicio
     * @param fim
     * @param idRecPresente
     * @param convenio
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns PayloadLocationRecConsultadas lista dos locations cadastrados de acordo com o critério de busca.
     * @throws ApiError
     */
    public static getLocrec(
        inicio: Inicio,
        fim: Fim,
        idRecPresente?: boolean,
        convenio?: string,
        paginacaoPaginaAtual?: number,
        paginacaoItensPorPagina: number = 100,
    ): CancelablePromise<PayloadLocationRecConsultadas> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locrec',
            query: {
                'inicio': inicio,
                'fim': fim,
                'idRecPresente': idRecPresente,
                'convenio': convenio,
                'paginacao.paginaAtual': paginacaoPaginaAtual,
                'paginacao.itensPorPagina': paginacaoItensPorPagina,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Recuperar location do payload.
     * Recupera a location do payload
     * @param id
     * @returns PayloadLocationRecCompleta Dados da location do Payload.
     * @throws ApiError
     */
    public static getLocrec1(
        id: string,
    ): CancelablePromise<PayloadLocationRecCompleta> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/locrec/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Desvincular uma recorrência de uma location.
     * Endpoint utilizado para desvincular uma recorrência de uma location.
     *
     * Se executado com sucesso, a entidade `loc` não apresentará mais uma recorrência,
     * se apresentava anteriormente à chamada. Adicionalmente, a entidade associada ao
     * recurso desvinculado também passará a não mais apresentar um _location_. Esta operação
     * não altera o `status` do recurso em questão.
     *
     * @param id
     * @returns PayloadLocationRecCompleta Entidade representada pelo recurso informado desvinculada com sucesso.
     * @throws ApiError
     */
    public static deleteLocrecIdRec(
        id: string,
    ): CancelablePromise<PayloadLocationRecCompleta> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/locrec/{id}/idRec',
            path: {
                'id': id,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
