import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import calculator from "../../Image/Home/page01-calculatorIcon.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

const Icon = styled.img`
	width: 14vw;
	display: flex;
	position: absolute;
	top: 30vw;
	left: 35vw;
	${media.phone}{
		width: 25vw;
		top: 60vw;
		left: 20vw;
	}
`;

export default function CalculatorIcon() {
	const calculatorbounce = useSpring({
		loop: { reverse: true },
		from: {
			y: "0vw",
			rotateZ: 0
		},
		to: {
			y: "2vw",
			rotateZ: -20,
		},
		config: {
			duration: 5000,
		}
	});

	return <Icon as={animated.img} src={calculator} style={{ ...calculatorbounce }} />;
}