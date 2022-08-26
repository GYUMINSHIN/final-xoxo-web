import React from "react";
import styled from "styled-components";
import MessageIcon from "../../components/animation/MessageIcon";
import CallIcon from "../../components/animation/CallIcon";
import ClockIcon from "../../components/animation/ClockIcon";
import ListIcon from "../../components/animation/ListIcon";
import LifeUIcon from "../../components/animation/LifeUIcon";
import CalculatorIcon from "../../components/animation/CalculatorIcon";
import backgroundImage from "../../Image/Home/page01-backgroundImg.svg";
import backgroundImagePhone from "../../Image/Home/page01-backgroundImgPhone.svg";
import apple from "../../Image/Home/page01-appstore.svg";
import google from "../../Image/Home/page01-playstore.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

const Container = styled.div`
	width: 100%;
	height: 57vw;
	margin-top: 4vw;
	background-image: url(${backgroundImage});
	background-size: contain;
	position: relative;
	${media.phone}{
		background-image: url(${backgroundImagePhone});
		margin-top: 15vw;
		height: 120vw;
		background-size: contain;
	}
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
	top: 23vw;
	left: 37vw;
	cursor: pointer;
	:hover{
		opacity: 0.9;
	}
	${media.phone}{
		width: 25vw;
		top: 45vw;
		left: 25vw;
	}
`;

const AppleBtn = styled.img`
	width: 13vw;
	display: flex;
	position: absolute;
	top: 23vw;
	right: 36vw;
	cursor: pointer;
	:hover{
		opacity: 0.9;
	}
	${media.phone}{
		width: 25vw;
		top: 45vw;
		right: 25vw;
	}
`;
export default function Page01() {
	const google_btn = () => {
        window.open(`${"https://play.google.com/store/apps/details?id=co.xoxomarket.LifeU"}`, "_blank");
    };
    const apple_btn = () => {
        window.open(`${"https://apps.apple.com/kr/app/%EB%9D%BC%EC%9D%B4%ED%91%B8%EB%A7%88%EC%BC%93-%EB%8F%99%EB%84%A4-%EC%8B%AC%EB%B6%80%EB%A6%84-%EB%B0%8F-%EB%8B%A8%EA%B8%B0-%EC%95%8C%EB%B0%94-%ED%8E%B8%EC%9D%98-%EC%84%9C%EB%B9%84%EC%8A%A4/id1623370823"}`, "_blank");
    };
	return (
		<Container>
			<MainBox>
				<MessageIcon />
				<CallIcon />
				<ClockIcon />
				<ListIcon />
				<LifeUIcon />
				<CalculatorIcon />
				<GoogleBtn src={google} onClick={google_btn} />
				<AppleBtn src={apple} onClick={apple_btn} />
			</MainBox>
		</Container>
	);
}