import '../ui/styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material';
import tema from '../ui/themes/tema';
import HeaderMain from '../ui/components/Header/Header';
import SpecificHeaderAdmin from '../ui/components/headerAdmin/headerAdmin';
import { useRouter } from 'next/router';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  return (
    <ThemeProvider theme={tema}>
      <SpecificHeaderAdmin />
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

export default MyApp
