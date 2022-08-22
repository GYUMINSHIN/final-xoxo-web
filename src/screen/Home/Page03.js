import React from "react";
import styled from "styled-components";
import tradeAfterChat from "../../Image/Home/page03-tradeAfterChat.svg";
import moreInfo from "../../Image/Home/page03-moreInfo.svg";
import cheering from "../../Image/Home/page03-cheering.svg";
import arrowBtn from "../../Image/Home/page03-arrowBtn.svg";

const Container = styled.div`
	width: 100%;
	position: relative;
	background-color: #2d2d2d;
`;

const TopBlackBox = styled.img`
	width: 100%;
`;

const MiddleImg = styled.img`
	width: 100%;
`;

const BottomBlackBox = styled.img`
	width: 100%;
`;

const Btn = styled.button`
	background-color: #2d2d2d;
	border: 0px;
	display: flex;
	align-items: center;
	justify-content: center;
	position: absolute;
	bottom: 5vw;
	right: 38vw;
	cursor: pointer;
	:hover{
		opacity: 0.5;
	}
`;

const ArrowBtn = styled.img`
	width: 6vw;
`;

export default function Page03() {
	const goEvents = () => {
        window.location.href = "/events";
	}
	
	return (
		<Container>
			<TopBlackBox src={tradeAfterChat} />
			<MiddleImg src={cheering} />
			<BottomBlackBox src={moreInfo} />
			<Btn>
				<ArrowBtn src={arrowBtn} onClick={goEvents} />
			</Btn>
		</Container>
		
	)
}