import React from "react";
import styled from "styled-components";
import Header from "../../components/Header";
import Page01 from "./Page01";
import Page02 from "./Page02";
import Page03 from "./Page03";
import Page04 from "./Page04";
import Page05 from "./Page05";

const Container = styled.div`
	width: 100%;
`;

export default function Mainpage() {
	return (
		<Container>
			<Header />
			<Page01 />
			<Page02 />
			<Page03 />
			<Page04 />
			<Page05 />
		</Container>
	);
}