import React from "react";
import Layout from "../Layout";
import Form from "../../components/Form/Form";
import Weather from "../../components/Weather/Weather"

const Home = () => {
  return (
    <Layout>
      <Form />
      <Weather />
    </Layout>
  );
};

export default Home;
