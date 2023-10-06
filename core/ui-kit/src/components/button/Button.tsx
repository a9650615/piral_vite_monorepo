import React from "react";

interface ButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  style?: React.HTMLAttributes<HTMLButtonElement>["style"];
}

const Button: React.FC<ButtonProps> = ({ children, style, ...props }) => {
  return (
    <button type="button" {...props} style={{ ...styles.button, ...style }}>
      <span style={styles.text}>{children}</span>
    </button>
  );
};

const styles = {
  button: {
    backgroundColor: "#007AFF",
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 16,
    alignItems: "center",
  },
  text: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
};

export default Button;
