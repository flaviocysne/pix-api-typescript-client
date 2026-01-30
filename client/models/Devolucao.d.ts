import type { DevolucaoId } from './DevolucaoId';
import type { DevolucaoNatureza } from './DevolucaoNatureza';
export type Devolucao = {
    id: DevolucaoId;
    /**
     * ReturnIdentification que transita na PACS004.
     */
    rtrId: string;
    /**
     * Valor a devolver.
     */
    valor: string;
    natureza?: DevolucaoNatureza;
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
    status: Devolucao.status;
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
export declare namespace Devolucao {
    /**
     * Status da devolução.
     */
    enum status {
        EM_PROCESSAMENTO = "EM_PROCESSAMENTO",
        DEVOLVIDO = "DEVOLVIDO",
        NAO_REALIZADO = "NAO_REALIZADO"
    }
}
