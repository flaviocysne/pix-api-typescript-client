/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookCobRCompleto } from '../models/WebhookCobRCompleto';
import type { WebhookCobRSolicitado } from '../models/WebhookCobRSolicitado';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhookCobRService {
    /**
     * Configurar Webhook.
     * Endpoint para configuração do serviço de notificações acerca de cobranças recorrentes. Somente cobranças recorrentes associadas ao usuário recebedor serão notificadas.
     *
     * @param requestBody
     * @returns any Webhook para notificações.
     * @throws ApiError
     */
    public static putWebhookcobr(
        requestBody: WebhookCobRSolicitado,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/webhookcobr',
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
     * Exibir informações acerca do Webhook.
     * Endpoint para recuperação de informações sobre o Webhook.
     *
     * @returns WebhookCobRCompleto Dados do webhook.
     * @throws ApiError
     */
    public static getWebhookcobr(): CancelablePromise<WebhookCobRCompleto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhookcobr',
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Cancelar o Webhook.
     * Endpoint para cancelamento do webhook. Não é a única forma pela qual um webhook pode ser
     * removido.
     *
     * @returns void
     * @throws ApiError
     */
    public static deleteWebhookcobr(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/webhookcobr',
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
