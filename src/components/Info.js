import React from "react";
import styled from "styled-components";
import savePrivacy from "../Image/Home/Info-savePrivacy.svg";
import sendPrivacy from "../Image/Home/Info-sendPrivacy.svg";
import law from "../Image/Home/Info-law.svg";
import serviceTerm from "../Image/Home/Info-serviceTerm.svg";
import locationTerm from "../Image/Home/Info-locationTerm.svg";
import companyInfo from "../Image/Home/Info-companyInfo.svg";
import contactMail from "../Image/Home/Info-contactMail.svg";
import cs from "../Image/Home/Info-cs.svg";
import youtube from "../Image/Home/Info-youtube.svg";
import blog from "../Image/Home/Info-blog.svg";
import instagram from "../Image/Home/Info-instagram.svg";
import facebook from "../Image/Home/Info-facebook.svg";

const media = {
    phone: "@media(max-width: 500px)",
};

const Container = styled.div`
	width: 100%;
	background-color: #f4f4f4;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const MainBox = styled.div`
    width: 50vw;
	display: flex;
	flex-direction: column;
	justify-content: center;
	margin-bottom: 10vw;
	${media.phone}{
		width: 85vw;
		margin-bottom: 20vw;
		margin-top: 15vw;
	}
`;

const NotionBox = styled.div`
	width: 50vw;
	display: flex;
	justify-content: space-between;
	margin-top: 3vw;
	${media.phone}{
		width: 85vw;
	}
`;

const NotionBtn = styled.img`
	width: 8vw;
	cursor: pointer;
	:hover{
		opacity: 0.7;
	}
	${media.phone}{
		width: 15vw;
	}
`;

const CompanyInfoBox = styled.div`
	display: flex;
	position: relative;
`;

const CompanyInfo = styled.img`
	width: 30vw;
	margin-left: 0.5vw;
	margin-top: 4vw;
	${media.phone}{
		width: 70vw;
	}
`;

const Mail = styled.img`
	width: 14vw;
	position: absolute;
	bottom: 0vw;
	left: 0.5vw;
	${media.phone}{
		width: 33vw;
	}
`;

const Cs = styled.img`
	width: 14vw;
	position: absolute;
	bottom: 0vw;
	left: 16vw;
	${media.phone}{
		width: 33vw;
		left: 36vw;
	}
`;

const SNSBox = styled.div`
	width: 15vw;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0.5vw 0vw ;
	margin-top: 2vw;
	margin-left: 0.7vw;
`;

const SNSBtn = styled.img`
	width: 3vw;
	cursor: pointer;
	:hover{
		opacity: 0.6;
	}
	${media.phone}{
		width: 8vw;
	}
`;

export default function Info() {
	const youtube_btn = () => {
        window.open(`${"https://www.youtube.com/channel/UCn9XLuRBxzGJsjW8eYXkmcQ/featured"}`, "_blank");
    };
    const blog_btn = () => {
        window.open(`${"https://blog.naver.com/wn0572"}`, "_blank");
	};
	const instagram_btn = () => {
        window.open(`${"https://www.instagram.com/lifeu_official/"}`, "_blank");
    };
    const facebook_btn = () => {
        window.open(`${"https://www.facebook.com/%EB%9D%BC%EC%9D%B4%ED%91%B8%EB%A7%88%EC%BC%93-106557832017358"}`, "_blank");
	};
	
	return (
		<Container>
			<MainBox>
				<NotionBox>
					<NotionBtn src={savePrivacy} onClick={()=>{window.open(`https://nimble-hunter-8cf.notion.site/98c2915724d14a4d93162c2920d6c4f0`, "_blank")}} />
					<NotionBtn src={sendPrivacy} onClick={()=>{window.open(`https://nimble-hunter-8cf.notion.site/3-c240b5c21a6f4775a614f4d93c8cc568`, "_blank")}} />
					<NotionBtn src={law} onClick={()=>{window.open(`https://nimble-hunter-8cf.notion.site/092b7b3439b84c33bca744bab3cf49d9`, "_blank")}} />
					<NotionBtn src={serviceTerm} onClick={()=>{window.open(`https://nimble-hunter-8cf.notion.site/85fdf5f4057b440a84b669534ed85a5b`, "_blank")}} />
					<NotionBtn src={locationTerm} onClick={()=>{window.open(`https://nimble-hunter-8cf.notion.site/f1ecb887bb1a4c1f828c9b9c7aa48aa7`, "_blank")}} />
				</NotionBox>
				<CompanyInfoBox>
					<CompanyInfo src={companyInfo} />
					<Mail src={contactMail} />
					<Cs src={cs} />
				</CompanyInfoBox>
				<SNSBox>
					<SNSBtn src={youtube} onClick={youtube_btn} />
					<SNSBtn src={blog} onClick={blog_btn} />
					<SNSBtn src={instagram} onClick={instagram_btn} />
					<SNSBtn src={facebook} onClick={facebook_btn} />
				</SNSBox>
			</MainBox>
		</Container>
		
	)
}