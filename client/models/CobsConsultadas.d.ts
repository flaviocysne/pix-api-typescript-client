import type { CobCompleta } from './CobCompleta';
import type { ParametrosConsultaCob } from './ParametrosConsultaCob';
export type CobsConsultadas = {
    parametros: ParametrosConsultaCob;
    cobs: Array<CobCompleta>;
};
