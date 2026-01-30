/**
 * Valores monetários.
 */
export type CobVValor = {
    /**
     * Valor original da cobrança.
     */
    original?: string;
    /**
     * Multa aplicada à cobrança
     */
    multa?: {
        /**
         * ##### Modalidade da multa, conforme tabela de domínios.
         * <table><tr><th>Descrição</th><th>Domínio</th></tr><tr><td>Valor Fixo</td><td>1</td></tr><tr><td>Percentual</td><td>2</td></tr></table>
         *
         */
        modalidade: number;
        /**
         * Multa do documento em valor absoluto ou percentual, conforme "valor.multa.modalidade".
         */
        valorPerc: string;
    };
    /**
     * Juro aplicado à cobrança
     */
    juros?: {
        /**
         * ##### Modalidade de juros, conforme tabela de domínios.
         * <table><tr><th>Descrição</th><th>Domínio</th></tr><tr><td>Valor (dias corridos)</td><td>1</td></tr><tr><td>Percentual ao dia (dias corridos)</td><td>2</td></tr><tr><td>Percentual ao mês (dias corridos)</td><td>3</td></tr><tr><td>Percentual ao ano (dias corridos)</td><td>4</td></tr><tr><td>Valor (dias úteis)</td><td>5</td></tr><tr><td>Percentual ao dia (dias úteis)</td><td>6</td></tr><tr><td>Percentual ao mês (dias úteis)</td><td>7</td></tr><tr><td>Percentual ao ano (dias úteis)</td><td>8</td></tr></table>
         *
         */
        modalidade: number;
        valorPerc: string;
    };
    /**
     * Abatimento aplicado à cobrança
     */
    abatimento?: any;
    /**
     * Descontos aplicados à cobrança
     */
    desconto?: {
        /**
         * Descontos absolutos aplicados à cobrança.
         */
        descontoDataFixa?: Array<Object>;
    } | {
        /**
         * Abatimentos ou outras deduções aplicadas ao documento, em valor absoluto ou percentual do valor original do documento.
         */
        valorPerc: string;
    };
};
