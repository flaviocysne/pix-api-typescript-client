/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { RecPayload } from './RecPayload';
import type { SolicRecAtualizacao } from './SolicRecAtualizacao';
import type { SolicRecBase } from './SolicRecBase';
import type { SolicRecId } from './SolicRecId';
import type { SolicRecStatus } from './SolicRecStatus';
/**
 * Dados criados ou alterados da solicitação da recorrência
 */
export type SolicRecCompleta = (SolicRecId & SolicRecBase & SolicRecStatus & SolicRecAtualizacao & {
    recPayload?: RecPayload;
});

