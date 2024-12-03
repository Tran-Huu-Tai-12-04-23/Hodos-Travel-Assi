import Row from "@components/Row";
import TextDefault from "@components/TextDefault";
import { useTheme } from "@context/themContext";
import { normalize } from "@helper/helpers";
import ArrowLeftIcon from "assets/svg/arrow-left-icon";
import ArrowRightIcon from "assets/svg/arrow-right-icon";
import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { styleGlobal } from "src/styles";

const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function CalendarSelectDayOfWeek() {
  const [currentWeek, setCurrentWeek] = useState(new Date());
  const { theme } = useTheme();
  const [selectedDay, setSelectedDay] = useState<string | null>(null);

  const handleDayPress = (day: string) => {
    setSelectedDay(day);
  };

  return (
    <Row
      direction="column"
      full
      start
      rowGap={20}
      style={[
        styles.container,
        {
          backgroundColor: theme.background,
          ...styleGlobal.shadow,
        },
      ]}
    >
      <Row full between style={{ alignItems: "center" }}>
        <TextDefault size={normalize(18)}>22 October</TextDefault>

        <Row end colGap={10} style={{ alignItems: "center" }}>
          <TouchableOpacity>
            <ArrowLeftIcon size={28} />
          </TouchableOpacity>
          <TouchableOpacity>
            <ArrowRightIcon size={28} />
          </TouchableOpacity>
        </Row>
      </Row>
      <Row full between>
        {daysOfWeek.map((day) => (
          <TouchableOpacity
            key={day}
            style={[
              styles.dayContainer,
              selectedDay === day && {
                backgroundColor: theme.hightLight,
              },
            ]}
            onPress={() => handleDayPress(day)}
          >
            <Row
              direction="column"
              center
              rowGap={5}
              colGap={20}
              style={[selectedDay === day && styles.selectedDayText] as any}
            >
              <Text
                style={[
                  { fontSize: normalize(12), marginBottom: 10 },
                  {
                    color:
                      selectedDay === day ? theme.background : theme.textSecond,
                  },
                ]}
              >
                {day.substring(0, 1)}
              </Text>
              <Text
                style={[
                  { fontSize: normalize(12), fontWeight: "bold" },
                  selectedDay === day && {
                    color: theme.background,
                  },
                ]}
              >
                22
              </Text>
            </Row>
          </TouchableOpacity>
        ))}
      </Row>
    </Row>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    padding: normalize(10),
    borderRadius: normalize(10),
  },
  dayContainer: {
    padding: 10,
    borderRadius: normalize(10),
  },

  selectedDayText: {
    color: "#fff",
  },
});

export default CalendarSelectDayOfWeek;
