/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PessoaJuridicaRecorrencia } from './PessoaJuridicaRecorrencia';
import type { RecAtualizacao } from './RecAtualizacao';
import type { RecBase } from './RecBase';
import type { RecConfiguracao } from './RecConfiguracao';
import type { RecId } from './RecId';
/**
 * Atributos de Configuração de Recorrência
 */
export type RecPayload = ({
    idRec?: RecId;
} & RecBase & {
    recebedor?: PessoaJuridicaRecorrencia;
} & RecConfiguracao & RecAtualizacao & {
    idRec: RecId;
    recebedor: PessoaJuridicaRecorrencia;
});

