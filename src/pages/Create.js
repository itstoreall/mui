import { Typography, Button, ButtonGroup, Container } from "@material-ui/core";

const { log } = console;

export default function Create() {
  return (
    <Container>
      <Typography variant="h1" color="primary" align="center">
        Create a new Note
      </Typography>

      <Typography noWrap color="secondary">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
        dolorem culpa quod delectus itaque laudantium laboriosam consequatur
        quia aspernatur quos!
      </Typography>

      <Typography
        color="textSecondary"
        variant="h6"
        component="h2"
        gutterBottom
      >
        h2 instead h6 in markup, but with h2 font-size
      </Typography>

      <Button type="submit">Submit</Button>

      <Button type="submit" color="secondary" variant="outlined">
        Submit
      </Button>

      <ButtonGroup color="primary" variant="contained">
        <Button>One</Button>
        <Button>Two</Button>
        <Button>Three</Button>
      </ButtonGroup>

      <Button
        onClick={() => log("You clicked me")}
        type="submit"
        color="secondary"
        variant="contained"
      >
        Submit
      </Button>
    </Container>
  );
}
