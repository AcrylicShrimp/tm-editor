import { app } from 'electron';

import { MainWindow } from './window/window';

app.once('window-all-closed', () => app.quit());

class Application {
	public newWindow(width: number, height: number): MainWindow {
		return new MainWindow(width, height);
	}
}

export default (cb: (application: Application) => void): void => {
	app.once('ready', () => cb(new Application()));
};
