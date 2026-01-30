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
export type RecCompletaPesquisada = ({
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
    recebedor: PessoaJuridicaRecorrencia;
});
