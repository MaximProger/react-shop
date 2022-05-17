export interface IAppState {
  loading: boolean;
}

export enum AppActionTypes {
  LOADER_DISPLAY_ON = "LOADER_DISPLAY_ON",
  LOADER_DISPLAY_OFF = "LOADER_DISPLAY_OFF",
}

interface LoaderDisplayOn {
  type: AppActionTypes.LOADER_DISPLAY_ON;
}

interface LoaderDisplayOff {
  type: AppActionTypes.LOADER_DISPLAY_OFF;
}

export type AppAction = LoaderDisplayOn | LoaderDisplayOff;
