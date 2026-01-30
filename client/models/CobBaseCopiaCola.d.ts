import type { CobBase } from './CobBase';
/**
 * Atributos comuns a todas entidades de Cobrança que possuem informação de Copia e Cola
 */
export type CobBaseCopiaCola = ({
    /**
     * Este campo retorna o valor do Pix Copia e Cola correspondente à cobrança. Trata-se da sequência de caracteres que representa o BR Code.
     */
    pixCopiaECola?: string;
} & CobBase);
