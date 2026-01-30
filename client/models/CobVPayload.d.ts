import type { CobApresentacao } from './CobApresentacao';
import type { CobBase } from './CobBase';
import type { CobCriacao } from './CobCriacao';
import type { CobDataDeVencimento } from './CobDataDeVencimento';
import type { CobrancaStatus } from './CobrancaStatus';
import type { CobVPayloadValor } from './CobVPayloadValor';
import type { DadosRecebedor } from './DadosRecebedor';
import type { PessoaFisica } from './PessoaFisica';
import type { PessoaJuridica } from './PessoaJuridica';
import type { Revisao } from './Revisao';
import type { TxId } from './TxId';
/**
 * Dados da cobrança com vencimento acessados pelo payload JSON
 */
export type CobVPayload = ({
    /**
     * Os campos aninhados sob o identificador calendário organizam informações a respeito de controle de tempo da cobrança.
     */
    calendario?: (CobCriacao & CobApresentacao & CobDataDeVencimento & {
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
        validadeAposVencimento: number;
    });
} & {
    /**
     * Os campos aninhados sob o objeto devedor são opcionais e identificam o devedor, ou seja, a pessoa ou a instituição a quem a cobrança está endereçada. Não identifica, necessariamente, quem irá efetivamente realizar o pagamento. Um CPF pode ser o devedor de uma cobrança, mas pode acontecer de outro CPF realizar, efetivamente, o pagamento do documento. Não é permitido que o campo `devedor.cpf` e campo `devedor.cnpj` estejam preenchidos ao mesmo tempo. Se o campo `devedor.cnpj` está preenchido, então o campo `devedor.cpf` não pode estar preenchido, e vice-versa. Se o campo `devedor.nome` está preenchido, então deve existir ou um `devedor.cpf` ou um campo `devedor.cnpj` preenchido.
     */
    devedor?: (PessoaFisica | PessoaJuridica);
} & DadosRecebedor & {
    txid?: TxId;
    revisao?: Revisao;
} & {
    status?: CobrancaStatus;
} & {
    valor?: CobVPayloadValor;
} & CobBase & {
    /**
     * Os campos aninhados sob o identificador calendário organizam informações a respeito de controle de tempo da cobrança.
     */
    calendario: (CobCriacao & CobApresentacao & CobDataDeVencimento & {
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
        validadeAposVencimento: number;
    });
    /**
     * Os campos aninhados sob o objeto devedor são opcionais e identificam o devedor, ou seja, a pessoa ou a instituição a quem a cobrança está endereçada. Não identifica, necessariamente, quem irá efetivamente realizar o pagamento. Um CPF pode ser o devedor de uma cobrança, mas pode acontecer de outro CPF realizar, efetivamente, o pagamento do documento. Não é permitido que o campo `devedor.cpf` e campo `devedor.cnpj` estejam preenchidos ao mesmo tempo. Se o campo `devedor.cnpj` está preenchido, então o campo `devedor.cpf` não pode estar preenchido, e vice-versa. Se o campo `devedor.nome` está preenchido, então deve existir ou um `devedor.cpf` ou um campo `devedor.cnpj` preenchido.
     */
    devedor: (PessoaFisica | PessoaJuridica);
    /**
     * O objeto recebedor organiza as informações sobre o credor da cobrança.
     */
    recebedor: (PessoaFisica | (PessoaJuridica & {
        /**
         * Nome fantasia.
         */
        nomeFantasia?: string;
    }));
    txid: TxId;
    revisao: Revisao;
    status: CobrancaStatus;
    valor: CobVPayloadValor;
    /**
     * # Formato do campo chave
     *
     * * O campo chave determina a chave Pix registrada no DICT que será utilizada para a cobrança. Essa chave será lida pelo aplicativo do PSP do pagador para consulta ao DICT, que retornará a informação que identificará o recebedor da cobrança.
     * * Os tipos de chave podem ser: telefone, e-mail, cpf/cnpj ou EVP.
     * * O formato das chaves pode ser encontrado na seção "Formatação das chaves do DICT no BR Code" do [Manual de Padrões para iniciação do Pix](https://www.bcb.gov.br/estabilidadefinanceira/pix).
     *
     */
    chave: string;
});
