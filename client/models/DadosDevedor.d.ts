import type { PessoaFisica } from './PessoaFisica';
import type { PessoaJuridica } from './PessoaJuridica';
export type DadosDevedor = {
    /**
     * O objeto devedor organiza as informações sobre o devedor da cobrança.
     */
    devedor?: (PessoaFisica | PessoaJuridica);
};
