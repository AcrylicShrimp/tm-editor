import { BrowserWindow, BrowserWindowConstructorOptions } from 'electron';

import * as path from 'path';

const LAYOUT_DIR = path.join(
	path.dirname(path.dirname(__dirname)),
	'res',
	'layout'
);

export class BaseWindow {
	protected window: BrowserWindow;

	protected constructor(
		layout: string,
		width: number,
		height: number,
		backgroundColor: string,
		options: BrowserWindowConstructorOptions
	) {
		options.show = false;
		options.width = width;
		options.height = height;
		options.backgroundColor = backgroundColor;
		options.useContentSize = true;

		this.window = new BrowserWindow(options);
		this.window.loadFile(path.join(LAYOUT_DIR, layout));
		this.window.once('ready-to-show', () => this.window.show());
	}

	public destroy(): void {
		this.window.destroy();
	}
}
