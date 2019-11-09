import React from "react";
import { FooterWrapper, StyleCopyrightContent } from "./footerStyles";

class Footer extends React.Component {
	constructor() {
		super();
		this.state = {};
	}

	render() {
		return (
			<FooterWrapper>
				<StyleCopyrightContent>© 2019 Trey Shank</StyleCopyrightContent>
			</FooterWrapper>
		);
	}
}

export default Footer;
