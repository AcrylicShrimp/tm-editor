import { contextBridge, ipcRenderer, IpcRendererEvent } from 'electron';

declare global {
	interface Window {
		api: API;
	}

	interface API {
		onSwitchLayout: (
			cb: (event: IpcRendererEvent, layout: string) => void
		) => void;
	}
}

contextBridge.exposeInMainWorld('api', {
	onSwitchLayout(cb: (event: IpcRendererEvent, layout: string) => void) {
		ipcRenderer.on('switch-layout', cb);
	},
});
