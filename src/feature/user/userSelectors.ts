import {RootState} from '@store/store';

export const selectUserAuth = (state: RootState) => !!state.user.login;
export const selectLogin = (state: RootState) => state.user.login;
export const selectStatusUser = (state: RootState) => state.user.status;
