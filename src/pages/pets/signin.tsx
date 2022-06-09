import { NextPage } from "next";
import { useRegistration } from '../../data/hooks/pages/pets/useRegistration';
import TitleStructre from "../../ui/components/Title/Title";
import { Paper, Grid, TextField, Button, Snackbar } from "@mui/material";

const SignIn: NextPage = () => {
    const {
        name, setName,
        description, setDescript,
        picture, setPicture,
        popUP, setPopUP,
        register
    } = useRegistration();
    return (
        <>
            <TitleStructre
                title={'Registration of Pets'}
                subtitle={'Full fill the fields to add new pet'}
            />
            <Paper sx={{ maxWidth: 970, mx: 'auto', p: 5 }}>
                <Grid container spacing={3}>
                    <Grid item xs={12}>
                        <TextField label={'Name'}
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            fullWidth
                            placeholder={'Write the pets name'} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label={'Description'}
                            value={description}
                            onChange={(e) => setDescript(e.target.value)}
                            fullWidth
                            placeholder={"Write the pet's story of life"}
                            multiline
                            rows={4} />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField label={'Picture'}
                            value={picture}
                            onChange={(e) => setPicture(e.target.value)}
                            fullWidth
                            placeholder={"Put the pet's picture image"}
                            multiline
                            rows={4} />

                        <Button
                            variant={'contained'}
                            color={'secondary'}
                            sx={{ mt: 2 }}
                            component={'a'}
                            href={'https://imgur.com/upload'}
                            target={'_blank'}
                        >
                            Send an Image and copy the result link
                        </Button>
                    </Grid>
                    <Grid item xs={12} sx={{ textAlign: 'center' }}>
                        <Button
                            onClick={register}
                            variant={'contained'}
                            fullWidth
                            sx={{ maxWidth: { md: 200 }, mt: 4 }}
                        >
                            Create Pet
                        </Button>
                    </Grid>
                </Grid>
            </Paper>
            <Snackbar
                open={popUP.length > 0}
                autoHideDuration={2500}
                onClose={() => setPopUP('')}
                message={popUP}
            />
        </>
    )
}


export default SignIn;