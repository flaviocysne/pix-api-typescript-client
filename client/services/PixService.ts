/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Devolucao } from '../models/Devolucao';
import type { DevolucaoId } from '../models/DevolucaoId';
import type { DevolucaoSolicitada } from '../models/DevolucaoSolicitada';
import type { EndToEndId } from '../models/EndToEndId';
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { Pix } from '../models/Pix';
import type { PixConsultados } from '../models/PixConsultados';
import type { TxId } from '../models/TxId';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class PixService {
    /**
     * Consultar Pix.
     * Endpoint para consultar um Pix através de um e2eid.
     * @param e2Eid
     * @returns Pix Dados do Pix efetuado.
     * @throws ApiError
     */
    public static getPix(e2Eid: EndToEndId): CancelablePromise<Pix> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pix/{e2eid}',
            path: {
                e2eid: e2Eid,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Consultar Pix recebidos.
     * Endpoint para consultar Pix recebidos
     * @param inicio
     * @param fim
     * @param txid
     * @param txIdPresente
     * @param devolucaoPresente
     * @param cpf
     * @param cnpj
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns PixConsultados lista dos Pix recebidos de acordo com o critério de busca.
     * @throws ApiError
     */
    public static getPixAll(
        inicio: Inicio,
        fim: Fim,
        txid?: TxId,
        txIdPresente?: boolean,
        devolucaoPresente?: boolean,
        cpf?: string,
        cnpj?: string,
        paginacaoPaginaAtual?: number,
        paginacaoItensPorPagina: number = 100,
    ): CancelablePromise<PixConsultados> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pix',
            query: {
                inicio: inicio,
                fim: fim,
                txid: txid,
                txIdPresente: txIdPresente,
                devolucaoPresente: devolucaoPresente,
                cpf: cpf,
                cnpj: cnpj,
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
     * Solicitar devolução.
     * Endpoint para solicitar uma devolução através de um e2eid do Pix e do ID da devolução. O motivo que será atribuído à PACS.004 será "MD06" ou "SL02" de acordo com a aba RTReason da PACS.004 que consta no Catálogo de Mensagens do Pix a depender da `natureza` da devolução (Vide a descrição deste campo).
     *
     * @param e2Eid
     * @param id
     * @param requestBody Dados para pedido de devolução.
     * @returns Devolucao Dados da devolução.
     * @throws ApiError
     */
    public static putPixDevolucao(
        e2Eid: EndToEndId,
        id: DevolucaoId,
        requestBody: DevolucaoSolicitada,
    ): CancelablePromise<Devolucao> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/pix/{e2eid}/devolucao/{id}',
            path: {
                e2eid: e2Eid,
                id: id,
            },
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Requisição com formato inválido.`,
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Consultar devolução.
     * Endpoint para consultar uma devolução através de um End To End ID do Pix e do ID da devolução
     * @param e2Eid
     * @param id
     * @returns Devolucao Dados da devolução.
     * @throws ApiError
     */
    public static getPixDevolucao(
        e2Eid: EndToEndId,
        id: DevolucaoId,
    ): CancelablePromise<Devolucao> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/pix/{e2eid}/devolucao/{id}',
            path: {
                e2eid: e2Eid,
                id: id,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
