import { AppAction, IAppState, AppActionTypes } from "../../types/app";

const initialState: IAppState = {
  loading: false,
};

export const appReducer = (state = initialState, action: AppAction): IAppState => {
  switch (action.type) {
    case AppActionTypes.LOADER_DISPLAY_ON:
      return {
        ...state,
        loading: true,
      };
    case AppActionTypes.LOADER_DISPLAY_OFF:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
