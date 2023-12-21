import {State} from '../../types/state.ts';
import {Reviews} from '../../types/review.ts';
import {NameSpace} from '../../constants.ts';

export const getReviews = (state: State): Reviews => state[NameSpace.Review].reviews;
