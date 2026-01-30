import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { PayloadLocation } from '../models/PayloadLocation';
import type { PayloadLocationCompleta } from '../models/PayloadLocationCompleta';
import type { PayloadLocationConsultadas } from '../models/PayloadLocationConsultadas';
import type { PayloadLocationSolicitada } from '../models/PayloadLocationSolicitada';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PayloadLocationService {
    /**
     * Criar location do payload.
     * Criar location do payload
     * @param requestBody Dados para geração da location.
     * @returns PayloadLocation Dados da location do Payload.
     * @throws ApiError
     */
    static postLoc(requestBody: PayloadLocationSolicitada): CancelablePromise<PayloadLocation>;
    /**
     * Consultar locations cadastradas.
     * Endpoint para consultar locations cadastradas
     * @param inicio
     * @param fim
     * @param txIdPresente
     * @param tipoCob
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns PayloadLocationConsultadas lista dos locations cadastrados de acordo com o critério de busca.
     * @throws ApiError
     */
    static getLoc(inicio: Inicio, fim: Fim, txIdPresente?: boolean, tipoCob?: 'cob' | 'cobv', paginacaoPaginaAtual?: number, paginacaoItensPorPagina?: number): CancelablePromise<PayloadLocationConsultadas>;
    /**
     * Recuperar location do payload.
     * Recupera a location do payload
     * @param id
     * @returns PayloadLocationCompleta Dados da location do Payload.
     * @throws ApiError
     */
    static getLoc1(id: string): CancelablePromise<PayloadLocationCompleta>;
    /**
     * Desvincular uma cobrança de uma location.
     * Endpoint utilizado para desvincular uma cobrança de uma location.
     *
     * Se executado com sucesso, a entidade `loc` não apresentará mais um txid,
     * se apresentava anteriormente à chamada. Adicionalmente, a entidade `cob` ou `cobv` associada ao
     * txid desvinculado também passará a não mais apresentar um _location_. Esta operação
     * não altera o `status` da `cob` ou `cobv` em questão.
     *
     * @param id
     * @returns PayloadLocation cobrança representada pelo txid informado desvinculada com sucesso.
     * @throws ApiError
     */
    static deleteLocTxid(id: string): CancelablePromise<PayloadLocation>;
}
