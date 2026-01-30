/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PixValorSaque = {
    saque?: {
        /**
         * Valor do Saque Pix.
         */
        valor: string;
        /**
         * ##### Modalidade do Agente
         * <table><tr><th>SIGLA</th><th>Descrição</th></tr><tr><td>AGTEC</td><td>Agente Estabelecimento Comercial</td></tr><tr><td>AGTOT</td><td>Agente Outra Espécie de Pessoa Jurídica ou Correspondente no País</td></tr><tr><td>AGPSS</td><td>Agente Facilitador de Serviço de Saque (<b>ATENÇÃO</b>: no mapeamento para o campo 'modalidadeAgente', da pacs.008, esse valor deve ser substituído por <b>AGFSS</b>)</td></tr></table>
         *
         */
        modalidadeAgente: PixValorSaque.modalidadeAgente;
        /**
         * ISPB do Facilitador de Serviço de Saque
         */
        prestadorDoServicoDeSaque: string;
    };
};
export namespace PixValorSaque {
    /**
     * ##### Modalidade do Agente
     * <table><tr><th>SIGLA</th><th>Descrição</th></tr><tr><td>AGTEC</td><td>Agente Estabelecimento Comercial</td></tr><tr><td>AGTOT</td><td>Agente Outra Espécie de Pessoa Jurídica ou Correspondente no País</td></tr><tr><td>AGPSS</td><td>Agente Facilitador de Serviço de Saque (<b>ATENÇÃO</b>: no mapeamento para o campo 'modalidadeAgente', da pacs.008, esse valor deve ser substituído por <b>AGFSS</b>)</td></tr></table>
     *
     */
    export enum modalidadeAgente {
        AGTEC = 'AGTEC',
        AGTOT = 'AGTOT',
        AGPSS = 'AGPSS',
    }
}

