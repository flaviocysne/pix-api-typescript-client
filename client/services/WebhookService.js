"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebhookService = void 0;
const OpenAPI_1 = require("../core/OpenAPI");
const request_1 = require("../core/request");
class WebhookService {
    /**
     * Configurar o Webhook Pix.
     * Endpoint para configuração do serviço de notificações acerca de Pix recebidos.
     * Somente Pix associados a um txid serão notificados.
     *
     * @param chave
     * @param requestBody
     * @returns any Webhook para notificações acerca de Pix recebidos associados a um txid.
     * @throws ApiError
     */
    static putWebhook(chave, requestBody) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'PUT',
            url: '/webhook/{chave}',
            path: {
                chave: chave,
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
     * Exibir informações acerca do Webhook Pix.
     * Endpoint para recuperação de informações sobre o Webhook Pix.
     *
     * @param chave
     * @returns WebhookCompleto Dados do webhook.
     * @throws ApiError
     */
    static getWebhook(chave) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/webhook/{chave}',
            path: {
                chave: chave,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Cancelar o webhook Pix.
     * Endpoint para cancelamento do webhook. Não é a única forma pela qual um webhook pode ser
     * removido.
     *
     * O PSP recebedor está livre para remover unilateralmente um webhook que esteja associado
     * a uma chave que não pertence mais a este usuário recebedor.
     *
     * @param chave
     * @returns void
     * @throws ApiError
     */
    static deleteWebhook(chave) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'DELETE',
            url: '/webhook/{chave}',
            path: {
                chave: chave,
            },
            errors: {
                403: `Requisição de participante autenticado que viola alguma regra de autorização.`,
                404: `Recurso solicitado não foi encontrado.`,
                503: `Serviço não está disponível no momento. Serviço solicitado pode estar em manutenção ou fora da janela de funcionamento.`,
            },
        });
    }
    /**
     * Consultar webhooks cadastrados.
     * Endpoint para consultar Webhooks cadastrados
     * @param inicio
     * @param fim
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns WebhooksConsultados lista dos locations cadastrados de acordo com o critério de busca.
     * @throws ApiError
     */
    static getWebhooks(inicio, fim, paginacaoPaginaAtual, paginacaoItensPorPagina = 100) {
        return (0, request_1.request)(OpenAPI_1.OpenAPI, {
            method: 'GET',
            url: '/webhook',
            query: {
                inicio: inicio,
                fim: fim,
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
exports.WebhookService = WebhookService;
