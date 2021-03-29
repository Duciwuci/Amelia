import React from "react";
import { MobileStepper } from "@material-ui/core";
import { InoButton } from "@inovex.de/elements-react";

interface State {
  activeStep: number;
  maxSteps: number;
}

export class StoryMap extends React.Component<{}, State> {
  public constructor() {
    super({});
    this.state = {
      activeStep: 0,
      maxSteps: 8,
    };
  }

  public render() {
    return (
      <React.Fragment>
        <MobileStepper
          backButton={
            <InoButton
              onClick={(e) =>
                this.setState({
                  activeStep:
                    this.state.activeStep === 0 ? 0 : this.state.activeStep - 1,
                })
              }
            >
              back
            </InoButton>
          }
          nextButton={
            <InoButton
              onClick={(e) =>
                this.setState({
                  activeStep:
                    this.state.activeStep === this.state.maxSteps - 1
                      ? this.state.maxSteps
                      : this.state.activeStep + 1,
                })
              }
            >
              next
            </InoButton>
          }
          steps={this.state.maxSteps}
          activeStep={this.state.activeStep}
        />
      </React.Fragment>
    );
  }
}
