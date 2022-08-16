import React, { useState } from "react";
import { animated, config, useSpring } from "react-spring";
import styled from "styled-components";
import phone2 from "../../Image/Home/page02-phone2.svg";
import thumbsUp from "../../Image/Home/page02-thumbsUp.svg";

const MainBox = styled.div`
    width: 50vw;
	display: flex;
	position: relative;
	align-items: center;
	justify-content: center;
`;

const PhoneImage = styled.img`
    width: 100%;
`;

const Thumbs = styled.img`
	display: flex;
	width: 23vw;
	position: absolute;
	bottom: 0vw;
	left: 13vw;
`;

export default function ThumbsUp() {
	const [start, setStart] = useState(false);

	const thumbAnimation = useSpring({
		from: {
			x: "23vw",
			opacity: 0,
			rotatez: "-20deg",
		},
		to: {
			x: start ? "0vw" : "23vw",
			opacity: start ? 1 : 0,
			rotatez: "-20deg",
		},
		config: config.wobbly,
	})

	return (
		<MainBox onMouseEnter={()=>{setStart(true)}}>
			<PhoneImage src={phone2} />
			<Thumbs as={animated.img} src={thumbsUp} style={{...thumbAnimation}} />
		</MainBox>
	)
}