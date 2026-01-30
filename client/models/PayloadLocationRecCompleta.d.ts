import type { PayloadLocationRecGerada } from './PayloadLocationRecGerada';
import type { RecId } from './RecId';
/**
 * Identificador da localização do payload completo.
 */
export type PayloadLocationRecCompleta = (PayloadLocationRecGerada & {
    idRec?: RecId;
});
