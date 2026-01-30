import type { CobVCompleta } from './CobVCompleta';
import type { ParametrosConsultaCob } from './ParametrosConsultaCob';
export type CobsVConsultadas = {
    parametros: ParametrosConsultaCob;
    cobs: Array<CobVCompleta>;
};
