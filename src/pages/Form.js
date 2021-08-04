import { useState } from 'react';
import {
  makeStyles,
  Container,
  Typography,
  TextField,
  Button,
} from '@material-ui/core';

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: 'block',
  },
});

const { log } = console;

export default function Form() {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);

  const mui = useStyles();

  const handleSubmit = e => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    title == '' && setTitleError(true);
    details === '' && setDetailsError(true);
    title && details && log(title, details);

    title == ''
      ? setTitleError(true)
      : details === ''
      ? setDetailsError(true)
      : title && details
      ? log(title, details)
      : log('smth wrong');
  };

  return (
    <Container>
      <Typography variant='h1'>Form</Typography>

      <form noValidate autoComplete='off' onSubmit={handleSubmit}>
        <TextField
          className={mui.field}
          onChange={e => setTitle(e.target.value)}
          label='Note Title'
          variant='outlined'
          color='secondary'
          fullWidth
          required
          error={titleError}
        />

        <TextField
          className={mui.field}
          onChange={e => setDetails(e.target.value)}
          label='Details'
          variant='outlined'
          color='secondary'
          multiline
          rows={4}
          required
          error={detailsError}
        />

        <Button
          className={mui.btn}
          type='submit'
          color='secondary'
          variant='contained'
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
