import type { WebhookCobRCompleto } from '../models/WebhookCobRCompleto';
import type { WebhookCobRSolicitado } from '../models/WebhookCobRSolicitado';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class WebhookCobRService {
    /**
     * Configurar Webhook.
     * Endpoint para configuração do serviço de notificações acerca de cobranças recorrentes. Somente cobranças recorrentes associadas ao usuário recebedor serão notificadas.
     *
     * @param requestBody
     * @returns any Webhook para notificações.
     * @throws ApiError
     */
    static putWebhookcobr(requestBody: WebhookCobRSolicitado): CancelablePromise<any>;
    /**
     * Exibir informações acerca do Webhook.
     * Endpoint para recuperação de informações sobre o Webhook.
     *
     * @returns WebhookCobRCompleto Dados do webhook.
     * @throws ApiError
     */
    static getWebhookcobr(): CancelablePromise<WebhookCobRCompleto>;
    /**
     * Cancelar o Webhook.
     * Endpoint para cancelamento do webhook. Não é a única forma pela qual um webhook pode ser
     * removido.
     *
     * @returns void
     * @throws ApiError
     */
    static deleteWebhookcobr(): CancelablePromise<void>;
}
