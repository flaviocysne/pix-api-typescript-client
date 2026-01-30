/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CobsVConsultadas } from '../models/CobsVConsultadas';
import type { CobVCompleta } from '../models/CobVCompleta';
import type { CobVGerada } from '../models/CobVGerada';
import type { CobVRevisada } from '../models/CobVRevisada';
import type { CobVSolicitada } from '../models/CobVSolicitada';
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { Revisao } from '../models/Revisao';
import type { TxId } from '../models/TxId';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CobVService {
    /**
     * Criar cobrança com vencimento.
     * Endpoint para criar uma cobrança com vencimento.
     * @param txid
     * @param requestBody Dados para geração da cobrança com vencimento.
     * @returns CobVGerada Cobrança com vencimento criada
     * @throws ApiError
     */
    public static putCobv(
        txid: TxId,
        requestBody: CobVSolicitada,
    ): CancelablePromise<CobVGerada> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cobv/{txid}',
            path: {
                'txid': txid,
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
     * Revisar cobrança com vencimento.
     * @param txid
     * @param requestBody Dados para geração da cobrança.
     * @returns CobVGerada Cobrança com vencimento revisada. A revisão deve ser incrementada em 1.
     * @throws ApiError
     */
    public static patchCobv(
        txid: TxId,
        requestBody: CobVRevisada,
    ): CancelablePromise<CobVGerada> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/cobv/{txid}',
            path: {
                'txid': txid,
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
     * Consultar cobrança com vencimento.
     * Endpoint para consultar uma cobrança com vencimento através de um determinado txid.
     * @param txid
     * @param revisao
     * @returns CobVCompleta Dados da cobrança com vencimento.
     * @throws ApiError
     */
    public static getCobv(
        txid: TxId,
        revisao?: Revisao,
    ): CancelablePromise<CobVCompleta> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cobv/{txid}',
            path: {
                'txid': txid,
            },
            query: {
                'revisao': revisao,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Consultar lista de cobranças com vencimento.
     * Endpoint para consultar cobranças com vencimento através de parâmetros como início, fim, cpf, cnpj e status.
     * @param inicio
     * @param fim
     * @param cpf
     * @param cnpj
     * @param locationPresente
     * @param status
     * @param loteCobVId
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns CobsVConsultadas Lista de cobranças com vencimento.
     * @throws ApiError
     */
    public static getCobv1(
        inicio: Inicio,
        fim: Fim,
        cpf?: string,
        cnpj?: string,
        locationPresente?: boolean,
        status?: string,
        loteCobVId?: number,
        paginacaoPaginaAtual?: number,
        paginacaoItensPorPagina: number = 100,
    ): CancelablePromise<CobsVConsultadas> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cobv',
            query: {
                'inicio': inicio,
                'fim': fim,
                'cpf': cpf,
                'cnpj': cnpj,
                'locationPresente': locationPresente,
                'status': status,
                'loteCobVId': loteCobVId,
                'paginacao.paginaAtual': paginacaoPaginaAtual,
                'paginacao.itensPorPagina': paginacaoItensPorPagina,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
