import React from "react";
import { Layout } from "react-admin";
import Menu from "../components/Menu";

const MyLayout = (props) => <Layout {...props} menu={Menu} />;

export default MyLayout;