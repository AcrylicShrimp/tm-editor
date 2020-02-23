import React, { Component, ReactNode } from 'react';

import { Layout } from './Layout';

import './styles/not-found.sass';

class NotFound extends Component {
	public render(): ReactNode {
		return (
			<Layout title='Error | tm-editor'>
				<div className='message-container'>
					<p className='message'>
						We're sorry, something went wrong!
					</p>
				</div>
			</Layout>
		);
	}
}

export { NotFound };
