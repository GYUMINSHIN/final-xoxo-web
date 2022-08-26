import React from "react";
import styled from "styled-components";
import logo from "../Image/Header/lifeULogo.svg";
import headerEvent from "../Image/Header/headerEvent.svg";
import headerService from "../Image/Header/headerService.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

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
	${media.phone}{
		height: 15vw;
	}
`;

const MainBox = styled.div`
    width: 51vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${media.phone}{
		width: 85%;
	}
`;

const Logo = styled.img`
    width: 10vw;
	cursor: pointer;
	${media.phone}{
		width: 30vw;
	}
`;

const MenuBox = styled.div`
	width: 16vw;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${media.phone}{
		width: 40vw;
	}
`;

const MenuServiceBtn = styled.img`
	width: 7vw;
	cursor: pointer;
	:hover{
		opacity: 0.6;
	}
	${media.phone}{
		width: 20vw;
	}
`;

const MenuEventBtn = styled.img`
	width: 7vw;
	cursor: pointer;
	:hover{
		opacity: 0.6;
	}
	${media.phone}{
		width: 20vw;
	}
`;

export default function Header() {
	const goHome = () => {
        window.location.href = "/";
	}
	const goEvents = () => {
        window.location.href = "/events";
    }
    return (
        <Container>
            <MainBox>
				<Logo src={logo} onClick={goHome} />
				<MenuBox>
					<MenuServiceBtn src={headerService} onClick={goHome} />
					<MenuEventBtn src={headerEvent} onClick={goEvents} />
				</MenuBox>
            </MainBox>
        </Container>
    );
}
