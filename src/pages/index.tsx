import type { NextPage } from 'next';
import TitleStructre from '../ui/components/Title/Title';
import ListContent from '../ui/components/List/List';
import { Dialog, TextField, Grid, DialogActions, Button, Snackbar } from '@mui/material';
import { useIndex } from '../data/hooks/pages/useIndex';

const Home: NextPage = () => {
  const {
    petList,
    selectedPet,
    setSelectedPet,
    email,
    setEmail,
    price,
    setPrice,
    mensagem,
    setMenssage,
    adopt,
  } = useIndex();
  return (
    <div>
      <TitleStructre
        title=""
        subtitle={
          <span>
            With a small monthly payment, you <br />
            can <strong>adopt</strong> a pet virtually.
          </span>
        } />
      <ListContent
        pets={petList}
        onSelect={(pet) => setSelectedPet(pet)}
      />

      <Dialog open={selectedPet !== null}
        fullWidth
        PaperProps={{ sx: { p: '40px' } }}
        onClose={() => setSelectedPet(null)}
      >
        <Grid container spacing={(2)}>
          <Grid item xs={12}>
            <TextField
              label={'Email'}
              fullWidth
              type={'email'}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label={'Quantity per month'}
              fullWidth
              type={'number'}
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </Grid>
        </Grid>
        <DialogActions sx={{ mt: 5 }}>
          <Button color={'secondary'}
            onClick={() => setSelectedPet(null)}>
            Cancel
          </Button>
          <Button
            variant={'contained'}
            onClick={adopt}>
            Confirm adoption
          </Button>
        </DialogActions>
      </Dialog>
      <Snackbar
        open={mensagem.length > 0}
        message={mensagem}
        autoHideDuration={2500}
        onClose={() => setMenssage('')}
      />
    </div>
  )
}

export default Home
