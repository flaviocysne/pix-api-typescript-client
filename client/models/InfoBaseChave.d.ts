export type InfoBaseChave = {
    tipo: InfoBaseChave.tipo;
    /**
     * # Formato do campo chave
     *
     * * O campo chave determina a chave Pix registrada no DICT que será utilizada para a cobrança. Essa chave será lida pelo aplicativo do PSP do pagador para consulta ao DICT, que retornará a informação que identificará o recebedor da cobrança.
     * * Os tipos de chave podem ser: telefone, e-mail, cpf/cnpj ou EVP.
     * * O formato das chaves pode ser encontrado na seção "Formatação das chaves do DICT no BR Code" do [Manual de Padrões para iniciação do Pix](https://www.bcb.gov.br/estabilidadefinanceira/pix).
     *
     */
    chave: string;
};
export declare namespace InfoBaseChave {
    enum tipo {
        PIX = "pix"
    }
}
