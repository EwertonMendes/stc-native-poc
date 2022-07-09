import { MyInput } from "./styles";

export default function CustomInput({variant="rounded", ...props}) {
  return (
      <MyInput variant={variant} { ...props }/>
  );
}
