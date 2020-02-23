import path from 'path';

import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';

export class BaseWindow {
	private isReady: boolean;
	protected window: BrowserWindow;

	protected constructor(
		width: number,
		height: number,
		options: BrowserWindowConstructorOptions
	) {
		this.isReady = false;

		options.show = false;
		options.width = width;
		options.height = height;
		options.backgroundColor = '#f0f2f4';
		options.useContentSize = true;
		options.webPreferences = {
			nodeIntegration: false,
			contextIsolation: true,
			enableRemoteModule: false,
			preload: path.resolve(__dirname, 'preload.js'),
		};

		this.window = new BrowserWindow(options);
		this.window.loadFile('index.html');
		this.window.once('ready-to-show', () => {
			this.isReady = true;
			this.window.show();
		});
	}

	public get electronWindow(): BrowserWindow {
		return this.window;
	}

	public destroy(): void {
		this.window.destroy();
	}

	public switchLayout(layout: string): Promise<void> {
		return new Promise(resolve => {
			const handleReady = (): void => {
				this.window.webContents.send('switch-layout', layout);
				resolve();
			};

			this.isReady
				? handleReady()
				: this.window.once('ready-to-show', handleReady);
		});
	}
}
