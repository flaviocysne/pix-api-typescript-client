/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type CobDataDeVencimento = {
    /**
     * Trata-se de uma data, no formato `YYYY-MM-DD`, segundo ISO 8601. É a data de vencimento da cobrança. A cobrança pode ser honrada até esse dia, inclusive, em qualquer horário do dia.
     */
    dataDeVencimento: string;
    /**
     * Trata-se da quantidade de dias corridos após calendario.dataDeVencimento,
     * em que a cobrança poderá ser paga.
     *
     * Sempre que a data de vencimento cair em um fim de semana ou em um feriado para o usuário pagador,
     * ela deve ser automaticamente prorrogada para o primeiro dia útil subsequente. Todos os campos
     * que façam referência a esta data (`validadeAposVencimento`; `desconto`; `juros` e `multa`) devem assumir
     * essa prorrogação, quando for o caso.
     *
     * Para ilustrar o funcionamento, seguem alguns exemplos, onde:
     * - ``(#)`` representa a data de vencimento;
     * - ``(*)`` representa a data ajustada em função de dias não úteis;
     * - os ``(<número>)`` correspondem aos dias adicionais de validade para o pagamento.
     *
     * Exemplo A:
     *
     * ```txt
     * dataDeVencimento: 2020-10-20, terça-feira.
     * validadeAposVencimento: 4
     *
     * Tenta-se pagar no dia 2020-10-20, terça: aceito. (#)(*)
     * Tenta-se pagar no dia 2020-10-21, quarta: aceito. (1)
     * Tenta-se pagar no dia 2020-10-22, quinta: aceito. (2)
     * Tenta-se pagar no dia 2020-10-23, sexta: aceito. (3)
     * Tenta-se pagar no dia 2020-10-24, sábado: aceito.
     * Tenta-se pagar no dia 2020-10-25, domingo: aceito. (Feriado)
     * Tenta-se pagar no dia 2020-10-26, segunda: aceito. (4)
     * Tenta-se pagar no dia 2020-10-27, terça: negado.
     * ```
     *
     * Exemplo B:
     *
     * ```txt
     * dataDeVencimento: 2020-12-25, sexta-feira, feriado.
     * validadeAposVencimento: 0
     *
     * Tenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)
     * Tenta-se pagar no dia 2020-12-26, sábado: aceito.
     * Tenta-se pagar no dia 2020-12-27, domingo: aceito.
     * Tenta-se pagar no dia 2020-12-28, segunda: aceito. (*)
     * Tenta-se pagar no dia 2020-12-29, terça: negado.
     * ```
     *
     * Exemplo C:
     *
     * ```txt
     * dataDeVencimento: 2020-12-25, sexta-feira, feriado.
     * validadeAposVencimento: 1
     *
     * Tenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)
     * Tenta-se pagar no dia 2020-12-26, sábado: aceito.
     * Tenta-se pagar no dia 2020-12-27, domingo: aceito.
     * Tenta-se pagar no dia 2020-12-28, segunda: aceito. (*)
     * Tenta-se pagar no dia 2020-12-29, terça: aceito. (1)
     * Tenta-se pagar no dia 2020-12-30, quarta: negado.
     * ```
     *
     * Exemplo D:
     *
     * ```txt
     * dataDeVencimento: 2020-12-25, sexta-feira, feriado.
     * validadeAposVencimento: 3
     *
     * Tenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)
     * Tenta-se pagar no dia 2020-12-26, sábado: aceito.
     * Tenta-se pagar no dia 2020-12-27, domingo: aceito.
     * Tenta-se pagar no dia 2020-12-28, segunda: aceito. (*)
     * Tenta-se pagar no dia 2020-12-29, terça: aceito. (1)
     * Tenta-se pagar no dia 2020-12-30, quarta: aceito. (2)
     * Tenta-se pagar no dia 2020-12-31, quinta: aceito. (3)
     * Tenta-se pagar no dia 2021-01-01, sexta: negado.
     * ```
     *
     * Exemplo E:
     *
     * ```txt
     * dataDeVencimento: 2020-12-25, sexta-feira, feriado.
     * validadeAposVencimento: 4
     *
     * Tenta-se pagar no dia 2020-12-25, sexta: aceito. (#)(Feriado)
     * Tenta-se pagar no dia 2020-12-26, sábado: aceito.
     * Tenta-se pagar no dia 2020-12-27, domingo: aceito.
     * Tenta-se pagar no dia 2020-12-28, segunda: aceito. (*)
     * Tenta-se pagar no dia 2020-12-29, terça: aceito. (1)
     * Tenta-se pagar no dia 2020-12-30, quarta: aceito. (2)
     * Tenta-se pagar no dia 2020-12-31, quinta: aceito. (3)
     * Tenta-se pagar no dia 2021-01-01, sexta: aceito. (Feriado)
     * Tenta-se pagar no dia 2021-01-02, sábado: aceito.
     * Tenta-se pagar no dia 2021-01-03, domingo: aceito.
     * Tenta-se pagar no dia 2021-01-04, segunda: aceito. (4)
     * Tenta-se pagar no dia 2021-01-05, terça: negado.
     * ```
     *
     * Exemplo F:
     *
     * ```txt
     * dataDeVencimento: 2021-08-27, sexta-feira.
     * validadeAposVencimento: 5
     *
     * Tenta-se pagar no dia 2021-08-27, sexta: aceito. (#)(*)
     * Tenta-se pagar no dia 2021-08-28, sábado: aceito. (1)
     * Tenta-se pagar no dia 2021-08-29, domingo: aceito. (2)
     * Tenta-se pagar no dia 2021-08-30, segunda: aceito. (3)
     * Tenta-se pagar no dia 2021-08-31, terça: aceito. (4)
     * Tenta-se pagar no dia 2021-09-01, quarta: aceito. (5)
     * Tenta-se pagar no dia 2021-09-02, quinta: negado.
     * ```
     *
     * Exemplo G:
     *
     * ```txt
     * dataDeVencimento: 2021-08-28, sábado.
     * validadeAposVencimento: 5
     *
     * Tenta-se pagar no dia 2021-08-28, sábado: aceito. (#)
     * Tenta-se pagar no dia 2021-08-29, domingo: aceito.
     * Tenta-se pagar no dia 2021-08-30, segunda: aceito. (*)
     * Tenta-se pagar no dia 2021-08-31, terça: aceito. (1)
     * Tenta-se pagar no dia 2021-09-01, quarta: aceito. (2)
     * Tenta-se pagar no dia 2021-09-02, quinta: aceito. (3)
     * Tenta-se pagar no dia 2021-09-03, sexta: aceito. (4)
     * Tenta-se pagar no dia 2021-09-04, sabado: aceito.
     * Tenta-se pagar no dia 2021-09-05, domingo: aceito.
     * Tenta-se pagar no dia 2021-09-06, segunda: aceito. (5)
     * ```
     *
     */
    validadeAposVencimento?: number;
};

