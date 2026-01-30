import type { WebhookRecCompleto } from '../models/WebhookRecCompleto';
import type { WebhookRecSolicitado } from '../models/WebhookRecSolicitado';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class WebhookRecService {
    /**
     * Configurar Webhook.
     * Endpoint para configuração do serviço de notificações acerca de recorrências. Somente recorrências associadas ao usuário recebedor serão notificadas.
     *
     * @param requestBody
     * @returns any Webhook para notificações.
     * @throws ApiError
     */
    static putWebhookrec(requestBody: WebhookRecSolicitado): CancelablePromise<any>;
    /**
     * Exibir informações acerca do Webhook.
     * Endpoint para recuperação de informações sobre o Webhook.
     *
     * @returns WebhookRecCompleto Dados do webhook.
     * @throws ApiError
     */
    static getWebhookrec(): CancelablePromise<WebhookRecCompleto>;
    /**
     * Cancelar o Webhook.
     * Endpoint para cancelamento do webhook. Não é a única forma pela qual um webhook pode ser
     * removido.
     *
     * @returns void
     * @throws ApiError
     */
    static deleteWebhookrec(): CancelablePromise<void>;
}
