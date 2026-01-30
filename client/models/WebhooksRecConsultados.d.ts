import type { ParametrosConsultaWebhooks } from './ParametrosConsultaWebhooks';
import type { WebhookRecCompleto } from './WebhookRecCompleto';
export type WebhooksRecConsultados = {
    parametros?: ParametrosConsultaWebhooks;
    webhooksrec: Array<WebhookRecCompleto>;
};
