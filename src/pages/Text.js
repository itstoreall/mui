import { Typography, Container } from '@material-ui/core';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  title: {
    textDecoration: 'underline',
    marginBottom: 20,
  },
});

export default function Text() {
  const mui = useStyles();

  return (
    <Container>
      <Typography
        className={mui.title}
        variant='h1'
        color='primary'
        align='center'
      >
        Typography
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
    </Container>
  );
}
