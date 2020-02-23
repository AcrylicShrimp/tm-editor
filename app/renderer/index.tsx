import React, { ReactElement } from 'react';
import { render } from 'react-dom';

import { Editor } from './layouts/Editor';
import { NotFound } from './layouts/NotFound';

import './reset.sass';
import './index.sass';

const layoutMap = new Map<string, ReactElement>();

// TODO: Add all layouts
layoutMap.set('editor', <Editor />);

window.api.onSwitchLayout((_, layout: string) => {
	render(
		layoutMap.get(layout) || <NotFound />,
		document.getElementById('app')
	);
});
