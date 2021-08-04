import { Container, Typography, Button, ButtonGroup } from '@material-ui/core';
import AcUnitIcon from '@material-ui/icons/AcUnit';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  btn: {
    fontSize: 60,
    backgroundColor: 'violet',

    '&:hover': {
      backgroundColor: 'pink',
    },
  },

  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  },
});

const { log } = console;

export default function Buttons() {
  const mui = useStyles();

  return (
    <Container>
      <Typography
        className={mui.title}
        variant='h1'
        color='primary'
        align='center'
      >
        Buttons
      </Typography>

      <Button type='submit'>Submit</Button>
      <br />
      <br />

      <Button type='submit' color='secondary' variant='outlined'>
        Submit
      </Button>
      <br />
      <br />

      <ButtonGroup color='primary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>
      <br />
      <br />

      <Button
        className={mui.btn}
        onClick={() => log('You clicked me')}
        type='submit'
        color='secondary'
        variant='contained'
      >
        Submit
      </Button>
      <br />
      <br />

      <AcUnitIcon />
      <AcUnitIcon color='primary' fontSize='large' />
      <AcUnitIcon color='secondary' fontSize='small' />
      <AcUnitIcon color='action' fontSize='small' />
      <AcUnitIcon color='error' fontSize='small' />
      <AcUnitIcon color='disabled' fontSize='small' />
      <br />
      <br />

      <Button
        type='submit'
        color='secondary'
        variant='contained'
        endIcon={<KeyboardArrowRightIcon />}
      >
        Submit
      </Button>
    </Container>
  );
}
