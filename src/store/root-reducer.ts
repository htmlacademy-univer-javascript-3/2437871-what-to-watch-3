import {combineReducers} from '@reduxjs/toolkit';
import {NameSpace} from '../constants.ts';
import {userProcess} from './user-process/user-process.ts';
import {reviewProcess} from './review-process/review-process.ts';
import {filmsProcess} from './film-process/film-process.ts';

export const rootReducer = combineReducers({
  [NameSpace.User]: userProcess.reducer,
  [NameSpace.Films]: filmsProcess.reducer,
  [NameSpace.Review]: reviewProcess.reducer,
});
