import React from "react";
import amelia from "./amelia.png";
import { Button } from "@material-ui/core";

export const Step1PopoverElement = (): JSX.Element => {
  return (
    <div>
      <img alt="" src={amelia} />
      <p>
        Amelia Earhart was an us-american pilot. Borned in 1897, she was the
        first women who fly over the atlantic ocean.
      </p>
      <Button variant="contained" color="secondary">
        Click here for more!
      </Button>
    </div>
  );
};
