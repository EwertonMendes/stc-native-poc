import { StatusBar } from "expo-status-bar";
import {
  NativeBaseProvider,
  Button,
  Center,
  ScrollView,
  VStack,
  HStack,
  Box,
  Heading,
} from "native-base";
import theme from "./src/theme/theme";
import CustomButton from "./src/components/CustomButton";
import CustomInput from "./src/components/CustomInput";

const buttons = [
  {
    text: "Botão Comum modificado",
  },
  {
    text: "Outline e size small",
    variant: "outline",
    size: "sm",
  },
  {
    text: "Subtle",
    variant: "subtle",
  },
  {
    text: "Color pink",
    colorScheme: "pink",
  },
  {
    text: "Subtle pink",
    variant: "subtle",
    colorScheme: "pink",
  },
  {
    text: "Outilne pink",
    variant: "outline",
    colorScheme: "pink",
  },
  {
    text: "Ghost Secondary",
    variant: "ghost",
    colorScheme: "secondary",
  },
];

const inputs = [
  {
    placeholder: "Input redondo como padrão",
  },
  {
    placeholder: "Unstyled",
    variant: "unstyled",
  },
  {
    placeholder: "Placeholder menor",
    variant: "underlined",
    size: "xs",
  },
  {
    placeholder: "Placeholder maior",
    variant: "outline",
    size: "xl",
  },
  {
    placeholder: "Placeholder maior ainda",
    variant: "filled",
    size: "2xl",
  },
];

export default function App() {
  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar bg="primary.700" barStyle="light-content" />
      <Box safeAreaTop bg="primary.700" />
      <HStack
        bg="primary.700"
        justifyContent="center"
        alignItems="center"
        w="100%"
      >
        <VStack alignItems="center">
          <Heading color="white" pb={10} textAlign="center">
            POC - Styled Components com Native Base
          </Heading>
        </VStack>
      </HStack>
      <ScrollView>
        <Center flex={1} px="3" pb={10}>
          <Heading pb={2} pt={5}>
            Custom Buttons
          </Heading>
          <Button>Botão comum do native base</Button>
          {buttons.map((button) => (
            <CustomButton {...button} key={button.text} />
          ))}
          <Heading pb={2}>Custom Inputs</Heading>
          <VStack w={"100%"} space={6}>
            {inputs.map((input) => (
              <CustomInput {...input} key={input.placeholder} />
            ))}
          </VStack>
        </Center>
      </ScrollView>
    </NativeBaseProvider>
  );
}
