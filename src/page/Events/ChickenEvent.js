import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import main from "../../Image/Events/chickenEvent-main.svg";
import title from "../../Image/Events/chickenEvent-title.svg";
import date from "../../Image/Events/chickenEvent-date.svg";
import backToList from "../../Image/Events/chickenEvent-backToList.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

const Container = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const MainBox = styled.div`
    width: 50vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	margin-top: 8vw;
	margin-bottom: 10vw;
	${media.phone}{
		margin-top: 15vw;
		width: 85vw;
		margin-bottom: 15vw;
	}
`;

const TextBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
`;

const Title = styled.img`
	width: 20vw;
	${media.phone}{
		width: 50vw;
		margin-top: 5vw;
	}
`;

const Date = styled.img`
	width: 10vw;
	margin-top: 1vw;
	margin-bottom: 1vw;
	${media.phone}{
		width: 30vw;
		margin: 2vw 0vw;
	}
`;

const ListBtn = styled.img`
	width: 25vw;
	margin-top: 5vw;
	cursor: pointer;
	:hover{
		opacity: 0.5;
	}
	${media.phone}{
		width: 50vw;
		margin-top: 20vw;
	}
`;

const MainImage = styled.img`
	width: 100%;
`;

export default function ChickenEvent() {

	const goEvents = () => {
        window.location.href = "/events";
	}

	return (
		<Container>
			<Header />
			<MainBox>
				<TextBox>
					<Title src={title} />
					<Date src={date} />
				</TextBox>
				<MainImage src={main} />
				<ListBtn src={backToList} onClick={goEvents} />
			</MainBox>
		</Container>
	)
}