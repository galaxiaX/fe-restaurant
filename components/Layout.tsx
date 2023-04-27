import TopBar from "./TopBar";
import Footer from "./Footer";
import styled from "styled-components";

const LayoutEle = styled.div`
  min-height: 100vh;
  width: 100vw;
  padding-top: 110px;
  padding-bottom: 40px;
`;

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <LayoutEle>
      <TopBar />
      <main>{children}</main>
      <Footer />
    </LayoutEle>
  );
};

export default Layout;
