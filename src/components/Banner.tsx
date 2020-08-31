import React from "react";
import { a, SpringValue, to, useSpring, useTrail } from "react-spring";
// Styles
import styled from "styled-components";

const Container = styled(a.aside)`
  background-color: #000;
  color: #fff;
  font-family: cornerstone;
  font-size: 2rem;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  & a {
    color: #fff;
  }
`;
const CloseButton = styled(a.div).attrs({
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
const TextContainer = styled(a.a)`
  font-size: 6rem;
  font-weight: bold;
  line-height: 1;

  &:hover {
    color: #fce21b;
    cursor: pointer;
    text-decoration: none;
  }
`;
const TrailText = styled(a.span)`
  display: block;

  &:last-child,
  & .fas {
    color: inherit;
    font-size: 1rem;
  }
`;

const bannerText = [
  "BLACK",
  "LIVES",
  "MATTER",
  <>
    Please consider donating <i className="fas fa-external-link-alt"></i>
  </>
];

type TransitionProps = {
  opacity: SpringValue<number>;
  height: SpringValue<string>;
};

type BannerProps = {
  show: boolean;
  toggleBanner: Function;
  transition: TransitionProps;
};

function Banner({ show, toggleBanner, transition }: BannerProps): JSX.Element {
  // BEGIN:: Button
  const [{ color, z }, set] = useSpring(() => ({
    config: { friction: 13 },
    color: "#8be9fd",
    z: 0
  }));
  // END:: Button
  // BEGIN:: text trail
  const textTrail = useTrail(bannerText.length, {
    opacity: show ? 1 : 0,
    height: 80,
    x: 0,
    from: { opacity: 0, height: 0, x: 40 }
  });
  // END:: text trail

  return (
    <Container style={transition as any}>
      <TextContainer href="https://blacklivesmatter.com/" target="_blank">
        {textTrail.map(({ x, height, ...rest }, index) => (
          <TrailText
            key={index}
            style={
              {
                ...rest,
                transform: to([x], x => `translate3d(0,${x}px,0)`)
              } as any
            }
          >
            <a.span style={{ height }}>{bannerText[index]}</a.span>
          </TrailText>
        ))}
      </TextContainer>
      <CloseButton
        aria-label="Close banner"
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
          className="fas fa-times"
          style={{
            transform: to([z], z => `rotate(${z}deg)`)
          }}
        ></a.i>
      </CloseButton>
    </Container>
  );
}

export default Banner;
