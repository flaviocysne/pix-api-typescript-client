import type { RecAtivacao } from './RecAtivacao';
import type { RecAtualizacao } from './RecAtualizacao';
import type { RecEncerramento } from './RecEncerramento';
import type { RecId } from './RecId';
import type { RecStatus } from './RecStatus';
/**
 * Atributos de Notificação de Recorrência
 */
export type RecNotification = ({
    idRec?: RecId;
} & RecStatus & RecAtualizacao & RecEncerramento & RecAtivacao & {
    idRec: RecId;
});
