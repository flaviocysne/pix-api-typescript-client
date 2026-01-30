/**
 * Todos os campos que indicam valores monetários obedecem ao pattern \d{1,10}\.\d{2}. O separador decimal é o caractere ponto. Não é aplicável utilizar separador de milhar. Exemplos de valores aderentes ao padrão: “1.00”, “123.99”, “123456789.23
 */
export type CobPayloadValor = {
    /**
     * Valor original da cobrança.
     */
    original: string;
    /**
     * Trata-se de um campo que determina se o valor final do documento pode ser alterado pelo pagador. Na ausência desse campo, assume-se que não se pode alterar o valor do documento de cobrança, ou seja, assume-se o valor 0. Se o campo estiver presente e com valor 1, então está determinado que o valor final da cobrança pode ter seu valor alterado pelo pagador.
     */
    modalidadeAlteracao?: number;
    /**
     * É uma estrutura opcional relacionada ao conceito de recebimento de numerário. Apenas um agrupamento por vez é permitido, quando há `saque` não há `troco` e vice-versa.
     *
     * Quando uma cobrança imediata tem uma estrutura de `retirada` ela deixa de ser considerada Pix comum e passa à categoria de Pix Saque ou Pix Troco.
     *
     * Para que o preenchimento do objeto `retirada` seja considerado válido as seguintes regras se aplicam:
     * - os campos `modalidadeAgente` e `prestadorDoServicoDeSaque` são de **preenchimento obrigatório**;
     * - quando o `saque` estiver presente a cobrança deve respeitar as seguintes condições:
     * - O campo `valor.original` deve ser preenchido com **valor igual a 0.00 (zero)**;
     * - O campo `valor.modalidadeAlteracao` deve possuir o valor 0 (zero) explicitamente, ou implicitamente (pelo não preenchimento).
     * - quando o `troco` estiver presente a cobrança deve respeitar as seguintes condições:
     * - O campo `valor.original` deve ser preenchido com **valor maior que 0.00 (zero)**;
     * - O campo `valor.modalidadeAlteracao` deve possuir o valor 0 (zero) explicitamente, ou implicitamente (pelo não preenchimento).
     *
     * **IMPORTANTE**: Quando usados o `saque` ou `troco` não será permitida a alteração do `valor.original` recebido. Na presença de `saque` ou `troco` o recebimento do campo `valor.modalidadeAlteracao` com valor 1 (um) é considerado erro.
     *
     * #### Exemplos válidos:
     * Considerando os campos da estrutura `valor` e o predicado 'presente' cujo resultado é verdade quando a estrutura apontada é encontrada temos:
     * - **uma cobrança com valor fixo** (condições: valor.original > 0 && valor.modalidadeAlteração = 0 && !presente(valor.retirada))
     * ```
     * ...
     * "valor": {
         * "original": "10.00"
         * },
         * ...
         * ```
         * - **uma cobrança com valor alterável** (condições: valor.original >= 0.00 && modalidadeAlteração = 1 && !presente(valor.retirada))
         * ```
         * ...
         * "valor": {
             * "original": "10.00",
             * "modalidadeAlteracao": 1
             * },
             * ```
             * - **saque com valor fixo** (condições: valor.original = 0.00 && valor.modalidadeAlteração = 0 && presente(valor.retirada.saque) && valor.retirada.saque.valor > 0 && valor.retirada.saque.modalidadeAlteracao = 0)
             * ```
             * ...
             * "valor": {
                 * "original": "0.00",
                 * "retirada": {
                     * "saque": {
                         * "valor": "5.00",
                         * "modalidadeAgente": "AGPSS",
                         * "prestadorDoServicoDeSaque": "12345678"
                         * }
                         * }
                         * },
                         * ...
                         * ```
                         * - **saque com valor alterável** (condições: valor.original = 0.00 && valor.modalidadeAlteração = 0 && presente(valor.retirada.saque) && valor.retirada.saque.valor >= 0 && valor.retirada.saque.modalidadeAlteracao = 1)
                         * ```
                         * ...
                         * "valor": {
                             * "original": "0.00",
                             * "retirada": {
                                 * "saque": {
                                     * "valor": "5.00",
                                     * "modalidadeAlteracao": 1,
                                     * "modalidadeAgente": "AGPSS",
                                     * "prestadorDoServicoDeSaque": "12345678"
                                     * }
                                     * }
                                     * },
                                     * ...
                                     * ```
                                     * - **cobrança com troco fixo** (condições: valor.original > 0.00 && valor.modalidadeAlteração = 0 && presente(valor.retirada.troco) && valor.retirada.troco.valor > 0 && valor.retirada.troco.modalidadeAlteracao = 0)
                                     * ```
                                     * ...
                                     * "valor": {
                                         * "original": "10.00",
                                         * "retirada": {
                                             * "troco": {
                                                 * "valor": "5.00",
                                                 * "modalidadeAgente": "AGTEC",
                                                 * "prestadorDoServicoDeSaque": "12345678"
                                                 * }
                                                 * }
                                                 * },
                                                 * ...
                                                 * ```
                                                 * - **cobrança com troco alterável** (condições: valor.original > 0.00 && valor.modalidadeAlteração = 0 && presente(valor.retirada.troco) && valor.retirada.troco.valor >= 0 && valor.retirada.troco.modalidadeAlteracao = 1)
                                                 * ```
                                                 * ...
                                                 * "valor": {
                                                     * "original": "10.00",
                                                     * "retirada": {
                                                         * "troco": {
                                                             * "valor": "0.00",
                                                             * "modalidadeAlteracao": 1,
                                                             * "modalidadeAgente": "AGTEC",
                                                             * "prestadorDoServicoDeSaque": "12345678"
                                                             * }
                                                             * }
                                                             * },
                                                             * ...
                                                             * ```
                                                             * #### Exemplos inválidos:
                                                             * Abaixo alguns exemplos que **não são válidos**. Convém observar que esta listagem não tem pretensão de ser completa, sendo tão somente uma referência para alguns erros possíveis.
                                                             * - **saque sem `modalidadeAgente` e `prestadorDoServicoDeSaque`**
                                                             * ```
                                                             * ...
                                                             * "valor": {
                                                                 * "original": "0.00",
                                                                 * "retirada": {
                                                                     * "saque": {
                                                                         * "valor": "5.00"
                                                                         * }
                                                                         * }
                                                                         * },
                                                                         * ...
                                                                         * ```
                                                                         * - **cobrança com saque e troco juntos** (não pode ter os dois ao mesmo tempo)
                                                                         * ```
                                                                         * ...
                                                                         * "valor": {
                                                                             * "original": "100.00",
                                                                             * "retirada": {
                                                                                 * "saque": {
                                                                                     * "valor": "50.00",
                                                                                     * "modalidadeAgente": "AGPSS",
                                                                                     * "prestadorDoServicoDeSaque": "12345678"
                                                                                     * },
                                                                                     * "troco": {
                                                                                         * "valor": "30.00",
                                                                                         * "modalidadeAgente": "AGTEC",
                                                                                         * "prestadorDoServicoDeSaque": "12345678"
                                                                                         * }
                                                                                         * }
                                                                                         * },
                                                                                         * ...
                                                                                         * ```
                                                                                         * - **saque com valor.original maior que 0.00 (zero)** (saque requer valor.original = 0.00)
                                                                                         * ```
                                                                                         * ...
                                                                                         * "valor": {
                                                                                             * "original": "10.00",
                                                                                             * "retirada": {
                                                                                                 * "saque": {
                                                                                                     * "valor": "5.00",
                                                                                                     * "modalidadeAgente": "AGPSS",
                                                                                                     * "prestadorDoServicoDeSaque": "12345678"
                                                                                                     * }
                                                                                                     * }
                                                                                                     * },
                                                                                                     * ...
                                                                                                     * ```
                                                                                                     * - **troco com valor.original igual a 0.00 (zero)** (para haver troco tem que haver valor.original > 0.00)
                                                                                                     * ```
                                                                                                     * ...
                                                                                                     * "valor": {
                                                                                                         * "original": "0.00",
                                                                                                         * "retirada": {
                                                                                                             * "troco": {
                                                                                                                 * "valor": "5.00",
                                                                                                                 * "modalidadeAgente": "AGTEC",
                                                                                                                 * "prestadorDoServicoDeSaque": "12345678"
                                                                                                                 * }
                                                                                                                 * }
                                                                                                                 * },
                                                                                                                 * ...
                                                                                                                 * ```
                                                                                                                 * - **saque com valor.original alterável** (não se pode alterar o valor.original na presença do saque)
                                                                                                                 * ```
                                                                                                                 * ...
                                                                                                                 * "valor": {
                                                                                                                     * "original": "0.00",
                                                                                                                     * "modalidadeAlteracao": 1,
                                                                                                                     * "retirada": {
                                                                                                                         * "saque": {
                                                                                                                             * "valor": "5.00",
                                                                                                                             * "modalidadeAlteracao": 1,
                                                                                                                             * "modalidadeAgente": "AGPSS",
                                                                                                                             * "prestadorDoServicoDeSaque": "12345678"
                                                                                                                             * }
                                                                                                                             * }
                                                                                                                             * },
                                                                                                                             * ...
                                                                                                                             * ```
                                                                                                                             * - **troco com valor.original alterável** (não se pode alterar o valor.original na presença do troco)
                                                                                                                             * ```
                                                                                                                             * ...
                                                                                                                             * "valor": {
                                                                                                                                 * "original": "0.01",
                                                                                                                                 * "modalidadeAlteracao": 1,
                                                                                                                                 * "retirada": {
                                                                                                                                     * "troco": {
                                                                                                                                         * "valor": "5.00",
                                                                                                                                         * "modalidadeAlteracao": 1,
                                                                                                                                         * "modalidadeAgente": "AGTOT",
                                                                                                                                         * "prestadorDoServicoDeSaque": "12345678"
                                                                                                                                         * }
                                                                                                                                         * }
                                                                                                                                         * },
                                                                                                                                         * ...
                                                                                                                                         * ```
                                                                                                                                         *
                                                                                                                                         */
    retirada?: ({
        /**
         * Informações relacionadas ao saque
         */
        saque?: {
            /**
             * Valor do saque efetuado
             */
            valor: string;
            /**
             * Modalidade de alteração de valor do saque. Quando não preenchido o valor assumido é o 0 (zero).
             */
            modalidadeAlteracao?: number;
            /**
             * ##### Modalidade do Agente
             * <table><tr><th>SIGLA</th><th>Descrição</th></tr><tr><td>AGTEC</td><td>Agente Estabelecimento Comercial</td></tr><tr><td>AGTOT</td><td>Agente Outra Espécie de Pessoa Jurídica ou Correspondente no País</td></tr><tr><td>AGPSS</td><td>Agente Facilitador de Serviço de Saque (<b>ATENÇÃO</b>: no mapeamento para o campo 'modalidadeAgente', da pacs.008, esse valor deve ser substituído por <b>AGFSS</b>)</td></tr></table>
             *
             */
            modalidadeAgente: CobPayloadValor.modalidadeAgente;
            /**
             * ISPB do Facilitador de Serviço de Saque
             */
            prestadorDoServicoDeSaque: string;
        };
    } | {
        /**
         * Informações relacionadas ao troco
         */
        troco?: {
            /**
             * Valor do troco efetuado
             */
            valor: string;
            /**
             * Modalidade de alteração de valor do troco. Quando não preenchido o valor assumido é o 0 (zero).
             */
            modalidadeAlteracao?: number;
            /**
             * ##### Modalidade do Agente
             * <table><tr><th>SIGLA</th><th>Descrição</th></tr><tr><td>AGTEC</td><td>Agente Estabelecimento Comercial</td></tr><tr><td>AGTOT</td><td>Agente Outra Espécie de Pessoa Jurídica ou Correspondente no País</td></tr></table>
             *
             */
            modalidadeAgente: CobPayloadValor.modalidadeAgente;
            /**
             * ISPB do Facilitador de Serviço de Saque
             */
            prestadorDoServicoDeSaque: string;
        };
    });
};
export declare namespace CobPayloadValor {
    /**
     * ##### Modalidade do Agente
     * <table><tr><th>SIGLA</th><th>Descrição</th></tr><tr><td>AGTEC</td><td>Agente Estabelecimento Comercial</td></tr><tr><td>AGTOT</td><td>Agente Outra Espécie de Pessoa Jurídica ou Correspondente no País</td></tr><tr><td>AGPSS</td><td>Agente Facilitador de Serviço de Saque (<b>ATENÇÃO</b>: no mapeamento para o campo 'modalidadeAgente', da pacs.008, esse valor deve ser substituído por <b>AGFSS</b>)</td></tr></table>
     *
     */
    enum modalidadeAgente {
        AGTEC = "AGTEC",
        AGTOT = "AGTOT",
        AGPSS = "AGPSS"
    }
}
