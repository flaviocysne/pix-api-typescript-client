/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { SolicRecCompleta } from '../models/SolicRecCompleta';
import type { SolicRecRevisada } from '../models/SolicRecRevisada';
import type { SolicRecSolicitada } from '../models/SolicRecSolicitada';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class SolicRecService {
    /**
     * Criar solicitação de confirmação de recorrência.
     * Criar solicitação de confirmação de recorrência.
     * @param requestBody Dados para geração da solicitação da recorrência.
     * @returns SolicRecCompleta Solicitação de recorrência criada
     * @throws ApiError
     */
    public static postSolicrec(
        requestBody?: SolicRecSolicitada,
    ): CancelablePromise<SolicRecCompleta> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/solicrec',
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
     * Consultar solicitação de confirmação de recorrência.
     * Consultar solicitação.
     * @param idSolicRec
     * @returns SolicRecCompleta Dados da solicitação da recorrência.
     * @throws ApiError
     */
    public static getSolicrec(
        idSolicRec: string,
    ): CancelablePromise<SolicRecCompleta> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/solicrec/{idSolicRec}',
            path: {
                'idSolicRec': idSolicRec,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Revisar solicitação de confirmação de recorrência.
     * Revisar solicitação de confirmação de recorrência.
     * @param idSolicRec
     * @param requestBody Dados para revisão da solicitação da recorrência.
     * @returns SolicRecCompleta Solicitação de recorrência atualizada
     * @throws ApiError
     */
    public static patchSolicrec(
        idSolicRec: string,
        requestBody?: SolicRecRevisada,
    ): CancelablePromise<SolicRecCompleta> {
        return __request(OpenAPI, {
            method: 'PATCH',
            url: '/solicrec/{idSolicRec}',
            path: {
                'idSolicRec': idSolicRec,
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
}
