import type { Devolucao } from '../models/Devolucao';
import type { DevolucaoId } from '../models/DevolucaoId';
import type { DevolucaoSolicitada } from '../models/DevolucaoSolicitada';
import type { EndToEndId } from '../models/EndToEndId';
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { Pix } from '../models/Pix';
import type { PixConsultados } from '../models/PixConsultados';
import type { TxId } from '../models/TxId';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class PixService {
    /**
     * Consultar Pix.
     * Endpoint para consultar um Pix através de um e2eid.
     * @param e2Eid
     * @returns Pix Dados do Pix efetuado.
     * @throws ApiError
     */
    static getPix(e2Eid: EndToEndId): CancelablePromise<Pix>;
    /**
     * Consultar Pix recebidos.
     * Endpoint para consultar Pix recebidos
     * @param inicio
     * @param fim
     * @param txid
     * @param txIdPresente
     * @param devolucaoPresente
     * @param cpf
     * @param cnpj
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns PixConsultados lista dos Pix recebidos de acordo com o critério de busca.
     * @throws ApiError
     */
    static getPixAll(inicio: Inicio, fim: Fim, txid?: TxId, txIdPresente?: boolean, devolucaoPresente?: boolean, cpf?: string, cnpj?: string, paginacaoPaginaAtual?: number, paginacaoItensPorPagina?: number): CancelablePromise<PixConsultados>;
    /**
     * Solicitar devolução.
     * Endpoint para solicitar uma devolução através de um e2eid do Pix e do ID da devolução. O motivo que será atribuído à PACS.004 será "MD06" ou "SL02" de acordo com a aba RTReason da PACS.004 que consta no Catálogo de Mensagens do Pix a depender da `natureza` da devolução (Vide a descrição deste campo).
     *
     * @param e2Eid
     * @param id
     * @param requestBody Dados para pedido de devolução.
     * @returns Devolucao Dados da devolução.
     * @throws ApiError
     */
    static putPixDevolucao(e2Eid: EndToEndId, id: DevolucaoId, requestBody: DevolucaoSolicitada): CancelablePromise<Devolucao>;
    /**
     * Consultar devolução.
     * Endpoint para consultar uma devolução através de um End To End ID do Pix e do ID da devolução
     * @param e2Eid
     * @param id
     * @returns Devolucao Dados da devolução.
     * @throws ApiError
     */
    static getPixDevolucao(e2Eid: EndToEndId, id: DevolucaoId): CancelablePromise<Devolucao>;
}
