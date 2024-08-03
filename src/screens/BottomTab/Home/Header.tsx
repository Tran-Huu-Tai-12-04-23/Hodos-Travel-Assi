import Avatar from "@components/Avatar";
import Row from "@components/Row";
import { openDrawer } from "@navigation/NavigationService";
import { localImages } from "assets/localImage";
import MenuIcon from "assets/svg/MenuIcon";
import React from "react";
import { TouchableOpacity } from "react-native";

function Header() {
  return (
    <Row full between>
      <TouchableOpacity onPress={openDrawer}>
        <MenuIcon />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => {
          // openDrawer()
        }}
      >
        <Avatar link={localImages().avatarDefault} />
      </TouchableOpacity>
    </Row>
  );
}

export default Header;
