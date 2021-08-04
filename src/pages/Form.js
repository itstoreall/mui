import { useState } from "react";
import { useHistory } from "react-router-dom";
import KeyboardArrowRightIcon from "@material-ui/icons/KeyboardArrowRight";
import {
  makeStyles,
  Container,
  Typography,
  FormControlLabel,
  FormControl,
  FormLabel,
  TextField,
  RadioGroup,
  Radio,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles({
  field: {
    marginTop: 20,
    marginBottom: 20,
    display: "block",
  },

  btn: {
    backgroundColor: "red",
    color: "white",

    "&:hover": {
      backgroundColor: "pink",
    },
  },
});

const { log } = console;

export default function Form() {
  const history = useHistory();
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [titleError, setTitleError] = useState(false);
  const [detailsError, setDetailsError] = useState(false);
  const [category, setCategory] = useState("todos");

  const mui = useStyles();

  const handleSubmit = e => {
    e.preventDefault();

    setTitleError(false);
    setDetailsError(false);

    const fetchData = () => {
      fetch("http://localhost:5288/notes", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify({ title, details, category }),
      }).then(() => history.push("/"));
    };

    // title == "" && setTitleError(true);
    // details === "" && setDetailsError(true);
    // title && details && log(title, details);

    title == ""
      ? setTitleError(true)
      : details === ""
      ? setDetailsError(true)
      : title && details
      ? fetchData()
      : log("smth wrong");
  };

  return (
    <Container>
      <Typography variant="h1">Form</Typography>

      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          className={mui.field}
          onChange={e => setTitle(e.target.value)}
          label="Note Title"
          variant="outlined"
          color="secondary"
          fullWidth
          required
          error={titleError}
        />

        <TextField
          className={mui.field}
          onChange={e => setDetails(e.target.value)}
          label="Details"
          variant="outlined"
          color="secondary"
          multiline
          rows={4}
          required
          error={detailsError}
        />

        <FormControl className={mui.field}>
          <FormLabel>Note Category</FormLabel>
          <RadioGroup
            value={category}
            onChange={e => setCategory(e.target.value)}
          >
            <FormControlLabel value="money" control={<Radio />} label="Money" />
            <FormControlLabel value="todos" control={<Radio />} label="Todos" />
            <FormControlLabel value="remds" control={<Radio />} label="Remds" />
            <FormControlLabel value="work" control={<Radio />} label="Work" />
          </RadioGroup>
        </FormControl>
        <br />

        <Button
          type="submit"
          color="secondary"
          variant="contained"
          endIcon={<KeyboardArrowRightIcon />}
        >
          Submit
        </Button>
      </form>
    </Container>
  );
}
