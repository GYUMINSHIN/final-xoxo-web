import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import list from "../../Image/Home/page01-listIcon.svg";

const Icon = styled.img`
	width: 17vw;
	display: flex;
	position: absolute;
	top: 22vw;
	left: 20vw;
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