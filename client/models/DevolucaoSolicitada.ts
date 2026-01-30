/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DevolucaoSolicitadaNatureza } from './DevolucaoSolicitadaNatureza';
export type DevolucaoSolicitada = {
    /**
     * Valor solicitado para devolução. A soma dos valores de todas as devolucões não podem ultrapassar o valor total do Pix.
     */
    valor: string;
    natureza?: DevolucaoSolicitadaNatureza;
    /**
     * O campo `descricao`, opcional, determina um texto a ser apresentado ao pagador contendo informações sobre a devolução. Esse texto será preenchido, na pacs.004, pelo PSP do recebedor, no campo RemittanceInformation. O tamanho do campo na pacs.004 está limitado a 140 caracteres.
     */
    descricao?: string;
};

