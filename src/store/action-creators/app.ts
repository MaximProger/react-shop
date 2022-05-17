import { AppActionTypes } from "../../types/app";

export function loaderOn() {
  return {
    type: AppActionTypes.LOADER_DISPLAY_ON,
  };
}
export function loaderOff() {
  return {
    type: AppActionTypes.LOADER_DISPLAY_OFF,
  };
}