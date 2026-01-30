/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PessoaFisicaRecorrencia } from './PessoaFisicaRecorrencia';
import type { PessoaJuridicaRecorrencia } from './PessoaJuridicaRecorrencia';
/**
 * Atributos de Configuração de Recorrência
 */
export type RecBase = {
    /**
     * Informações sobre o objeto da recorrência.
     */
    vinculo: {
        /**
         * Campo de texto livre para informações referentes ao contrato que permitam ao usuário pagador reconhecer o objeto dos pagamentos periódicos por meio do Pix Automático.
         */
        objeto?: string;
        /**
         * O objeto devedor organiza as informações sobre o devedor da recorrência.
         */
        devedor: (PessoaFisicaRecorrencia | PessoaJuridicaRecorrencia);
        /**
         * Número, identificador, ou código que representa o objeto da autorização (contrato, pedido etc.).
         */
        contrato: string;
    };
    /**
     * Informações sobre calendário da recorrência
     */
    calendario: {
        /**
         * Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601. Data estimada de primeiro pagamento.
         */
        dataInicial: string;
        /**
         * Campo opcional que deve ser preenchido para autorizações com vigência pré-definida, devendo ser compatível com os valores informados em tipoFrequencia e a dataInicialRecorrencia. Não deve ser preenchido para autorizações por tempo indeterminado. Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601.
         */
        dataFinal?: string;
        periodicidade: RecBase.periodicidade;
    };
    valor?: {
        /**
         * Campo opcional, deve ser preenchido apenas quando o valor dos pagamentos for fixo ou não for sujeito a alteração durante a vigência da autorização.
         */
        valorRec?: string;
        /**
         * Campo opcional. Valor definido pelo usuário recebedor. Se o usuário pagador atribuir um valor máximo para os pagamentos daquela autorização, ele não poderá ser inferior ao piso definido pelo usuário recebedor. Não pode ser preenchido nas autorizações de valor fixo, ou seja, com campo valor preenchido.
         */
        valorMinimoRecebedor?: string;
    };
};
export namespace RecBase {
    export enum periodicidade {
        SEMANAL = 'SEMANAL',
        MENSAL = 'MENSAL',
        TRIMESTRAL = 'TRIMESTRAL',
        SEMESTRAL = 'SEMESTRAL',
        ANUAL = 'ANUAL',
    }
}

