import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Info from "../../components/Info";


const Container = styled.div`
	width: 100%;
`;

export default function EventsHome() {
	return (
		<Container>
			<Header />
			<Info />
		</Container>
	);
}