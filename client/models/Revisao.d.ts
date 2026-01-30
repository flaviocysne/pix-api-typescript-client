/**
 * # O campo `revisao`
 *
 * Denota a revisão da cobrança.  Sempre começa em zero. Sempre varia em acréscimos de 1.
 *
 * O incremento em uma cobrança deve ocorrer sempre que um objeto da cobrança em questão for alterado.
 * O campo `loc` é uma exceção a esta regra.
 *
 * Se em uma determinada alteração em uma cobrança, o único campo alterado for o campo `loc`,
 * então esta operação não incrementa a revisão da cobrança.
 *
 * O campo `loc` não ocasiona uma alteração na cobrança em si.
 * Não é necessário armazenar histórico das alterações do campo `loc` para uma determinada cobrança.
 * Para os outros campos da cobrança, registra-se histórico.
 *
 */
export type Revisao = number;
