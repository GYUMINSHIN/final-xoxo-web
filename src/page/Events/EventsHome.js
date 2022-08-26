import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Info from "../../components/Info";
import main from "../../Image/Events/mainImage.svg";
import mainPhone from "../../Image/Events/mainImagePhone.svg";
import mainEventBtn from "../../Image/Events/mainEventBtn.svg";
import eventText from "../../Image/Events/eventText.svg";
import coffee from "../../Image/Events/coffeeEvent.svg";
import chicken from "../../Image/Events/chickenEvent.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	position: relative;
`;

const MainBox = styled.div`
    width: 50vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 7vw;
	margin-bottom: 25vw;
	${media.phone}{
		margin-top: 15vw;
	}
`;

const MainImage = styled.div`
	background-image: url(${main});
	height: 28vw;
	width: 100%;
	margin-top: 4vw;
	background-size: contain;
	${media.phone}{
		background-image: url(${mainPhone});
		margin-top: 15vw;
		height: 55vw;
	}
`;

const MainEventBtn = styled.img`
	width: 20vw;
	position: absolute;
	top: 21vw;
	left: 28vw;
	cursor: pointer;
	:hover{
		opacity: 0.9;
	}
	${media.phone}{
		top: 47vw;
		left: 7vw;
		width: 35vw;
	}
`;

const EventText = styled.img`
	width: 5vw;
	margin-bottom: 7vw;
	${media.phone}{
		width: 15vw;
		margin-bottom: 15vw;
	}
`;

const EventBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0vw 2vw;
	${media.phone}{
		flex-direction: column;
	}
`;

const EventCard = styled.img`
	width: 23vw;
	cursor: pointer;
	:hover{
		opacity: 0.7;
	}
	${media.phone}{
		width: 80vw;
		margin-bottom: 7vw;
	}
`;

export default function EventsHome() {

	const goChicken = () => {
        window.location.href = "/events/chicken";
	}
	const goCoffee = () => {
        window.location.href = "/events/coffee";
	}
	
	return (
		<Container>
			<Header />
			<MainImage src={main} />
			<MainEventBtn src={mainEventBtn} onClick={goChicken} />
			<MainBox>
				<EventText src={eventText} />
				<EventBox>
					<EventCard src={coffee} onClick={goCoffee} />
					<EventCard src={chicken} onClick={goChicken} />
				</EventBox>
			</MainBox>
			<Info />
		</Container>
	);
}