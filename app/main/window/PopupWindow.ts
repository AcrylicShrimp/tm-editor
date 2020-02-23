import { BaseWindow, MainWindow } from './window';

export class PopupWindow extends BaseWindow {
	protected main: MainWindow;

	public constructor(main: MainWindow, width: number, height: number) {
		super(width, height, {
			resizable: false,
			maximizable: false,
		});

		this.main = main;
	}

	public get mainWindow(): MainWindow {
		return this.main;
	}
}
