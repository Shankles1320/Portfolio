import React from "react";
import styled from "styled-components";

export const AboutMeWrapper = styled.div`
	display: flex;
	justify-content: space-around;
	width: 1100px;
	margin-top: 50px;
	margin-bottom: 80px;

	@media (max-width: 1100px) {
		display: flex;
		width: 1000px;
		flex-direction: column;
		margin-top: 50px;
		align-items: center;
	}

	@media (max-width: 800px) {
		display: flex;
		width: 650px;
		flex-direction: column;
		margin-top: 50px;
		align-items: center;
	}

	@media (max-width: 400px) {
		display: flex;
		width: 350px;
		flex-direction: column;
		margin-top: 50px;
		align-items: center;
	}
`;
export const StyledDescriptionWrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 65%;

	@media (max-width: 1100px) {
		/* align-items: center; */
		width: 60%;
	}

	@media (max-width: 800px) {
		align-items: center;
		width: 70%;
	}

	@media (max-width: 400px) {
		align-items: center;
		width: 85%;
	}
`;

export const StyledContactWrapper = styled.div`
	display: flex;
	flex-direction: column;

	@media (max-width: 1000px) {
		margin-top: -25px;
		margin-bottom: 20px;
		align-items: center;
	}
`;

export const StyledContactItems = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	height: 75%;
	margin-top: -5px;

	@media (max-width: 1100px) {
		display: flex;
		flex-direction: row;
	}

	@media (max-width: 800px) {
		display: flex;
		flex-direction: row;
	}
`;

export const StyledParagraph = styled.p`
	font-size: 15px;
`;

export const StyledContactLogo = styled.img`
	height: 30px;
	width: 30px;
	border-radius: 3px;
	margin-right: 5px;

	@media (max-width: 800px) {
		height: 22px;
		width: 22px;
	}
`;

export const ContactWrapper = styled.a`
	display: flex;
	align-items: center;
	text-decoration: none;
	color: black;

	@media (max-width: 1100px) {
		font-size: 13px;
		margin-right: 10px;
	}
`;
