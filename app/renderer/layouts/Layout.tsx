import React, { Component, ReactNode } from 'react';
import { Helmet } from 'react-helmet';

import './styles/layout.sass';

interface LayoutProps {
	title: string;
}

class Layout extends Component<LayoutProps> {
	render(): ReactNode {
		return (
			<div className='fullscreen'>
				<Helmet>
					<title>{this.props.title}</title>
				</Helmet>
				{this.props.children}
			</div>
		);
	}
}

export { Layout };
