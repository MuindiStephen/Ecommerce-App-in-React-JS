import styled from "styled-components"

const Component = styled.div `
height: 30px;
background-color: teal;
color: white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
`;

const Announcements = () => {
  return (
    <Component>Super deal ! Free shipping on orders above Ksh. 5000.</Component>
  )
}

export default Announcements