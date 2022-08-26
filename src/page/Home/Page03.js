import React from "react";
import styled from "styled-components";
import backgroundImg from "../../Image/Home/page03-backgroundImg.svg";
import backgroundImgPhone from "../../Image/Home/page03-backgroundImgPhone.svg";
import arrowBtn from "../../Image/Home/page03-arrowBtn.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

const Container = styled.div`
	width: 100%;
	position: relative;
	background-color: #2d2d2d;
`;

const BackgroundImg = styled.div`
	width: 100%;
	height: 53.5vw;
	margin-top: 4vw;
	background-image: url(${backgroundImg});
	background-size: contain;
	position: relative;
	${media.phone}{
		background-image: url(${backgroundImgPhone});
		margin-top: 15vw;
		height: 100vw;
		background-size: contain;
	}
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
	${media.phone}{
		bottom: 9vw;
		right: 32vw;
	}
`;

const ArrowBtn = styled.img`
	width: 6vw;
	${media.phone}{
		width: 10vw;
	}
`;

export default function Page03() {
	const goEvents = () => {
        window.location.href = "/events";
	}
	
	return (
		<Container>
			<BackgroundImg>
				<Btn>
					<ArrowBtn src={arrowBtn} onClick={goEvents} />
				</Btn>
			</BackgroundImg>
		</Container>
		
	)
}