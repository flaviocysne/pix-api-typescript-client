import type { DadosComplementaresPessoa } from './DadosComplementaresPessoa';
export type DadosDevedorRecorrencia = {
    /**
     * O objeto devedor organiza as informações sobre o devedor da recorrência.
     */
    devedor?: ({
        /**
         * Email do usuário.
         */
        email?: string;
    } & DadosComplementaresPessoa);
};
