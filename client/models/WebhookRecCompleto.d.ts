export type WebhookRecCompleto = {
    webhookUrl: string;
    /**
     * Data e hora em que o webhook foi cadastrado. Respeita RFC 3339.
     */
    readonly criacao?: string;
};
