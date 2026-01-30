import type { CNPJ } from './CNPJ';
import type { CPF } from './CPF';
export type DadosPagadorRec = {
    pagador?: (CPF | CNPJ);
};
