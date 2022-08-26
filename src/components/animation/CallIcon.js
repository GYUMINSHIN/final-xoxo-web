import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import call from "../../Image/Home/page01-callIcon.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

const Icon = styled.img`
	width: 19vw;
	display: flex;
	position: absolute;
	top: 4vw;
	left: 22vw;
	${media.phone}{
		width: 25vw;
		top: 10vw;
		left: 15vw;
	}
`;

export default function CallIcon() {
	const callbounce = useSpring({
		loop: { reverse: true },
		from: {
			y: "0vw",
			rotateZ: 0,
		},
		to: {
			y: "1vw",
			rotateZ: 20,
		},
		config: {
			duration:4000
		}
	});
	
	return <Icon as={animated.img} src={call} style={{ ...callbounce }} />;
}