import React, { Component, ReactNode } from 'react';

import { Layout } from './Layout';

class Editor extends Component {
	public render(): ReactNode {
		return (
			<Layout title='Edit | tm-editor'>
				<span>This is the editor UI.</span>
			</Layout>
		);
	}
}

export { Editor };
