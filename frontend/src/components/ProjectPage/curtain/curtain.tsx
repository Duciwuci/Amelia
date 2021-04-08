import React from "react";
import { BACKGROUND, FullButton, Header, Text } from "../../shared/styles";
import amelia2 from "../../ProjectOverview/OverviewImages/amelia2.png";

interface CurtainProps {
  update: (arg0: boolean) => void;
}
export const Curtain = (props: CurtainProps) => {
    return (
        <OuterContainer>
            <AnotherContainer>
                <InnerContainer>
                    <img
                        src={amelia2}
                        alt=""
                        style={{width: 320, marginBottom: 10}}
                    />
                    <FullButton style={{marginBottom: 15}} primary={true} onClick={() => props.update(false)}>
                        Project Amelia
                    </FullButton>
                    <Text>
                        Join Amelia on her quest to fly around the globe! This project is
                        based on Amelia Earhart, who was the first female aviator to fly solo
                        across the Atlantic Ocean. Along the way from the states over to
                        Ireland, you will learn the concepts and applications of mathematical
                        functions. Amelia's last flight is shrouded in mystery and there are
                        various theories about her last adventure. Dive into the world of
                        travel and aviation while getting acquainted with mathematical
                        functions. Fasten your seatbelt!
                    </Text>
                </InnerContainer>
            </AnotherContainer>
        </OuterContainer>
    );
};
