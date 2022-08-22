import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Info from "../../components/Info";
import main from "../../Image/Events/mainImage.svg";
import mainEventBtn from "../../Image/Events/mainEventBtn.svg";
import eventText from "../../Image/Events/eventText.svg";
import coffee from "../../Image/Events/coffeeEvent.svg";
import chicken from "../../Image/Events/chickenEvent.svg";


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
`;

const MainImage = styled.img`
	width: 100%;
	margin-top: 4vw;
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
`;

const EventText = styled.img`
	width: 5vw;
	margin-bottom: 7vw;
`;

const EventBox = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0vw 2vw;
`;

const EventCard = styled.img`
	width: 23vw;
	cursor: pointer;
	:hover{
		opacity: 0.7;
	}
`;

export default function EventsHome() {

	const goChicken = () => {
        window.location.href = "/events/chicken";
	}
	
	return (
		<Container>
			<Header />
			<MainImage src={main} />
			<MainEventBtn src={mainEventBtn} onClick={goChicken} />
			<MainBox>
				<EventText src={eventText} />
				<EventBox>
					<EventCard src={coffee} />
					<EventCard src={chicken} onClick={goChicken} />
				</EventBox>
			</MainBox>
			<Info />
		</Container>
	);
}