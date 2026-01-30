export type DadosBancarios = {
    /**
     * Número da conta do usuário pagador.
     */
    conta: string;
    /**
     * ISPB do usuário pagador.
     */
    ispbParticipante: string;
    /**
     * Número da agência do usuário pagador.
     */
    agencia?: string;
};
