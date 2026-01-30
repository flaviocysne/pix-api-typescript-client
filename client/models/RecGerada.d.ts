import type { PayloadLocationRecCompleta } from './PayloadLocationRecCompleta';
import type { PessoaJuridicaRecorrencia } from './PessoaJuridicaRecorrencia';
import type { RecAtivacao } from './RecAtivacao';
import type { RecAtualizacao } from './RecAtualizacao';
import type { RecBase } from './RecBase';
import type { RecEncerramento } from './RecEncerramento';
import type { RecId } from './RecId';
import type { RecStatus } from './RecStatus';
/**
 * Atributos de Configuração de Recorrência
 */
export type RecGerada = ({
    idRec?: RecId;
} & RecBase & {
    recebedor?: PessoaJuridicaRecorrencia;
} & RecStatus & {
    loc?: PayloadLocationRecCompleta;
} & RecAtualizacao & RecEncerramento & RecAtivacao & {
    recebedor: PessoaJuridicaRecorrencia;
});
