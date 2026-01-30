/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * Atributos comuns a todas entidades de Cobrança
 */
export type CobBase = {
    /**
     * # Formato do campo chave
     *
     * * O campo chave determina a chave Pix registrada no DICT que será utilizada para a cobrança. Essa chave será lida pelo aplicativo do PSP do pagador para consulta ao DICT, que retornará a informação que identificará o recebedor da cobrança.
     * * Os tipos de chave podem ser: telefone, e-mail, cpf/cnpj ou EVP.
     * * O formato das chaves pode ser encontrado na seção "Formatação das chaves do DICT no BR Code" do [Manual de Padrões para iniciação do Pix](https://www.bcb.gov.br/estabilidadefinanceira/pix).
     *
     */
    chave?: string;
    /**
     * O campo solicitacaoPagador, opcional, determina um texto a ser apresentado ao pagador para que ele possa digitar uma informação correlata, em formato livre, a ser enviada ao recebedor. Esse texto será preenchido, na pacs.008, pelo PSP do pagador, no campo RemittanceInformation <RmtInf>. O tamanho do campo <RmtInf> na pacs.008 está limitado a 140 caracteres.
     */
    solicitacaoPagador?: string;
    /**
     * Cada respectiva informação adicional contida na lista (nome e valor) deve ser apresentada ao pagador.
     */
    infoAdicionais?: Array<{
        /**
         * Nome do campo.
         */
        nome: string;
        /**
         * Dados do campo.
         */
        valor: string;
    }>;
};

