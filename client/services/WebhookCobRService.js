"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookCobRService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class WebhookCobRService {
    /**
     * Configurar Webhook.
     * Endpoint para configuração do serviço de notificações acerca de cobranças recorrentes. Somente cobranças recorrentes associadas ao usuário recebedor serão notificadas.
     *
     * @param requestBody
     * @returns any Webhook para notificações.
     * @throws ApiError
     */
    static putWebhookcobr(requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static getWebhookcobr() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
    static deleteWebhookcobr() {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
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
exports.WebhookCobRService = WebhookCobRService;
