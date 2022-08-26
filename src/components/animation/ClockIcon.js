import React from "react";
import styled from "styled-components";
import { useSpring, animated } from "react-spring";
import clock from "../../Image/Home/page01-clockIcon.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

const Icon = styled.img`
	width: 13vw;
	display: flex;
	position: absolute;
	top: 15vw;
	right: 22vw;
	${media.phone}{
		width: 24vw;
		top: 25vw;
		right: 3vw;
	}
`;

export default function ClockIcon() {
	const clockbounce = useSpring({
		loop: { reverse: true },
		from: {
			y: "0vw"
		},
		to: {
			y: "1.5vw"
		},
		config: {
			duration:3000
		}
	});
	
	return <Icon as={animated.img} src={clock} style={{ ...clockbounce }} />;
}