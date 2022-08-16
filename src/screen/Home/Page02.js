import React from "react";
import styled from "styled-components";
import Touch from "../../components/animation/Touch";
import Bedges from "../../components/animation/Bedges";
import ThumbsUp from "../../components/animation/ThumbsUp";

const Container = styled.div`
	width: 100%;
	display: flex;
	position: relative;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 10vw 0vw;
`;

export default function Page02() {
	return (
		<Container>
			<Touch />
			<ThumbsUp />
			<Bedges />
		</Container>
		
	)
}