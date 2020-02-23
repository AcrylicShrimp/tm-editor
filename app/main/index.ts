import run from './application';

run(application => {
	application.newWindow(800, 600).switchLayout('editor');
	application.newWindow(800, 600).switchLayout('undefined-layout');
});
