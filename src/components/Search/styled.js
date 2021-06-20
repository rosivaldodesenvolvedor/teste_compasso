import styled from 'styled-components'

export const ContainerSearch = styled.div`
width: 100%;
display: flex;
align-content: center;
justify-content: center;
height: 100px;
background-color: blue;
`

export const ItemSearch = styled.div`
max-width: 60%;
height: 30%;
justify-content: center;
align-self: center;
background-color: red;
flex: 1;
`

export const InputSearch = styled.input`
width: 60%;
height: 100%;
font-size: 20px;
border: none;
border-radius: 4px;
&:focus {
  border: 3px solid #555;
}

`
