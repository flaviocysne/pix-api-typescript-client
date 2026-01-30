/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
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
export namespace DadosBancariosRecebedor {
    /**
     * Tipo da conta do usuário recebedor.
     */
    export enum tipoConta {
        CORRENTE = 'CORRENTE',
        POUPANCA = 'POUPANCA',
        PAGAMENTO = 'PAGAMENTO',
    }
}

