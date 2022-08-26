import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import lifeU from "../../Image/Home/page01-lifeUIcon.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

const Icon = styled.img`
	width: 16vw;
	display: flex;
	position: absolute;
	top: 23vw;
	right: 26vw;
	${media.phone}{
		width: 28vw;
		top: 50vw;
		right: 15vw;
	}
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