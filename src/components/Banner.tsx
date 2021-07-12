import React, { useRef, useState } from "react";
import {
  a,
  to,
  useChain,
  useSpring,
  useTrail,
  useTransition
} from "react-spring";
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

// const bannerText: [string | React.ReactElement] | [] = [
//   "BLACK",
//   "LIVES",
//   "MATTER",
//   <>
//     Please consider donating <i className="fas fa-external-link-alt"></i>
//   </>
// ];

export interface BannerText {
  [index: number]: string | React.ReactElement;
}

export interface BannerProps {
  bannerText: BannerText[];
}

function Banner({ bannerText }: BannerProps): JSX.Element {
  const [banner, setBannner] = useState(true);

  // BEGIN:: BackgroundSpring
  const backgroundRef = useRef(null);
  const backgroundTransition = useSpring({
    ref: backgroundRef,
    opacity: 1,
    height: banner ? "100vh" : "5vh",
    from: {
      opacity: 0,
      height: "0vh"
    }
  });
  // END:: BackgroundSpring
  // BEGIN :: Banner transition
  const bannerRef = useRef(null);
  const bannerTransition = useTransition(banner, {
    from: { height: "0%", opacity: 0 },
    enter: { height: "50%", opacity: 1 },
    leave: { height: "0%", opacity: 0 },
    ref: bannerRef
  });
  // END :: Banner transition
  // BEGIN:: text trail
  const textTrail = useTrail(bannerText.length, {
    opacity: banner ? 1 : 0,
    height: banner ? 80 : 0,
    x: banner ? 0 : 40,
    from: { opacity: 0, height: 0, x: 40 }
  });
  // END:: text trail
  // BEGIN:: Button
  const [{ color, z }, set] = useSpring(() => ({
    config: { friction: 13 },
    color: "#8be9fd",
    z: 0
  }));
  // END:: Button
  useChain(banner ? [backgroundRef, bannerRef] : [bannerRef, backgroundRef], [
    0,
    0.25
  ]);

  const handleClick = (): void => {
    setBannner(state => !state);
    set({ color: "#8be9fd", z: 0 });
  };

  return bannerText.length ? (
    <Container style={backgroundTransition as any}>
      {bannerTransition(
        (style, item) =>
          item && (
            <TextContainer
              style={style as any}
              href="https://blacklivesmatter.com/"
              target="_blank"
            >
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
          )
      )}
      <CloseButton
        aria-label="Close banner"
        onClick={(): void => handleClick()}
        onMouseEnter={(): any => set({ color: "#50fa7b", z: 0 })}
        onMouseLeave={(): any => set({ color: "#8be9fd", z: 180 })}
        style={
          {
            color
          } as any
        }
      >
        <a.i
          className={`fas ${banner ? "fa-times" : "fa-arrow-down"}`}
          style={{
            transform: to([z], z => `rotate(${z}deg)`)
          }}
        ></a.i>
      </CloseButton>
    </Container>
  ) : (
    <></>
  );
}

export default Banner;
