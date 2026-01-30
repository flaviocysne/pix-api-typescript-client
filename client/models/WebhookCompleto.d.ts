export type WebhookCompleto = {
    webhookUrl: string;
    /**
     * Filtro pelo CNPJ do devedor. Não pode ser utilizado ao mesmo tempo que o CPF.
     */
    cnpj: string;
    /**
     * Data e hora em que o webhook foi cadastrado. Respeita RFC 3339.
     */
    readonly criacao: string;
};
