import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { WebhookCompleto } from '../models/WebhookCompleto';
import type { WebhooksConsultados } from '../models/WebhooksConsultados';
import type { WebhookSolicitado } from '../models/WebhookSolicitado';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class WebhookService {
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
    static putWebhook(chave: string, requestBody: WebhookSolicitado): CancelablePromise<any>;
    /**
     * Exibir informações acerca do Webhook Pix.
     * Endpoint para recuperação de informações sobre o Webhook Pix.
     *
     * @param chave
     * @returns WebhookCompleto Dados do webhook.
     * @throws ApiError
     */
    static getWebhook(chave: string): CancelablePromise<WebhookCompleto>;
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
    static deleteWebhook(chave: string): CancelablePromise<void>;
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
    static getWebhooks(inicio?: Inicio, fim?: Fim, paginacaoPaginaAtual?: number, paginacaoItensPorPagina?: number): CancelablePromise<WebhooksConsultados>;
}
