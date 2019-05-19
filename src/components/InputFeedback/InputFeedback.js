import React from "react";
import { Text } from "native-base";

const InputFeedback = props => {
  const { type, children } = props;

  if (type.toLowerCase() === "error") color = "#d9534f";
  else if (type.toLowerCase() === "success") color = "#5cb85c";
  else if (type.toLowerCase() === "warning") color = "#f0ad4e";
  else color = "#000";

  return (
    <Text style={{ marginTop: 10, marginLeft: 15, color: color, fontSize: 15 }}>
      {children}
    </Text>
  );
};

export default InputFeedback;
