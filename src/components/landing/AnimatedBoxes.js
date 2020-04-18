import React from "react"
import styled, { css } from "styled-components"

const bounce = css`
animation: bounce 0.5s ease infinite alternate;

@keyframes bounce {
  from {
    transform: scale(1) translateY(0px);
  }
  to {
    transform: scale(1.1) translateY(-15px);
  }
}
`
export default function AnimatedBoxes() {
  const randomlyRotate = id => {
    let box = document.getElementById(id)
    box.classList.add("rotate-box-randomly")
    setTimeout(() => {
      box.classList.remove("rotate-box-randomly")
    }, 1000)
  }
  return (
    <Boxes>
      <BoxRow>
        <Box
          color="#8CD5FF"
          id="box1"
          className="box"
          
        >
          <img src={require("../../images/icons/icon2.svg")} alt="" />
        </Box>
      </BoxRow>
      <BoxRow>
        <Box
          color="#FFAA9C"
          id="box2"
          className="box"
        
        ></Box>
        <Box
          color="#7DE9D0"
          id="box3"
          className="box"
        
        ></Box>
      </BoxRow>
      <BoxRow>
        <Box
          color="#212121"
          id="box4"
          className="box"
        
        ></Box>
        <Box color="#EA4334" id="box5" className="box"></Box>
        <Box color="#0D9D58" id="box6" className="box"></Box>
      </BoxRow>
      <BoxRow>
        <Box
          color="#F2E877"
          id="box7"
          className="box"
        >
          <img src={require("../../images/icons/icon1.svg")} alt="" />
        </Box>
        <Box color="#4285F4" id="box8" className="box">
          <img src={require("../../images/icons/icon3.svg")} alt="" />
        </Box>
        <Box color="#E0E0E0" id="box9" className="box"></Box>
        <Box color="#FCBC05" id="box10" className="box"></Box>
      </BoxRow>
    </Boxes>
  )
}

const getRandomRotationBetween = (low, high) => {
  let rand = Math.random()
  rand = rand * high
  rand = rand + low
  return rand
}


const Boxes = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  position: relative;

  width: 50%;
  left: 40%;
  min-height: 50%;
  top: 10%;

  @media screen and (max-width: 1024px) {
    transform: rotate(180deg);
    width: 100%;
    left: 0%;
    top: 0%;
  }
`

const BoxRow = styled.div`
  height: 25%;
  display: flex;
  justify-content: flex-end;
`

const Box = styled.div`
  position: relative;
  height: 8vw;
  width: 8vw;
  z-index: 1;
  opacity: 0.9;
  transition: opacity 1s ease;
  display: flex;

  img {
    margin: auto;
    max-width: 50%;
  }
  &:hover {
    z-index: 99;
    cursor: pointer;
    opacity: 1;

    ${props => props.animationOnHover || bounce}
  }

  background-color: ${props => props.color || "var(--green)"};
  @media screen and (max-width: 1024px) {
    height: 25vw;
    width: 25vw;
  }
`