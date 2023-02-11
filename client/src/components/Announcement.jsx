import styled from 'styled-components'


const Container = styled.div`
    background-color: #5D3891;
    height: 30px;
    font-size: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
`

const Announcement = () => {
  return (
    <Container>Good news coming!</Container>
  )
}

export default Announcement