import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { PayloadLocationRecCompleta } from '../models/PayloadLocationRecCompleta';
import type { PayloadLocationRecConsultadas } from '../models/PayloadLocationRecConsultadas';
import type { PayloadLocationRecGerada } from '../models/PayloadLocationRecGerada';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PayloadLocationRecService {
    /**
     * Criar location do payload.
     * Criar location do payload
     * @returns PayloadLocationRecGerada Dados da location do Payload.
     * @throws ApiError
     */
    static postLocrec(): CancelablePromise<PayloadLocationRecGerada>;
    /**
     * Consultar locations cadastradas.
     * Endpoint para consultar locations cadastradas
     * @param inicio
     * @param fim
     * @param idRecPresente
     * @param convenio
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns PayloadLocationRecConsultadas lista dos locations cadastrados de acordo com o critério de busca.
     * @throws ApiError
     */
    static getLocrec(inicio: Inicio, fim: Fim, idRecPresente?: boolean, convenio?: string, paginacaoPaginaAtual?: number, paginacaoItensPorPagina?: number): CancelablePromise<PayloadLocationRecConsultadas>;
    /**
     * Recuperar location do payload.
     * Recupera a location do payload
     * @param id
     * @returns PayloadLocationRecCompleta Dados da location do Payload.
     * @throws ApiError
     */
    static getLocrec1(id: string): CancelablePromise<PayloadLocationRecCompleta>;
    /**
     * Desvincular uma recorrência de uma location.
     * Endpoint utilizado para desvincular uma recorrência de uma location.
     *
     * Se executado com sucesso, a entidade `loc` não apresentará mais uma recorrência,
     * se apresentava anteriormente à chamada. Adicionalmente, a entidade associada ao
     * recurso desvinculado também passará a não mais apresentar um _location_. Esta operação
     * não altera o `status` do recurso em questão.
     *
     * @param id
     * @returns PayloadLocationRecCompleta Entidade representada pelo recurso informado desvinculada com sucesso.
     * @throws ApiError
     */
    static deleteLocrecIdRec(id: string): CancelablePromise<PayloadLocationRecCompleta>;
}
