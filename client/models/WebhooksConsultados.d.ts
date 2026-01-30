import type { ParametrosConsultaWebhooks } from './ParametrosConsultaWebhooks';
import type { WebhookCompleto } from './WebhookCompleto';
export type WebhooksConsultados = {
    parametros?: ParametrosConsultaWebhooks;
    webhooks: Array<WebhookCompleto>;
};
