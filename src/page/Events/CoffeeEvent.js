import React from "react";
import styled from "styled-components";
import eventImg from "../../Image/Events/event01.png";
import backToList from "../../Image/Events/chickenEvent-backToList.svg";
import Header from "../../components/Header";

const media = {
    desktop: "@media(min-width: 501px)",
    phone: "@media(max-width: 500px)",
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 8vh;
    ${media.phone}{
        margin-top: 15vw;
    }
`;

const TextBox = styled.div`
    display: flex;
    width: 50vw;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 5vw;
    margin-bottom: 4vw;
    ${media.phone}{
        width: 85vw;
        margin-bottom: 7vw;

    }
`;

const Text1 = styled.text`
    font-family: "jalnan";
    font-size: 2vw;
    font-weight: 900;
    ${media.phone}{
        font-size: 4vw;
    }
`;

const BText = styled.text`
    font-family: "jalnan";
    font-size: 2vw;
    font-weight: 900;
    ${media.phone}{
        font-size: 4vw;
    }
`;

const EventImg = styled.img`
    width: 50vw;
    ${media.phone}{
        width: 85vw;
    }
`;

const ListBtn = styled.img`
    width: 25vw;
    margin-top: 5vw;
    margin-bottom: 10vw;
    cursor: pointer;
    :hover {
        opacity: 0.5;
    }
    ${media.phone} {
        width: 50vw;
        margin-top: 20vw;
    }
`;

export default function CoffeeEvent() {

    const goEvents = () => {
        window.location.href = "/events";
    }
    
    return (
        <Container>
            <Header />
            <TextBox>
                <BText>
                    <Text1>01. </Text1>
                    <BText style={{ color: "#FF0000" }}>
                        {" "}
                        [OPEN EVENT]
                    </BText>{" "}
                    아메리카노가 무료라고 ?!{" "}
                </BText>
            </TextBox>
            <EventImg src={eventImg} />
            <ListBtn src={backToList} onClick={goEvents} />
        </Container>
    );
}
