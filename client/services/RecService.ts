/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { RecCompleta } from '../models/RecCompleta';
import type { RecGerada } from '../models/RecGerada';
import type { RecRevisada } from '../models/RecRevisada';
import type { RecsConsultadas } from '../models/RecsConsultadas';
import type { RecSolicitada } from '../models/RecSolicitada';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class RecService {
    /**
     * Consultar recorrência.
     * Consultar recorrência.
     * @param idRec
     * @param txid
     * @returns RecCompleta Dados da recorrência.
     * @throws ApiError
     */
    public static getRec(
        idRec: string,
        txid?: string,
    ): CancelablePromise<RecCompleta> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rec/{idRec}',
            path: {
                'idRec': idRec,
            },
            query: {
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
     * Revisar recorrência.
     * Revisar recorrência.
     * @param idRec
     * @param requestBody Dados para revisão da recorrência.
     * @returns RecGerada Recorrência revisada.
     * @throws ApiError
     */
    public static patchRec(
        idRec: string,
        requestBody?: RecRevisada,
    ): CancelablePromise<RecGerada> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/rec/{idRec}',
            path: {
                'idRec': idRec,
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
     * Consultar lista de recorrências.
     * Consultar lista de recorrências.
     * @param inicio
     * @param fim
     * @param cpf
     * @param cnpj
     * @param locationPresente
     * @param status
     * @param convenio
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns RecsConsultadas OK
     * @throws ApiError
     */
    public static getRec1(
        inicio: Inicio,
        fim: Fim,
        cpf?: string,
        cnpj?: string,
        locationPresente?: boolean,
        status?: string,
        convenio?: string,
        paginacaoPaginaAtual?: number,
        paginacaoItensPorPagina: number = 100,
    ): CancelablePromise<RecsConsultadas> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/rec',
            query: {
                'inicio': inicio,
                'fim': fim,
                'cpf': cpf,
                'cnpj': cnpj,
                'locationPresente': locationPresente,
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
     * Criar recorrência.
     * Criar recorrência
     * @param requestBody Dados para geração da recorrência.
     * @returns RecGerada Recorrência criada
     * @throws ApiError
     */
    public static postRec(
        requestBody?: RecSolicitada,
    ): CancelablePromise<RecGerada> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/rec',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                400: `Requisição com formato inválido.`,
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
