import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import list from "../../Image/Home/page01-listIcon.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

const Icon = styled.img`
	width: 17vw;
	display: flex;
	position: absolute;
	top: 18vw;
	left: 20vw;
	${media.phone}{
		width: 27vw;
		top: 33vw;
		left: 3vw;
	}
`;

export default function ListIcon() {
	const listbounce = useSpring({
		loop: { reverse: true },
		from: {
			y: "0vw"
		},
		to: {
			y: "0.7vw"
		},
		config: {
			duration:1000
		}
	});
	return <Icon as={animated.img} src={list} style={{ ...listbounce }} />;
}