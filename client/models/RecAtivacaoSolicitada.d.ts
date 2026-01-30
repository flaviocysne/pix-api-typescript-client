import type { TxId } from './TxId';
export type RecAtivacaoSolicitada = {
    /**
     * Dados relacionados à confirmação da ativação da recorrência.
     */
    ativacao?: {
        dadosJornada?: {
            txid: TxId;
        };
    };
};
