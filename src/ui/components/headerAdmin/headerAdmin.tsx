import { Link, Box } from '@mui/material';
import NextLink from 'next/link';

import {
    HeaderContainer,
    Logo,
    LinksContainer
} from './headerAdmin.style';

export default function SpecificHeaderAdmin() {
    return (
        <HeaderContainer>
            <div className=''>
                <Link component={NextLink} href={'/'}>
                    <a>
                        <Logo src={'/imgs/logo.svg'} alt={'adote pet'} />
                    </a>
                </Link>

                <LinksContainer>
                    <Link component={NextLink} href={'/pets/signin'}>
                        <a>
                            Sign in pet
                        </a>
                    </Link>
                    <Link component={NextLink} href={'/pets/resume'}>
                        <a>
                            Resume{' '}
                            <Box component={'span'} sx={{ display: { sm: 'initial', xs: 'none' } }}>
                                of adoptions
                            </Box>
                        </a>
                    </Link>
                </LinksContainer>
            </div>
        </HeaderContainer>
    )
}