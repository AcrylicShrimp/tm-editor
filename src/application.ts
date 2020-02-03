import { app } from 'electron';

import { MainWindow } from './window/window';

app.once('window-all-closed', () => app.quit());

class Application {
	public newWindow(
		layout: string,
		width: number,
		height: number,
		backgroundColor: string
	): MainWindow {
		return new MainWindow(layout, width, height, backgroundColor);
	}
}

export default (cb: (application: Application) => void): void => {
	app.once('ready', () => cb(new Application()));
};
