import React from "react";
import styled from "styled-components";

export const FooterWrapper = styled.div`
	display: flex;
	align-items: center;
	border-top: 1px solid lightgray;
	position: relative;
	background-color: #f4f6f9;
	height: 40px;
	width: 100%;
	bottom: 0;
	left: 0;

	@media (max-width: 800px) {
		position: fixed;
	}

	@media (max-width: 800px) {
		position: relative;
	}
`;

export const StyleCopyrightContent = styled.div`
	margin-left: 60px;
	font-size: 14px;

	@media (max-width: 800px) {
		margin-left: 10px;
		font-size: 14px;
	}
`;
