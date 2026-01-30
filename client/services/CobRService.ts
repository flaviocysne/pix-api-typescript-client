/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CobRCompleta } from '../models/CobRCompleta';
import type { CobRGerada } from '../models/CobRGerada';
import type { CobRRevisada } from '../models/CobRRevisada';
import type { CobRSolicitada } from '../models/CobRSolicitada';
import type { CobsRConsultadas } from '../models/CobsRConsultadas';
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { TxId } from '../models/TxId';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CobRService {
    /**
     * Criar cobrança recorrente.
     * Endpoint para criar uma cobrança recorrente.
     * @param txid
     * @param requestBody Dados para geração da cobrança recorrente.
     * @returns CobRGerada Cobrança imediata recorrente.
     * @throws ApiError
     */
    public static putCobr(
        txid: TxId,
        requestBody: CobRSolicitada,
    ): CancelablePromise<CobRGerada> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cobr/{txid}',
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
     * Revisar cobrança recorrente.
     * @param txid
     * @param requestBody Dados para geração da cobrança.
     * @returns CobRGerada Cobrança recorrente revisada.
     * @throws ApiError
     */
    public static patchCobr(
        txid: TxId,
        requestBody: CobRRevisada,
    ): CancelablePromise<CobRGerada> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/cobr/{txid}',
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
     * Consultar cobrança recorrente.
     * Endpoint para consultar uma cobrança recorrente através de um determinado txid.
     * @param txid
     * @returns CobRCompleta Dados da cobrança recorrente.
     * @throws ApiError
     */
    public static getCobr(
        txid: TxId,
    ): CancelablePromise<CobRCompleta> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cobr/{txid}',
            path: {
                'txid': txid,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Criar cobrança recorrente.
     * Endpoint para criar uma cobrança recorrente, neste caso, o txid deve ser definido pelo PSP.
     * @param requestBody Dados para geração da cobrança recorrente.
     * @returns CobRGerada Cobrança recorrente criada.
     * @throws ApiError
     */
    public static postCobr(
        requestBody: CobRSolicitada,
    ): CancelablePromise<CobRGerada> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cobr',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Requisição com formato inválido.`,
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Consultar lista de cobranças recorrentes.
     * Endpoint para consultar cobranças recorrentes através de parâmetros como início, fim, idRec, cpf, cnpj, status e convênio.
     * @param inicio
     * @param fim
     * @param idRec
     * @param cpf
     * @param cnpj
     * @param status
     * @param convenio
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns CobsRConsultadas Lista de cobranças recorrentes.
     * @throws ApiError
     */
    public static getCobr1(
        inicio: Inicio,
        fim: Fim,
        idRec?: string,
        cpf?: string,
        cnpj?: string,
        status?: string,
        convenio?: string,
        paginacaoPaginaAtual?: number,
        paginacaoItensPorPagina: number = 100,
    ): CancelablePromise<CobsRConsultadas> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cobr',
            query: {
                'inicio': inicio,
                'fim': fim,
                'idRec': idRec,
                'cpf': cpf,
                'cnpj': cnpj,
                'status': status,
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
     * Solicitar retentativa de cobrança.
     * Endpoint para solicitar retentativa de uma cobrança recorrente.
     * @param txid
     * @param data Data prevista para liquidação da ordem de pagamento correspondente. Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601.
     * @returns any Cobrança recorrente.
     * @throws ApiError
     */
    public static postCobrRetentativa(
        txid: TxId,
        data: string,
    ): CancelablePromise<CobRCompleta> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cobr/{txid}/retentativa/{data}',
            path: {
                'txid': txid,
                'data': data,
            },
            errors: {
                400: `Requisição com formato inválido.`,
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
