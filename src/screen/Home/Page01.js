import React from "react";
import styled from "styled-components";
import MessageIcon from "../../components/animation/MessageIcon";
import CallIcon from "../../components/animation/CallIcon";
import ClockIcon from "../../components/animation/ClockIcon";
import ListIcon from "../../components/animation/ListIcon";
import LifeUIcon from "../../components/animation/LifeUIcon";
import CalculatorIcon from "../../components/animation/CalculatorIcon";
import backgroundImage from "../../Image/Home/page01-backgroundImg.svg";
import apple from "../../Image/Home/page01-appstore.svg";
import google from "../../Image/Home/page01-playstore.svg";

const Container = styled.div`
	width: 100%;
	height: 57vw;
	margin-top: 4vw;
	background-image: url(${backgroundImage});
`;

const MainBox = styled.div`
    width: 50vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const GoogleBtn = styled.img`
	width: 13vw;
	display: flex;
	position: absolute;
	top: 27vw;
	left: 37vw;
	cursor: pointer;
	:hover{
		opacity: 0.9;
	}
`;

const AppleBtn = styled.img`
	width: 13vw;
	display: flex;
	position: absolute;
	top: 27vw;
	right: 36vw;
	cursor: pointer;
	:hover{
		opacity: 0.9;
	}
`;
export default function Page01() {
	return (
		<Container>
			<MainBox>
				<MessageIcon />
				<CallIcon />
				<ClockIcon />
				<ListIcon />
				<LifeUIcon />
				<CalculatorIcon />
				<GoogleBtn src={google} />
				<AppleBtn src={apple} />
			</MainBox>
		</Container>
	);
}