import type { SolicRecCompleta } from '../models/SolicRecCompleta';
import type { SolicRecRevisada } from '../models/SolicRecRevisada';
import type { SolicRecSolicitada } from '../models/SolicRecSolicitada';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class SolicRecService {
    /**
     * Criar solicitação de confirmação de recorrência.
     * Criar solicitação de confirmação de recorrência.
     * @param requestBody Dados para geração da solicitação da recorrência.
     * @returns SolicRecCompleta Solicitação de recorrência criada
     * @throws ApiError
     */
    static postSolicrec(requestBody?: SolicRecSolicitada): CancelablePromise<SolicRecCompleta>;
    /**
     * Consultar solicitação de confirmação de recorrência.
     * Consultar solicitação.
     * @param idSolicRec
     * @returns SolicRecCompleta Dados da solicitação da recorrência.
     * @throws ApiError
     */
    static getSolicrec(idSolicRec: string): CancelablePromise<SolicRecCompleta>;
    /**
     * Revisar solicitação de confirmação de recorrência.
     * Revisar solicitação de confirmação de recorrência.
     * @param idSolicRec
     * @param requestBody Dados para revisão da solicitação da recorrência.
     * @returns SolicRecCompleta Solicitação de recorrência atualizada
     * @throws ApiError
     */
    static patchSolicrec(idSolicRec: string, requestBody?: SolicRecRevisada): CancelablePromise<SolicRecCompleta>;
}
