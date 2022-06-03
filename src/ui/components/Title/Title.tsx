import { TitleStyled, SubTitleStyled } from "./Title.style";

interface TitleStructreProps {
    title: string | JSX.Element;
    subtitle?: string | JSX.Element;
}

export default function TitleStructre(props : TitleStructreProps){
    return (
        <>
            <TitleStyled>{props.title}</TitleStyled>
            <SubTitleStyled>{props.subtitle}</SubTitleStyled>    
        </>
        )
}


