/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CobBaseCopiaCola } from './CobBaseCopiaCola';
import type { CobCriacao } from './CobCriacao';
import type { CobExpiracao } from './CobExpiracao';
import type { CobrancaStatus } from './CobrancaStatus';
import type { CobValor } from './CobValor';
import type { PayloadLocation } from './PayloadLocation';
import type { PessoaFisica } from './PessoaFisica';
import type { PessoaJuridica } from './PessoaJuridica';
import type { Revisao } from './Revisao';
import type { TxId } from './TxId';
/**
 * Dados criados ou alterados da cobrança imediata via API Pix
 */
export type CobGerada = ({
    /**
     * Os campos aninhados sob o identificador calendário organizam informações a respeito de controle de tempo da cobrança.
     */
    calendario?: (CobCriacao & CobExpiracao & {
        /**
         * Tempo de vida da cobrança, especificado em segundos a partir da data de criação (Calendario.criacao)
         *
         */
        expiracao: number;
    });
    txid?: TxId;
    revisao?: Revisao;
} & {
    /**
     * Os campos aninhados sob o objeto devedor são opcionais e identificam o devedor, ou seja, a pessoa ou a instituição a quem a cobrança está endereçada. Não identifica, necessariamente, quem irá efetivamente realizar o pagamento. Um CPF pode ser o devedor de uma cobrança, mas pode acontecer de outro CPF realizar, efetivamente, o pagamento do documento. Não é permitido que o campo `devedor.cpf` e campo `devedor.cnpj` estejam preenchidos ao mesmo tempo. Se o campo `devedor.cnpj` está preenchido, então o campo `devedor.cpf` não pode estar preenchido, e vice-versa. Se o campo `devedor.nome` está preenchido, então deve existir ou um `devedor.cpf` ou um campo `devedor.cnpj` preenchido.
     */
    devedor?: (PessoaFisica | PessoaJuridica);
} & {
    loc?: PayloadLocation;
} & {
    /**
     * Localização do Payload a ser informada na criação da cobrança.
     */
    readonly location?: string;
} & {
    status?: CobrancaStatus;
} & {
    valor?: (CobValor & {
        /**
         * Valor original da cobrança.
         */
        original: string;
    });
} & CobBaseCopiaCola & {
    /**
     * Os campos aninhados sob o identificador calendário organizam informações a respeito de controle de tempo da cobrança.
     */
    calendario: (CobCriacao & CobExpiracao & {
        /**
         * Tempo de vida da cobrança, especificado em segundos a partir da data de criação (Calendario.criacao)
         *
         */
        expiracao: number;
    });
    txid: TxId;
    revisao: Revisao;
    status: CobrancaStatus;
    valor: (CobValor & {
        /**
         * Valor original da cobrança.
         */
        original: string;
    });
});

