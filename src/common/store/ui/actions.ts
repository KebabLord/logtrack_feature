import { IToastOptions } from "@blueprintjs/core";
import { action } from "typesafe-actions";
import { UIActionTypes } from "./types";

export const setScrollPosition = (scrollTop: number, pathname: string) =>
	action(UIActionTypes.SET_SCROLL_TOP, {
		scrollTop,
		pathname
	});

export const addToast = (toast: IToastOptions) => action(UIActionTypes.ADD_TOAST, { toast });
export const removeToast = (key: string) => action(UIActionTypes.REMOVE_TOAST, { key });
export const clearToasts = () => action(UIActionTypes.CLEAR_TOASTS);
