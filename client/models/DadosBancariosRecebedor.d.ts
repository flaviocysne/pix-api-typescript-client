export type DadosBancariosRecebedor = {
    /**
     * Número da conta do usuário recebedor.
     */
    conta: string;
    /**
     * Tipo da conta do usuário recebedor.
     */
    tipoConta: DadosBancariosRecebedor.tipoConta;
    /**
     * Número da agência do usuário recebedor.
     */
    agencia?: string;
};
export declare namespace DadosBancariosRecebedor {
    /**
     * Tipo da conta do usuário recebedor.
     */
    enum tipoConta {
        CORRENTE = "CORRENTE",
        POUPANCA = "POUPANCA",
        PAGAMENTO = "PAGAMENTO"
    }
}
