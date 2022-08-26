import React, { useState } from "react";
import styled from "styled-components";
import { useSpring, animated, useSpringRef, useChain, config } from "react-spring";
import whyLifeU from "../../Image/Home/page02-whyLifeU.svg";
import lock from "../../Image/Home/page02-lockIcon.svg";
import coin from "../../Image/Home/page02-coinIcon.svg";
import medal from "../../Image/Home/page02-medalIcon.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

const MainBox = styled.div`
    width: 50vw;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	${media.phone}{
		width: 85%;
	}
`;

const Box = styled.div`
	display: flex;
	align-items: center;
	margin-top: 5vw;
`;

const WhyLifeUImage = styled.img`
	width: 20vw;
	${media.phone}{
		width: 45vw;
	}
`;

const Lock = styled.img`
	width: 15vw;
	${media.phone}{
		width: 25vw;
	}
`;

const Coin = styled.img`
	width: 15vw;
	${media.phone}{
		width: 25vw;
	}
`;

const Medal = styled.img`
	width: 15vw;
	${media.phone}{
		width: 25vw;
	}
`;

export default function Bedges() {

	const [start, setStart] = useState(false);

	const lockRef = useSpringRef();
	const lockAnimation = useSpring({
		from: {
			y: 100,
			opacity: 0,
		},
		to: {
			y: start ? 0 : 100,
			opacity: start ? 1 : 0,
		},
		config: config.slow,
		ref:lockRef,
	})

	const coinRef = useSpringRef();
	const coinAnimation = useSpring({
		from: {
			y: 100,
			opacity: 0,
		},
		to: {
			y: start ? 0 : 100,
			opacity: start ? 1 : 0,
		},
		config: config.slow,
		ref: coinRef,
	})

	const medalRef = useSpringRef();
	const medalAnimation = useSpring({
		from: {
			y: 100,
			opacity: 0,
		},
		to: {
			y: start ? 0 : 100,
			opacity: start ? 1 : 0,
		},
		config: config.slow,
		ref: medalRef,
	})

	useChain([lockRef, coinRef, medalRef], [0,0.2,0.4]);

	return (
		<MainBox style={{marginTop:"7vw"}} onMouseEnter={()=>{setStart(true)}}>
			<WhyLifeUImage src={whyLifeU} />
			<Box>
				<Lock as={animated.img} src={lock} style={{...lockAnimation}} />
				<Coin as={animated.img} src={coin} style={{...coinAnimation}} />
				<Medal as={animated.img} src={medal} style={{...medalAnimation}} />
			</Box>
		</MainBox>
	)
	
}