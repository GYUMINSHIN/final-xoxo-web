import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import lifeU from "../../Image/Home/page01-lifeUIcon.svg";

const Icon = styled.img`
	width: 16vw;
	display: flex;
	position: absolute;
	top: 27vw;
	right: 26vw;
`;

export default function LifeUIcon() {
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

	return <Icon as={animated.img} src={lifeU} style={{ ...lifeUbounce }} />;
}