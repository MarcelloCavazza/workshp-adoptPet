import { styled } from "@mui/material";


export const ContainerHeader = styled('header')`
    display: flex;
    justify-content:center;
    border-bottom: 1px solid #F0F0F0;
    padding: ${({ theme }) => theme.spacing()}
    `
    ;

export const Logo = styled('img')`
    width: 190px;
    `
    ;