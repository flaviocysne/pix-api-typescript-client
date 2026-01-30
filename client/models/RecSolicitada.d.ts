import type { PayloadLocationRecId } from './PayloadLocationRecId';
import type { RecAtivacaoSolicitada } from './RecAtivacaoSolicitada';
import type { RecBase } from './RecBase';
import type { RecConfiguracao } from './RecConfiguracao';
/**
 * Atributos de Configuração de Recorrência
 */
export type RecSolicitada = (RecBase & {
    recebedor?: {
        /**
         * Convênio entre usuário e participante recebedor.
         */
        convenio?: string;
    };
} & RecConfiguracao & {
    loc?: PayloadLocationRecId;
} & RecAtivacaoSolicitada);
