import { createContext, useContext } from "react";
import {
  Text,
  TextProps,
  TouchableOpacity,
  ActivityIndicator,
  TouchableOpacityProps,
  StyleSheet,
} from "react-native";
import clsx from "clsx";

type Variants = "primary" | "secondary";

type ButtonProps = TouchableOpacityProps & {
  variant?: Variants;
  isLoading?: boolean;
};

const ThemeContext = createContext<{ variant?: Variants }>({});

const styles = StyleSheet.create({
  buttonBase: {
    height: 44,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    paddingHorizontal: 8,
  },
  primary: {
    backgroundColor: "#84cc16", // lime-300
  },
  secondary: {
    backgroundColor: "#27272a", // zinc-800
  },
  textPrimary: {
    color: "#365314", // lime-950
  },
  textSecondary: {
    color: "#e4e4e7", // zinc-200
  },
});

function Button({
  variant = "primary",
  children,
  isLoading,
  style,
  ...rest
}: ButtonProps) {
  return (
    <TouchableOpacity
      style={[
        styles.buttonBase,
        variant === "primary" ? styles.primary : styles.secondary,
        style,
      ]}
      activeOpacity={0.7}
      disabled={isLoading}
      {...rest}
    >
      <ThemeContext.Provider value={{ variant }}>
        {isLoading ? (
          <ActivityIndicator color={variant === "primary" ? "#365314" : "#e4e4e7"} />
        ) : (
          children
        )}
      </ThemeContext.Provider>
    </TouchableOpacity>
  );
}

function Title({ children }: TextProps) {
  const { variant } = useContext(ThemeContext)

  return (
    <Text
      className={clsx("text-base font-semibold", {
        "text-lime-950": variant === "primary",
        "text-zinc-200": variant === "secondary",
      })}
    >
      {children}
    </Text>
  )
}

Button.Title = Title;

export { Button };
