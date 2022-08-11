import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import backgroundImage from "../../Image/Home/page01-backgroundImg.svg";
import message from "../../Image/Home/page01-messageIcon.svg";
import call from "../../Image/Home/page01-callIcon.svg";
import clock from "../../Image/Home/page01-clockIcon.svg";
import lifeU from "../../Image/Home/page01-lifeUIcon.svg";
import calculator from "../../Image/Home/page01-calculatorIcon.svg";
import list from "../../Image/Home/page01-listIcon.svg";



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

const MessageIcon = styled.img`
	display: flex;
	position: absolute;
	top: 5vw;
	right: 25vw;
`;

const CallIcon = styled.img`
	display: flex;
	position: absolute;
	top: 8vw;
	left: 22vw;
`;

const ClockIcon = styled.img`
	display: flex;
	position: absolute;
	top: 20vw;
	right: 22vw;
`;

const LifeUIcon = styled.img`
	display: flex;
	position: absolute;
	top: 27vw;
	right: 26vw;`;

const CalculatorIcon = styled.img`
	display: flex;
	position: absolute;
	top: 37vw;
	left: 35vw;
`;

const ListIcon = styled.img`
	display: flex;
	position: absolute;
	top: 22vw;
	left: 20vw;
`;

export default function Page01() {
	const clockbounce = useSpring({
		loop: { reverse: true },
		from: {
			y: 0
		},
		to: {
			y: 20
		},
		config: {
			duration:3000
		}
	});

	const messagebounce = useSpring({
		loop: { reverse: true },
		from: {
			y: 0,
			rotateZ: 0,
		},
		to: {
			y: 20,
			rotateZ: 10,
		},
		config: {
			duration:3000
		}
	});

	const listbounce = useSpring({
		loop: { reverse: true },
		from: {
			y: 0
		},
		to: {
			y: 10
		},
		config: {
			duration:1000
		}
	});

	const lifeUbounce = useSpring({
		loop: {reverse: true},
		from: {
			rotateZ: 0
		},
		to: {
			rotateZ: 30
		},
		config: {
			duration:2000
		}
	});

	const callbounce = useSpring({
		loop: { reverse: true },
		from: {
			y: 0,
			rotateZ: 0,
		},
		to: {
			y: 10,
			rotateZ: 20,
		},
		config: {
			duration:4000
		}
	});

	const calculatorbounce = useSpring({
		loop: { reverse: true },
		from: {
			y: 0,
			rotateZ: 0
		},
		to: {
			y: 30,
			rotateZ: -20,
		},
		config: {
			duration: 5000,
		}
	});

	return (
		<Container>
			<MainBox>
				<ClockIcon as={animated.img} src={clock} style={{ ...clockbounce }} />
				<MessageIcon as={animated.img} src={message} style={{ ...messagebounce}} />
				<ListIcon as={animated.img} src={list} style={{ ...listbounce}} />
				<LifeUIcon as={animated.img} src={lifeU} style={{ ...lifeUbounce}} />
				<CallIcon as={animated.img} src={call} style={{ ...callbounce}} />
				<CalculatorIcon as={animated.img} src={calculator} style={{ ...calculatorbounce}} />
			</MainBox>
		</Container>
	);
}