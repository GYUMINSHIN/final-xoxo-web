import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import call from "../../Image/Home/page01-callIcon.svg";

const Icon = styled.img`
	width: 19vw;
	display: flex;
	position: absolute;
	top: 8vw;
	left: 22vw;
`;

export default function CallIcon() {
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
	
	return <Icon as={animated.img} src={call} style={{ ...callbounce }} />;
}