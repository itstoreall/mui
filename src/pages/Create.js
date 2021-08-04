import { Typography, Button, ButtonGroup, Container } from '@material-ui/core';
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

export default function Create() {
  const mui = useStyles();

  return (
    <Container>
      <Typography
        className={mui.title}
        variant='h1'
        color='primary'
        align='center'
      >
        Create a new Note
      </Typography>

      <Typography noWrap color='secondary'>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        dolorem culpa quod delectus itaque laudantium laboriosam consequatur
        quia aspernatur quos!
      </Typography>

      <Typography
        color='textSecondary'
        variant='h6'
        component='h2'
        gutterBottom
      >
        h2 instead h6 in markup, but with h2 font-size
      </Typography>

      <Button type='submit'>Submit</Button>

      <Button type='submit' color='secondary' variant='outlined'>
        Submit
      </Button>

      <ButtonGroup color='primary' variant='contained'>
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

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

      <AcUnitIcon />
      <AcUnitIcon color='primary' fontSize='large' />
      <AcUnitIcon color='secondary' fontSize='small' />
      <AcUnitIcon color='action' fontSize='small' />
      <AcUnitIcon color='error' fontSize='small' />
      <AcUnitIcon color='disabled' fontSize='small' />

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
