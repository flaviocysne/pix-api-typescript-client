import type { Devolucao } from './Devolucao';
import type { EndToEndId } from './EndToEndId';
import type { PixValorAbatimento } from './PixValorAbatimento';
import type { PixValorDesconto } from './PixValorDesconto';
import type { PixValorJuros } from './PixValorJuros';
import type { PixValorMulta } from './PixValorMulta';
import type { PixValorOriginal } from './PixValorOriginal';
import type { PixValorSaque } from './PixValorSaque';
import type { PixValorTroco } from './PixValorTroco';
import type { TxId } from './TxId';
export type Pix = {
    endToEndId: EndToEndId;
    txid?: TxId;
    /**
     * Valor do Pix.
     */
    valor: string;
    /**
     * O objetivo dessa estrutura é explicar os elementos de composição do valor do Pix, incluindo informações sobre as multas, juros, descontos e abatimentos quando o Pix for relativo a cobranças com vencimento.
     *
     * Regras da estrutura:
     * - O `valor` do Pix é igual a:
     * - (`original.valor` + `saque.valor` + `troco.valor`) + `multa.valor` + `juros.valor` – `abatimento.valor` – `desconto.valor`
     * considerando-se apenas os campos que estiverem presentes para cada tipo de cobrança pago.
     * - As estruturas `saque` e `troco` só serão retornadas quando o Pix for relativo a um Pix Saque ou Pix Troco, respectivamente, e
     * as demais estruturas (`juros`, `multa`, `abatimento` e `desconto`) só serão pertinentes aos Pix de pagamentos das cobranças com vencimento.
     * - Não pode haver simultaneamente uma subsestrutura do tipo `saque` e outra do tipo `troco`;
     * - Não há restrição na ordem das subestruturas.
     *
     * Para o caso de um Pix Saque pode-se retornar `original` com valor=0.00 (zero) uma vez que a soma será respeitada, ou pode-se omitir a
     * subestrutura original. No caso de um Pix Troco ou de um pagamento de cobrança com vencimento a subsestrutura `original` vai sempre estar
     * presente.
     *
     * #### Exemplos válidos:
     * Exemplo de preenchimentos válidos.
     *
     * - **Pix para pagamento de cobrança imediata (sem saque ou troco).**
     * ```
     * ...
     * "componentesValor": {
         * "original": {
             * "valor": "100.00"
             * }
             * }
             * ...
             * ```
             * - **Pix Saque.**
             * ```
             * ...
             * "componentesValor": {
                 * "saque": {
                     * "valor": "100.00",
                     * "modalidadeAgente": "AGPSS",
                     * "prestadorDeServicoDeSaque": "12345678"
                     * }
                     * }
                     * ...
                     * ```
                     * - **Pix para pagamento de cobrança imediata com saque (pode vir original.valor=0.00).**
                     * ```
                     * ...
                     * "componentesValor": {
                         * "original": {
                             * "valor": "0.00"
                             * },
                             * "saque": {
                                 * "valor": "100.00",
                                 * "modalidadeAgente": "AGPSS",
                                 * "prestadorDeServicoDeSaque": "12345678"
                                 * }
                                 * }
                                 * ...
                                 * ```
                                 * - **Pix Troco.**
                                 * ```
                                 * ...
                                 * "componentesValor": {
                                     * "original": {
                                         * "valor": "80.00"
                                         * },
                                         * "troco": {
                                             * "valor": "20.00",
                                             * "modalidadeAgente": "AGTEC",
                                             * "prestadorDeServicoDeSaque": "12345678"
                                             * }
                                             * }
                                             * ...
                                             * ```
                                             * - **Pix para pagamento de cobrança imediata com troco (ordem não importa).**
                                             * ```
                                             * ...
                                             * "componentesValor": {
                                                 * "troco": {
                                                     * "valor": "20.00",
                                                     * "modalidadeAgente": "AGTEC",
                                                     * "prestadorDeServicoDeSaque": "12345678"
                                                     * },
                                                     * "original": {
                                                         * "valor": "80.00"
                                                         * }
                                                         * }
                                                         * ...
                                                         * ```
                                                         * - **Pix para pagamento de cobrança com vencimento de R$100,00 considerando-se um atraso de 2 dias a uma multa de 3% e juros de 1% ao dia. O `valor` do Pix será R$105,00.**
                                                         * ```
                                                         * ...
                                                         * "componentesValor": {
                                                             * "original": {
                                                                 * "valor": "100.00"
                                                                 * },
                                                                 * "multa": {
                                                                     * "valor": "3.00"
                                                                     * },
                                                                     * "juros": {
                                                                         * "valor": "2.00"
                                                                         * }
                                                                         * }
                                                                         * ...
                                                                         * ```
                                                                         * #### Exemplos inválidos:
                                                                         * Exemplos, não exaustivos, de preenchimentos inválidos.
                                                                         * - **`original.valor` maior que 0.00 (zero) e `saque` juntos**
                                                                         * ```
                                                                         * ...
                                                                         * "componentesValor": {
                                                                             * "original": {
                                                                                 * "valor": "80.00"
                                                                                 * },
                                                                                 * "saque": {
                                                                                     * "valor": "20.00",
                                                                                     * "modalidadeAgente": "AGPSS",
                                                                                     * "prestadorDeServicoDeSaque": "12345678"
                                                                                     * }
                                                                                     * }
                                                                                     * ...
                                                                                     * ```
                                                                                     * - **dois elementos de `saque`**
                                                                                     * ```
                                                                                     * ...
                                                                                     * "componentesValor": [
                                                                                         * "saque": {
                                                                                             * "valor": "20.00",
                                                                                             * "modalidadeAgente": "AGPSS",
                                                                                             * "prestadorDeServicoDeSaque": "12345678"
                                                                                             * },
                                                                                             * "saque": {
                                                                                                 * "valor": "10.00",
                                                                                                 * "modalidadeAgente": "AGPSS",
                                                                                                 * "prestadorDeServicoDeSaque": "12345678"
                                                                                                 * }
                                                                                                 * ]
                                                                                                 * ...
                                                                                                 * ```
                                                                                                 * - **saque e troco simultaneamente**
                                                                                                 * ```
                                                                                                 * ...
                                                                                                 * "componentesValor": {
                                                                                                     * "original": {
                                                                                                         * "valor": "60.00"
                                                                                                         * },
                                                                                                         * "saque": {
                                                                                                             * "valor": "20.00",
                                                                                                             * "modalidadeAgente": "AGPSS",
                                                                                                             * "prestadorDeServicoDeSaque": "12345678"
                                                                                                             * },
                                                                                                             * "troco": {
                                                                                                                 * "valor": "20.00",
                                                                                                                 * "modalidadeAgente": "AGTEC",
                                                                                                                 * "prestadorDeServicoDeSaque": "12345678"
                                                                                                                 * }
                                                                                                                 * }
                                                                                                                 * ...
                                                                                                                 * ```
                                                                                                                 */
    componentesValor?: (PixValorOriginal | PixValorSaque | PixValorTroco | PixValorJuros | PixValorMulta | PixValorAbatimento | PixValorDesconto);
    /**
     * # Formato do campo chave
     *
     * * Campo chave do recebedor conforme atribuído na respectiva PACS008.
     * * Os tipos de chave podem ser: telefone, e-mail, cpf/cnpj ou EVP.
     * * O formato das chaves pode ser encontrado na seção "Formatação das chaves do DICT no BR Code" do [Manual de Padrões para iniciação do Pix](https://www.bcb.gov.br/estabilidadefinanceira/pix).
     *
     */
    chave?: string;
    /**
     * Horário em que o Pix foi processado no PSP.
     */
    horario: string;
    infoPagador?: string;
    devolucoes?: Array<Devolucao>;
};
