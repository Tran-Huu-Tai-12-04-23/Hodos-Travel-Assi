import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import React from "react";
import { TouchableOpacity } from "react-native";
import { styleGlobal } from "src/styles";

const filters = ["All", "Recent", "Archived", "Read"];
function Filter() {
  const { theme } = useTheme();
  const [active, setActive] = React.useState(0);
  return (
    <Row
      full
      between
      style={{
        alignItems: "center",
        ...styleGlobal.borderBottom,
        borderColor: theme.border,
        paddingHorizontal: normalize(20),
        padding: normalize(10),
      }}
    >
      {filters.map((item, index) => (
        <TouchableOpacity onPress={() => setActive(index)} key={index}>
          <TextDefault
            color={active === index ? theme.hightLight : theme.textSecond}
          >
            {item}
          </TextDefault>
        </TouchableOpacity>
      ))}
    </Row>
  );
}

export default Filter;
