import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    `

const Arrow = styled.div`
    border-radious: 50%;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction ==="left" && "10px"};
    right: ${props => props.direction ==="right" && "10px"};
    position: absolute;
    align-items: center;
    justify-content: center;
    height: 50px;
    width: 50px;
    cursor: pointer;


`


const Slider = () => {
  return (
    <Container>
        <Arrow direction = "left">
            <ArrowBackIosOutlined/>
        </Arrow>
        <Arrow direction = "right">
            <ArrowForwardIosOutlined/>
        </Arrow>
    </Container>
  )
}

export default Slider