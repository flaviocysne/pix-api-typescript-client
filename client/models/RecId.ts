/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
/**
 * # Identificador da Recorrência
 *
 * Regra de formação:
 * - RAxxxxxxxxyyyyMMddkkkkkkkkkkk (29 caracteres; "case sensitive", isso é, diferencia letras maiúsculas e minúsculas), sendo:
 * - "R":  fixo (1 caractere). "R" para a recorrência criada dentro do Pix;
 * - "A": identificação da possibilidade de novas tentativas, sendo possíveis os valores "R" ou "N" (1 caractere). "R" caso a recorrência permita novas tentativas de pagamento pós vencimento, ou "N" caso não permita novas tentativas.
 * - "xxxxxxxx":  identificação do agente que presta serviço para o usuário recebedor que gerou o ID Recorrência, podendo ser: o ISPB do participante direto, o ISPB do participante indireto ou os 8 primeiros caracteres do CNPJ do prestador de serviço de iniciação (8 caracteres alfanuméricos [A-Z|0-9]);
 * - "yyyyMMdd":  data (8 caracteres) de criação da recorrência;
 * - "kkkkkkkkkkk": sequencial criado pelo agente que gerou o ID Recorrência (11 caracteres alfanuméricos [a-z|A-Z|0-9]). Deve ser único dentro de cada "yyyyMMdd".
 *
 * Dessa forma, o ID da recorrência deve ser formado de acordo com um dos tipos a seguir:
 * - "RRxxxxxxxxyyyyMMddkkkkkkkkkkk"; para recorrência criada dentro do Pix e que permite novas tentativas de pagamento pós vencimento; ou
 * - "RNxxxxxxxxyyyyMMddkkkkkkkkkkk"; para recorrência criada dentro do Pix e que não permite novas tentativas de pagamento pós vencimento.”
 *
 */
export type RecId = string;
