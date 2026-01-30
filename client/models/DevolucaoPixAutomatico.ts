/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { DevolucaoId } from './DevolucaoId';
import type { DevolucaoNaturezaPixAutomatico } from './DevolucaoNaturezaPixAutomatico';
export type DevolucaoPixAutomatico = {
    id: DevolucaoId;
    /**
     * ReturnIdentification que transita na PACS004.
     */
    rtrId: string;
    /**
     * Valor a devolver.
     */
    valor: string;
    natureza?: DevolucaoNaturezaPixAutomatico;
    /**
     * O campo `descricao`, opcional, determina um texto a ser apresentado ao pagador contendo informações sobre a devolução. Esse texto será preenchido, na pacs.004, pelo PSP do recebedor, no campo RemittanceInformation. O tamanho do campo na pacs.004 está limitado a 140 caracteres.
     */
    descricao?: string;
    horario: {
        /**
         * Horário no qual a devolução foi solicitada no PSP.
         */
        solicitacao?: string;
        /**
         * Horário no qual a devolução foi liquidada no PSP.
         */
        liquidacao?: string;
    };
    /**
     * Status da devolução.
     */
    status: DevolucaoPixAutomatico.status;
    /**
     * # Status da Devolução
     *
     * Campo opcional que pode ser utilizado pelo PSP recebedor para detalhar os motivos
     * de a devolução ter atingido o status em questão.
     * Pode ser utilizado, por exemplo, para detalhar o motivo de a devolução não ter sido realizada.
     *
     */
    motivo?: string;
};
export namespace DevolucaoPixAutomatico {
    /**
     * Status da devolução.
     */
    export enum status {
        EM_PROCESSAMENTO = 'EM_PROCESSAMENTO',
        DEVOLVIDO = 'DEVOLVIDO',
        NAO_REALIZADO = 'NAO_REALIZADO',
    }
}

