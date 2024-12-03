import { useTheme } from "@context/themContext";
import { Feather } from "@expo/vector-icons";
import { normalize } from "@helper/helpers";
import React, { useState } from "react";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { styleGlobal } from "src/styles";
import Row from "./Row";
import TextDefault from "./TextDefault";

type InputProps = {
  onChangeText: (text: string) => void;
  text: string;
  label?: string;
  placeholder?: string;
  leftIcon?: React.ReactNode;
  multiple?: boolean;
  isPassword?: boolean;
  error?: string;
};
const Input = ({
  onChangeText,
  text,
  label,
  placeholder,
  leftIcon,
  multiple,
  isPassword = false,
  error,
}: InputProps) => {
  const { theme } = useTheme();
  const [isFocus, setIsFocus] = useState(false);
  const [isPass, setIsPass] = useState(true);
  return (
    <Row
      full
      direction="column"
      start
      rowGap={5}
      onTouchStart={(e) => e.stopPropagation()}
    >
      {label && (
        <TextDefault style={[styles.label, { color: theme.textSecond }]}>
          {label}
        </TextDefault>
      )}

      <Row
        full
        start
        style={{
          alignItems: "center",
          position: "relative",
        }}
      >
        {leftIcon && (
          <View
            style={{
              position: "absolute",
              left: normalize(14),
              bottom: normalize(14),
              zIndex: 1000,
            }}
          >
            {leftIcon}
          </View>
        )}
        <TextInput
          secureTextEntry={isPassword && isPass}
          multiline={multiple}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          autoCapitalize="none"
          keyboardType="default"
          placeholder={placeholder}
          placeholderTextColor={theme.textSecond}
          style={[
            styles.input,
            styleGlobal.border,
            {
              width: "100%",
              backgroundColor: theme.inputBackground,
              borderColor: isFocus ? theme.primary : "transparent",
              borderRadius: normalize(14),
              padding: normalize(15),
              paddingLeft: leftIcon ? normalize(35) : "auto",
            },
          ]}
          onChangeText={onChangeText}
          value={text}
        />
      </Row>

      {isPassword && (
        <TouchableOpacity
          style={styles.iconShowPass}
          onPress={() => setIsPass(!isPass)}
        >
          <Feather
            name={!isPass ? "eye" : "eye-off"}
            size={18}
            color={theme.textSecond}
          />
        </TouchableOpacity>
      )}

      {error && (
        <TextDefault style={{ color: "red", fontSize: normalize(12) }}>
          {error}
        </TextDefault>
      )}
    </Row>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 5,
  },
  label: {
    fontSize: 12,
    fontWeight: "bold",
  },
  iconShowPass: {
    position: "absolute",
    right: normalize(15),
    top: normalize(15),
  },
  borderBottom: {
    borderBottomWidth: 1,
    borderStyle: "solid",
  },
});

export { Input };
