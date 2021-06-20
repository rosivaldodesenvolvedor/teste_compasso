import styled from 'styled-components'

export const ContainerHeader = styled.div`
background-color: red;
width: 100%;
justify-content: flex-end;
height: 80px;
display: flex;
margin-bottom: 30px;
`
export const ItemHeader = styled.p`
height: 50px;
justify-content: center;
align-content: center;
font-size: 20px;
font-family: Arial, sans-serif;
margin-right: 30px;

&:hover {
    color: white;
    background-color:blue;
  }
`