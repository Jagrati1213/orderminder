import { Layout } from "antd";
import { Content, Footer, Header } from "antd/es/layout/layout";
import { Navigation } from "./Navigation";
import { SiderContainer } from "./SiderContainer";
import { Outlet } from "react-router-dom";
import Style from "../styles/_MainContainer.module.scss";

export default function DashBoard() {
  return (
    <Layout className={Style.main_container}>
      <Header>
        <Navigation />
      </Header>
      <Layout>
        <SiderContainer />
        <Content>
          <Outlet />
        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
}
