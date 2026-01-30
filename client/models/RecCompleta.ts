/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DadosPagadorRec } from './DadosPagadorRec';
import type { PayloadLocationRecCompleta } from './PayloadLocationRecCompleta';
import type { PessoaJuridicaRecorrencia } from './PessoaJuridicaRecorrencia';
import type { RecAtivacao } from './RecAtivacao';
import type { RecAtualizacao } from './RecAtualizacao';
import type { RecBase } from './RecBase';
import type { RecConfiguracao } from './RecConfiguracao';
import type { RecEncerramento } from './RecEncerramento';
import type { RecId } from './RecId';
import type { RecStatus } from './RecStatus';
import type { SolicRecCompleta } from './SolicRecCompleta';
/**
 * Atributos de Configuração de Recorrência
 */
export type RecCompleta = ({
    idRec?: RecId;
} & RecBase & {
    recebedor?: PessoaJuridicaRecorrencia;
} & DadosPagadorRec & RecStatus & RecConfiguracao & {
    loc?: PayloadLocationRecCompleta;
} & RecAtualizacao & RecEncerramento & {
    /**
     * Solicitações vinculadas
     */
    solicitacao?: Array<SolicRecCompleta>;
} & RecAtivacao & {
    /**
     * ##### Informações relacionadas aos parâmetros `idRec` e `txid` informados na requisição.
     * Ao consultar uma recorrência via endpoint GET `/rec/{idRec}?txid={txid}`, o usuário recebedor pode optar pela consulta sem
     * o `txid` ou por compor a requisição com um `txid` de uma cobrança imediata, ou cobrança com vencimento, de forma a obter o QR Composto
     * para a jornada de interesse.
     *
     * Os `dadosQR` retornados variam de acordo com a jornada desejada, indicada pela presença dos parâmetros de interesse, conforme a tabela abaixo:
     * <table  >
     * <tr><td width="15%">idRec</td><td  width="15%">txid de Cob</td><td  width="15%">txid de CobV</td><td width="100%">Conteúdo esperado</td></tr>
     * <tr><td>X</td><td>-</td><td>-</td><td><pre>{ jornada: "JORNADA_2", pixCopiaECola: "QR Composto da recorrência" }</pre></td></tr>
     * <tr><td>X</td><td>X</td><td>-</td><td><pre>{ jornada: "JORNADA_3", pixCopiaECola: "QR Composto da cobrança imediata + recorrência" }</pre></td></tr>
     * <tr><td>X</td><td>-</td><td>X</td><td><pre>{ jornada: "JORNADA_4", pixCopiaECola: "QR Composto da cobrança com vencimento + recorrência" }</pre></td></tr>
     * </table>
     *
     * Os campos `dadosQR.jornada` e `dadosQR.pixCopiaECola` só serão retornados se as respectivas locations necessárias para a construção do QR Composto
     * estiverem preenchidas na recorrência e na eventual cobrança, a depender da jornada desejada.
     *
     */
    dadosQR?: {
        jornada?: RecCompleta.jornada;
        /**
         * Este campo retorna o valor do Pix Copia e Cola correspondente à recorrência. Trata-se da sequência de caracteres que representa o BR Code.
         */
        pixCopiaECola?: string;
    };
} & {
    recebedor: PessoaJuridicaRecorrencia;
});
export namespace RecCompleta {
    export enum jornada {
        JORNADA_2 = 'JORNADA_2',
        JORNADA_3 = 'JORNADA_3',
        JORNADA_4 = 'JORNADA_4',
    }
}

