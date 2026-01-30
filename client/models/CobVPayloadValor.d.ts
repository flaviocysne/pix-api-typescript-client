/**
 * Todos os campos que indicam valores monetários obedecem ao pattern \d{1,10}\.\d{2}. O separador decimal é o caractere ponto. Não é aplicável utilizar separador de milhar. Exemplos de valores aderentes ao padrão: “1.00”, “123.99”, “123456789.23
 */
export type CobVPayloadValor = {
    /**
     * Valor original da cobrança.
     */
    original?: string;
    /**
     * Multa aplicada à cobrança
     */
    multa?: string;
    /**
     * Juro aplicado à cobrança
     */
    juros?: string;
    /**
     * Abatimento aplicado à cobrança
     */
    abatimento?: string;
    /**
     * Descontos aplicados à cobrança
     */
    desconto?: string;
    /**
     * Valor final da cobrança.
     */
    final: string;
};
