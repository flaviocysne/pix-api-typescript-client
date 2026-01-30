import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { RecCompleta } from '../models/RecCompleta';
import type { RecGerada } from '../models/RecGerada';
import type { RecRevisada } from '../models/RecRevisada';
import type { RecsConsultadas } from '../models/RecsConsultadas';
import type { RecSolicitada } from '../models/RecSolicitada';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class RecService {
    /**
     * Consultar recorrência.
     * Consultar recorrência.
     * @param idRec
     * @param txid
     * @returns RecCompleta Dados da recorrência.
     * @throws ApiError
     */
    static getRec(idRec: string, txid?: string): CancelablePromise<RecCompleta>;
    /**
     * Revisar recorrência.
     * Revisar recorrência.
     * @param idRec
     * @param requestBody Dados para revisão da recorrência.
     * @returns RecGerada Recorrência revisada.
     * @throws ApiError
     */
    static patchRec(idRec: string, requestBody?: RecRevisada): CancelablePromise<RecGerada>;
    /**
     * Consultar lista de recorrências.
     * Consultar lista de recorrências.
     * @param inicio
     * @param fim
     * @param cpf
     * @param cnpj
     * @param locationPresente
     * @param status
     * @param convenio
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns RecsConsultadas OK
     * @throws ApiError
     */
    static getRec1(inicio: Inicio, fim: Fim, cpf?: string, cnpj?: string, locationPresente?: boolean, status?: string, convenio?: string, paginacaoPaginaAtual?: number, paginacaoItensPorPagina?: number): CancelablePromise<RecsConsultadas>;
    /**
     * Criar recorrência.
     * Criar recorrência
     * @param requestBody Dados para geração da recorrência.
     * @returns RecGerada Recorrência criada
     * @throws ApiError
     */
    static postRec(requestBody?: RecSolicitada): CancelablePromise<RecGerada>;
}
