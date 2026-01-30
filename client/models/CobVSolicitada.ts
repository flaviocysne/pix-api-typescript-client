/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CobBase } from './CobBase';
import type { CobDataDeVencimento } from './CobDataDeVencimento';
import type { CobVValor } from './CobVValor';
import type { DadosDevedor } from './DadosDevedor';
import type { PayloadLocationCob } from './PayloadLocationCob';
import type { PessoaFisica } from './PessoaFisica';
import type { PessoaJuridica } from './PessoaJuridica';
/**
 * Dados enviados para criação ou alteração da cobrança com vencimento via API Pix
 */
export type CobVSolicitada = ({
    /**
     * Os campos aninhados sob o identificador calendário organizam informações a respeito de controle de tempo da cobrança.
     */
    calendario?: CobDataDeVencimento;
} & DadosDevedor & {
    loc?: PayloadLocationCob;
} & {
    valor?: CobVValor;
} & CobBase & {
    /**
     * Os campos aninhados sob o identificador calendário organizam informações a respeito de controle de tempo da cobrança.
     */
    calendario: CobDataDeVencimento;
    /**
     * O objeto devedor organiza as informações sobre o devedor da cobrança.
     */
    devedor: (PessoaFisica | PessoaJuridica);
    valor: CobVValor;
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

