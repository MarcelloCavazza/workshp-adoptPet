import { ContainerHeader, Logo } from "./Header.style";
import { Link } from '@mui/material';
import NextLink from 'next/link';

export default function HeaderMain() {
    return (
        <ContainerHeader>
            <Link component={NextLink} href={'/'}>
                <a>
                    <Logo src={'/imgs/logo.svg'} alt={'adote pet'} />
                </a>
            </Link>
        </ContainerHeader>
    )
}