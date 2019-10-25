import { ConfigState } from "@common/store/config";
import Store from "electron-store";
import { MockSettings } from "./mockSettings";

export const settings: Store<ConfigState> = !process.env.TOKEN
	? new Store({ name: "Settings" })
	: (new MockSettings() as any);
