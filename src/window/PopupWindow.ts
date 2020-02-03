import { BaseWindow, MainWindow } from './window';

export class PopupWindow extends BaseWindow {
	protected mainWindow: MainWindow;

	public constructor(
		mainWindow: MainWindow,
		layout: string,
		width: number,
		height: number,
		backgroundColor: string
	) {
		super(layout, width, height, backgroundColor, {
			resizable: false,
			maximizable: false,
		});

		this.mainWindow = mainWindow;
	}

	get main(): MainWindow {
		return this.mainWindow;
	}
}
