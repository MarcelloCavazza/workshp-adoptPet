import { styled } from "@mui/system";

export const TitleStyled = styled('h1')`
    font-size: 20px;
    text-align: center;
    margin-top: ${({theme}) => theme.spacing(5)};
`;
export const SubTitleStyled = styled('h2')`
    font-size: 18px;
    text-align: center;
    margin-bottom: ${({theme})=> theme.spacing(3)};
    font-weight: normal;
    color: ${({theme}) => theme.palette.text.secondary};
`;