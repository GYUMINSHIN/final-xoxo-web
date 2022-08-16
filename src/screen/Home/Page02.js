import React from "react";
import styled from "styled-components";
import Touch from "../../components/animation/Touch";
import thumbsUpImage from "../../Image/Home/page02-secondImg.svg";
import whyLifeU from "../../Image/Home/page02-whyLifeU.svg";

const Container = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10vw 0vw;
`;

const MainBox = styled.div`
    width: 50vw;
	display: flex;
	align-items: center;
	justify-content: center;
`;

const SecondPhoneImage = styled.img`
    width: 100%;
`;

const WhyLifeUImage = styled.img`
	width: 20vw;
`;

export default function Page02() {
	return (
		<Container>
			<Touch/>
			<MainBox>
				<SecondPhoneImage src={thumbsUpImage} />
			</MainBox>
			<MainBox style={{marginTop:"7vw"}}>
				<WhyLifeUImage src={whyLifeU} />
			</MainBox>
		</Container>
		
	)
}