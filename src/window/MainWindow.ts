import { BaseWindow, PopupWindow } from './window';

export class MainWindow extends BaseWindow {
	protected popupWindowList: Array<PopupWindow>;

	public constructor(
		layout: string,
		width: number,
		height: number,
		backgroundColor: string
	) {
		super(layout, width, height, backgroundColor, {
			resizable: true,
			maximizable: true,
		});

		this.window.once('closed', () => {
			this.popupWindowList.forEach(popupWindow => {
				popupWindow.destroy();
			});
		});
		this.popupWindowList = [];
	}

	public newPopupWindow(
		layout: string,
		width: number,
		height: number,
		backgroundColor: string
	): PopupWindow {
		const popup = new PopupWindow(
			this,
			layout,
			width,
			height,
			backgroundColor
		);

		this.popupWindowList.push(popup);

		return popup;
	}
}
