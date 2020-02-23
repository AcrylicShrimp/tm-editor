import { BaseWindow, ModalWindow, PopupWindow } from './window';

export class MainWindow extends BaseWindow {
	protected subWindowList: Array<BaseWindow>;

	public constructor(width: number, height: number) {
		super(width, height, {
			resizable: true,
			maximizable: true,
		});

		this.window.once('closed', () => {
			this.subWindowList.forEach(subWindow => {
				subWindow.destroy();
			});
		});

		this.subWindowList = [];
	}

	public newModalWindow(width: number, height: number): ModalWindow {
		const modal = new ModalWindow(this, width, height);

		this.subWindowList.push(modal);

		return modal;
	}

	public newPopupWindow(width: number, height: number): PopupWindow {
		const popup = new PopupWindow(this, width, height);

		this.subWindowList.push(popup);

		return popup;
	}
}
