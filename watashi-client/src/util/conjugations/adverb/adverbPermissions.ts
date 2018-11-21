import {
  createError,
} from '../../functions'

// import {
//   createCommonPermissions,
// } from '../utilConjugation';

import {
  T,
  WA_TS,
  MO_TS,
  GA_TS,
  V,
  WO_SV,
  NI_SV,
  DE_SV,
  KARA_TS,
  MADE_TS,
} from '../../constants/optionsConstants';

import {
  POLARITY_NEGATIVE,
} from '../../constants/optionsConstants'

// NOTE: I have no idea if any of this is try/working. 
export const adverbConjugationPermissionsEnglish = (options: Util.Options): boolean => {

  switch(options.selectedVariation) {
    case T: return false; 
    case WA_TS: return true;
    case MO_TS: return true;
    case GA_TS: return true;
    case V: return true;
    case WO_SV: return true;
    case NI_SV: return true;
    case DE_SV: return true;
    case KARA_TS: return true;
    case MADE_TS: return true;
  }

  throw new Error(createError('nounPermissions.ts', 'nounParticlePermissions', 'nounParticlePermissions - sentence situation not covered'));
};

export const polarityPermissions = (options: Util.Options): boolean => {

  if (options.polarity === POLARITY_NEGATIVE) {
    switch(options.selectedVariation) {
      case T: return false; 
      case WA_TS: return true;
      case MO_TS: return true;
      case GA_TS: return true;
      case V: return true;
      case WO_SV: return true;
      case NI_SV: return true;
      case DE_SV: return true;
      case KARA_TS: return true;
      case MADE_TS: return true;
    }
  } else {
    return false
  }

  throw new Error(createError('nounPermissions.ts', 'nounParticlePermissions', 'nounParticlePermissions - sentence situation not covered'));
};

