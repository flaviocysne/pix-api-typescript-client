import type { Violacao } from './Violacao';
export type Problema = {
    /**
     * URI de referência que identifica o tipo de problema. De acordo com a RFC 7807.
     */
    type: string;
    /**
     * Descrição resumida do problema.
     */
    title: string;
    /**
     * Código HTTP do status retornado.
     */
    status: number;
    /**
     * Descrição completa do problema.
     */
    detail?: string;
    /**
     * Identificador de correlação do problema para fins de suporte
     */
    correlationId?: string;
    violacoes?: Array<Violacao>;
};
