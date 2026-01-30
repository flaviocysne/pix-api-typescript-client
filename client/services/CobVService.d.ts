import type { CobsVConsultadas } from '../models/CobsVConsultadas';
import type { CobVCompleta } from '../models/CobVCompleta';
import type { CobVGerada } from '../models/CobVGerada';
import type { CobVRevisada } from '../models/CobVRevisada';
import type { CobVSolicitada } from '../models/CobVSolicitada';
import type { Fim } from '../models/Fim';
import type { Inicio } from '../models/Inicio';
import type { Revisao } from '../models/Revisao';
import type { TxId } from '../models/TxId';
import type { CancelablePromise } from '../core/CancelablePromise';
export declare class CobVService {
    /**
     * Criar cobrança com vencimento.
     * Endpoint para criar uma cobrança com vencimento.
     * @param txid
     * @param requestBody Dados para geração da cobrança com vencimento.
     * @returns CobVGerada Cobrança com vencimento criada
     * @throws ApiError
     */
    static putCobv(txid: TxId, requestBody: CobVSolicitada): CancelablePromise<CobVGerada>;
    /**
     * Revisar cobrança com vencimento.
     * @param txid
     * @param requestBody Dados para geração da cobrança.
     * @returns CobVGerada Cobrança com vencimento revisada. A revisão deve ser incrementada em 1.
     * @throws ApiError
     */
    static patchCobv(txid: TxId, requestBody: CobVRevisada): CancelablePromise<CobVGerada>;
    /**
     * Consultar cobrança com vencimento.
     * Endpoint para consultar uma cobrança com vencimento através de um determinado txid.
     * @param txid
     * @param revisao
     * @returns CobVCompleta Dados da cobrança com vencimento.
     * @throws ApiError
     */
    static getCobv(txid: TxId, revisao?: Revisao): CancelablePromise<CobVCompleta>;
    /**
     * Consultar lista de cobranças com vencimento.
     * Endpoint para consultar cobranças com vencimento através de parâmetros como início, fim, cpf, cnpj e status.
     * @param inicio
     * @param fim
     * @param cpf
     * @param cnpj
     * @param locationPresente
     * @param status
     * @param loteCobVId
     * @param paginacaoPaginaAtual
     * @param paginacaoItensPorPagina
     * @returns CobsVConsultadas Lista de cobranças com vencimento.
     * @throws ApiError
     */
    static getCobv1(inicio: Inicio, fim: Fim, cpf?: string, cnpj?: string, locationPresente?: boolean, status?: string, loteCobVId?: number, paginacaoPaginaAtual?: number, paginacaoItensPorPagina?: number): CancelablePromise<CobsVConsultadas>;
}
