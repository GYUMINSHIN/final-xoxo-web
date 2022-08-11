import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import calculator from "../../Image/Home/page01-calculatorIcon.svg";

const Icon = styled.img`
	width: 14vw;
	display: flex;
	position: absolute;
	top: 37vw;
	left: 35vw;
`;

export default function CalculatorIcon() {
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

	return <Icon as={animated.img} src={calculator} style={{ ...calculatorbounce }} />;
}