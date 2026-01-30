/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { WebhookCompleto } from '../models/WebhookCompleto';
import type { WebhooksConsultados } from '../models/WebhooksConsultados';
import type { WebhookSolicitado } from '../models/WebhookSolicitado';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class WebhookService {
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
    public static putWebhook(
        chave: string,
        requestBody: WebhookSolicitado,
    ): CancelablePromise<any> {
        return __request(OpenAPI, {
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
    public static getWebhook(
        chave: string,
    ): CancelablePromise<WebhookCompleto> {
        return __request(OpenAPI, {
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
    public static deleteWebhook(chave: string): CancelablePromise<void> {
        return __request(OpenAPI, {
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
    public static getWebhooks(
        inicio?: Inicio,
        fim?: Fim,
        paginacaoPaginaAtual?: number,
        paginacaoItensPorPagina: number = 100,
    ): CancelablePromise<WebhooksConsultados> {
        return __request(OpenAPI, {
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
