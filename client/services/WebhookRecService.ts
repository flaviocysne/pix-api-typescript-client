/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { WebhookRecCompleto } from '../models/WebhookRecCompleto';
import type { WebhookRecSolicitado } from '../models/WebhookRecSolicitado';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhookRecService {
    /**
     * Configurar Webhook.
     * Endpoint para configuração do serviço de notificações acerca de recorrências. Somente recorrências associadas ao usuário recebedor serão notificadas.
     *
     * @param requestBody
     * @returns any Webhook para notificações.
     * @throws ApiError
     */
    public static putWebhookrec(
        requestBody: WebhookRecSolicitado,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
            method: 'PUT',
            url: '/webhookrec',
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
     * @returns WebhookRecCompleto Dados do webhook.
     * @throws ApiError
     */
    public static getWebhookrec(): CancelablePromise<WebhookRecCompleto> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/webhookrec',
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
    public static deleteWebhookrec(): CancelablePromise<void> {
        return __request(OpenAPI, {
            method: 'DELETE',
            url: '/webhookrec',
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
}
