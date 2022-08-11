import React from "react";
import styled from "styled-components";
import logo from "../Image/Header/lifeULogo.svg";
import headerEvent from "../Image/Header/headerEvent.svg";
import headerService from "../Image/Header/headerService.svg";

const Container = styled.div`
    width: 100%;
    height: 4vw;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0px;
    background-color: white;
	z-index: 100;
`;

const MainBox = styled.div`
    width: 50vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const Logo = styled.img`
    width: 10vw;
`;

const MenuBox = styled.div`
	width: 16vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
`;

const MenuServiceBtn = styled.img`
	cursor: pointer;
	:hover{
		opacity: 0.6;
	}
`;

const MenuEventBtn = styled.img`
	cursor: pointer;
	:hover{
		opacity: 0.6;
	}
`;

export default function Header() {
    return (
        <Container>
            <MainBox>
                <Logo src={logo} />
				<MenuBox>
					<MenuServiceBtn src={headerService} />
					<MenuEventBtn src={headerEvent} />
				</MenuBox>
            </MainBox>
        </Container>
    );
}
