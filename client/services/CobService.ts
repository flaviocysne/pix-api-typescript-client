/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CobCompleta } from '../models/CobCompleta';
import type { CobGerada } from '../models/CobGerada';
import type { CobRevisada } from '../models/CobRevisada';
import type { CobsConsultadas } from '../models/CobsConsultadas';
import type { CobSolicitada } from '../models/CobSolicitada';
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { Revisao } from '../models/Revisao';
import type { TxId } from '../models/TxId';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class CobService {
    /**
     * Criar cobrança imediata.
     * Endpoint para criar uma cobrança imediata.
     * @param txid
     * @param requestBody Dados para geração da cobrança imediata.
     * @returns CobGerada Cobrança imediata criada
     * @throws ApiError
     */
    public static putCob(
        txid: TxId,
        requestBody: CobSolicitada,
    ): CancelablePromise<CobGerada> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/cob/{txid}',
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
     * Revisar cobrança imediata.
     * @param txid
     * @param requestBody Dados para geração da cobrança.
     * @returns CobGerada Cobrança imediata revisada. A revisão deve ser incrementada em 1.
     * @throws ApiError
     */
    public static patchCob(
        txid: TxId,
        requestBody: CobRevisada,
    ): CancelablePromise<CobGerada> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/cob/{txid}',
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
     * Consultar cobrança imediata.
     * Endpoint para consultar uma cobrança através de um determinado txid.
     * @param txid
     * @param revisao
     * @returns CobCompleta Dados da cobrança imediata.
     * @throws ApiError
     */
    public static getCob(
        txid: TxId,
        revisao?: Revisao,
    ): CancelablePromise<CobCompleta> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cob/{txid}',
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
     * Criar cobrança imediata.
     * Endpoint para criar uma cobrança imediata, neste caso, o txid deve ser definido pelo PSP.
     * @param requestBody Dados para geração da cobrança imediata.
     * @returns CobGerada Cobrança imediata criada
     * @throws ApiError
     */
    public static postCob(
        requestBody: CobSolicitada,
    ): CancelablePromise<CobGerada> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/cob',
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
     * Consultar lista de cobranças imediatas.
     * Endpoint para consultar cobranças imediatas através de parâmetros como início, fim, cpf, cnpj e status.
     * @param inicio
     * @param fim
     * @param cpf
     * @param cnpj
     * @param locationPresente
     * @param status
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns CobsConsultadas Lista de cobranças imediatas.
     * @throws ApiError
     */
    public static getCob1(
        inicio: Inicio,
        fim: Fim,
        cpf?: string,
        cnpj?: string,
        locationPresente?: boolean,
        status?: string,
        paginacaoPaginaAtual?: number,
        paginacaoItensPorPagina: number = 100,
    ): CancelablePromise<CobsConsultadas> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/cob',
            query: {
                'inicio': inicio,
                'fim': fim,
                'cpf': cpf,
                'cnpj': cnpj,
                'locationPresente': locationPresente,
                'status': status,
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
