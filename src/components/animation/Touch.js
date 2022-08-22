import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated, useSpringRef, useChain, config } from "react-spring";
import finger from "../../Image/Home/page02-finger.svg";
import phone from "../../Image/Home/page02-phone1.svg";
import star from "../../Image/Home/page02-starIcon.svg";
import heart from "../../Image/Home/page02-heartIcon.svg";

const MainBox = styled.div`
    width: 50vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const PhoneImage = styled.img`
    width: 100%;
`;

const Finger = styled.img`
	width: 25vw;
	display: flex;
	position: absolute;
	top: 22vw;
	left: 33vw;
`;

const Heart = styled.img`
	width: 8vw;
	display: flex;
	position: absolute;
	top: 33vw;
	right: 23vw;
`;

const Star = styled.img`
	width: 10vw;
	display: flex;
	position: absolute;
	top: 17vw;
	left: 45vw;
`;

export default function Touch() {

	const [start, setStart] = useState(false);

	const fingerTouchRef = useSpringRef();
	const fingertouch = useSpring({
		from: {
			y: "0vw",
			rotatez: 0,
		},
		to: {
			y: start ? "4vw" : "0vw",
			rotatez: start ? 20 : 0,
		},
		config: config.gentle,
		ref: fingerTouchRef,
	});

	const iconRef = useSpringRef();
	const icon = useSpring({
		from: {
			y: "4vw",
			scale: 0,
			opacity: 0,
		},
		to: {
			y: start ? "0vw" : "4vw",
			scale: start ? 1 : 0,
			opacity: start ? 1 : 0,
		},
		config: config.stiff,
		ref: iconRef
	})

	useChain([fingerTouchRef, iconRef], [0, 0.4]);

	return (
		<MainBox onMouseEnter={()=>{setStart(true)}}>
			<PhoneImage src={phone} />
			<Finger as={animated.img} src={finger} style={{ ...fingertouch }} />
			<Heart as={animated.img} src={heart} style={{...icon}} />
			<Star as={animated.img} src={star} style={{...icon}}/>
		</MainBox>
	)
}