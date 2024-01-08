import {State} from '../../types/state.ts';
import {UserData} from '../../types/user-data.ts';
import {AuthorizationStatus, NameSpace} from '../../constants.ts';

export const getUser = (state: State): UserData | null => state[NameSpace.User].user;
export const getAuthorizationStatus = (state: State): AuthorizationStatus => state[NameSpace.User].authorizationStatus;
export const getAuthorizationStatusLoading = (state: State): boolean => state[NameSpace.User].authorizationStatusLoading;
