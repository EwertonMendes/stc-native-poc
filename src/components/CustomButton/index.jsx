import { MyButton } from "./styles";

export default function CustomButton({ text, ...rest }) {
  return (
      <MyButton {...rest}>
        {text}
      </MyButton>
  );
}
