import React from "react";
import { a, SpringValue, to, useSpring } from "react-spring";
// Styles
import styled from "styled-components";

const Container = styled(a.div)`
  background-color: #000;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;
const OpenButton = styled(a.div).attrs({
  role: "button"
})`
  padding: 1rem;
  transform-origin: 50% 50%;
  width: auto;

  &:hover {
    cursor: pointer;
  }

  & i {
    color: inherit;
    font-size: 1.5rem;
  }
`;

type OpenTransitionProps = {
  opacity: SpringValue<number>;
  height: SpringValue<string>;
};

type OpenBannerProps = {
  show?: boolean;
  toggleBanner: Function;
  transition: OpenTransitionProps;
};

function OpenBanner({
  toggleBanner,
  transition
}: OpenBannerProps): JSX.Element {
  // BEGIN:: Button
  const [{ color, z }, set] = useSpring(() => ({
    config: { friction: 13 },
    color: "#8be9fd",
    z: 0
  }));
  // END:: Button

  return (
    <Container style={transition as any}>
      <OpenButton
        aria-label="Open banner"
        onClick={(): void => toggleBanner()}
        onMouseEnter={(): any => set({ color: "#50fa7b", z: 180 })}
        onMouseLeave={(): any => set({ color: "#8be9fd", z: 0 })}
        style={
          {
            color,
            opacity: transition.opacity
          } as any
        }
      >
        <a.i
          className="fas fa-arrow-down"
          style={{
            transform: to([z], z => `rotate(${z}deg)`)
          }}
        ></a.i>
      </OpenButton>
    </Container>
  );
}

export default OpenBanner;
