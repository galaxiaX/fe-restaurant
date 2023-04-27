import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 1rem;
  text-align: center;
  width: 100%;
  position: fixed;
  bottom: 0;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <p>&copy; 2023 by galaxiaX</p>
    </FooterContainer>
  );
};

export default Footer;
