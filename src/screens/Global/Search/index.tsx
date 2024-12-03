import Row from "@components/Row";
import Separator from "@components/Separator";
import { normalize } from "@helper/helpers";
import MainLayout from "@layout/MainLayout";
import React from "react";
import LocationView from "./Components/LocationView";
import Header from "./Header";

function SearchScreen() {
  return (
    <MainLayout>
      <Separator height={normalize(50)} />
      <Row
        full
        direction="column"
        style={{
          paddingHorizontal: normalize(20),
        }}
      >
        <Header />
        <LocationView />
      </Row>
    </MainLayout>
  );
}

export default SearchScreen;
