import type { CobBase } from './CobBase';
import type { CobExpiracao } from './CobExpiracao';
import type { CobValor } from './CobValor';
import type { PayloadLocationCob } from './PayloadLocationCob';
import type { PessoaFisica } from './PessoaFisica';
import type { PessoaJuridica } from './PessoaJuridica';
/**
 * Dados enviados para revisão da cobrança imediata via API Pix
 */
export type CobRevisada = ({
    /**
     * Os campos aninhados sob o identificador calendário organizam informações a respeito de controle de tempo da cobrança.
     */
    calendario?: CobExpiracao;
} & {
    /**
     * Os campos aninhados sob o objeto devedor são opcionais e identificam o devedor, ou seja, a pessoa ou a instituição a quem a cobrança está endereçada. Não identifica, necessariamente, quem irá efetivamente realizar o pagamento. Um CPF pode ser o devedor de uma cobrança, mas pode acontecer de outro CPF realizar, efetivamente, o pagamento do documento. Não é permitido que o campo `devedor.cpf` e campo `devedor.cnpj` estejam preenchidos ao mesmo tempo. Se o campo `devedor.cnpj` está preenchido, então o campo `devedor.cpf` não pode estar preenchido, e vice-versa. Se o campo `devedor.nome` está preenchido, então deve existir ou um `devedor.cpf` ou um campo `devedor.cnpj` preenchido.
     */
    devedor?: (PessoaFisica | PessoaJuridica);
} & {
    loc?: PayloadLocationCob;
} & {
    status?: CobRevisada.status;
} & {
    valor?: CobValor;
} & CobBase);
export declare namespace CobRevisada {
    enum status {
        REMOVIDA_PELO_USUARIO_RECEBEDOR = "REMOVIDA_PELO_USUARIO_RECEBEDOR"
    }
}
