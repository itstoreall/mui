import { Typography } from "@material-ui/core";

export default function Create() {
  return (
    <div>
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

      <a href="https://material-ui.com/api/typography/" target="_blank">
        Typography API
      </a>
    </div>
  );
}
