/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type PixValorTroco = {
    troco?: {
        /**
         * Valor do Troco Pix.
         */
        valor: string;
        /**
         * ##### Modalidade do Agente
         * <table><tr><th>SIGLA</th><th>Descrição</th></tr><tr><td>AGTEC</td><td>Agente Estabelecimento Comercial</td></tr><tr><td>AGTOT</td><td>Agente Outra Espécie de Pessoa Jurídica ou Correspondente no País</td></tr></table>
         *
         */
        modalidadeAgente: PixValorTroco.modalidadeAgente;
        /**
         * ISPB do Facilitador de Serviço de Saque
         */
        prestadorDoServicoDeSaque: string;
    };
};
export namespace PixValorTroco {
    /**
     * ##### Modalidade do Agente
     * <table><tr><th>SIGLA</th><th>Descrição</th></tr><tr><td>AGTEC</td><td>Agente Estabelecimento Comercial</td></tr><tr><td>AGTOT</td><td>Agente Outra Espécie de Pessoa Jurídica ou Correspondente no País</td></tr></table>
     *
     */
    export enum modalidadeAgente {
        AGTEC = 'AGTEC',
        AGTOT = 'AGTOT',
    }
}

