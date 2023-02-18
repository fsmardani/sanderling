import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from "@material-ui/icons"
import styled from "styled-components"

const Container = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;

    `;

const Arrow = styled.div`
    border-radius: 50%;
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


`;

const Wrapper = styled.div`
    height: 100%;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
`;

const ImageContainer = styled.div`
    flex: 1;   
    height: 100%;
    padding: 50px;
`;

const Image = styled.img`
    height: 80%;
`;
const InfoContainer = styled.div`
    flex: 1;     
`;


const Title = styled.h1`
    font-size : 70px;
`;

const Desc = styled.p`
    margin: 50px 0px;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`;

const Button = styled.button`
    padding: 10px ;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
`;



const Slider = () => {
  return (
    <Container>
            <Arrow direction = "left">
                <ArrowBackIosOutlined/>
            </Arrow>
            <Wrapper>
                <Slide>
                    <ImageContainer>
                        <Image src = "https://img.freepik.com/free-vector/vintage-mirror-isolated-white-background_1308-76115.jpg"></Image>
                    </ImageContainer>
                    <InfoContainer>
                        <Title>
                            آیه نگر 
                        </Title>
                        <Desc>
                            همینطوری
                        </Desc>
                        <Button>
                             آیه ها را دنبال کن
                        </Button>
                    </InfoContainer>
                </Slide>
            </Wrapper>
            <Arrow direction = "right">
                <ArrowForwardIosOutlined/>
            </Arrow>
        
    </Container>
  )
}

export default Slider