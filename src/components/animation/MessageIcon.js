import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import message from "../../Image/Home/page01-messageIcon.svg";

const Icon = styled.img`
	width: 17vw;
	display: flex;
	position: absolute;
	top: 5vw;
	right: 25vw;
`;

export default function MessageIcon() {
	const messagebounce = useSpring({
		loop: { reverse: true },
		from: {
			y: "0vw",
			rotateZ: 0,
		},
		to: {
			y: "1vw",
			rotateZ: 10,
		},
		config: {
			duration:2000
		}
	});
	
	return <Icon as={animated.img} src={message} style={{ ...messagebounce }} />;
}