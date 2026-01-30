import type { PessoaFisica } from './PessoaFisica';
import type { PessoaJuridica } from './PessoaJuridica';
export type DadosRecebedor = {
    /**
     * O objeto recebedor organiza as informações sobre o credor da cobrança.
     */
    recebedor?: (PessoaFisica | (PessoaJuridica & {
        /**
         * Nome fantasia.
         */
        nomeFantasia?: string;
    }));
};
