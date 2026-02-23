import "./App.css";
import Form from "./components/Form";
import Form2 from "./components/Form2";
import FocusInput from "./components/FocusInput";
import Click from "./components/Click";
import Box from "./components/Box";
import FetchData from "./components/FetchData";

function App() {
  return (
    <>
      <Box>
        <Form></Form>
      </Box>
      <Box>
        <Form2></Form2>
      </Box>
      <Box>
        <FocusInput></FocusInput>
        <Click></Click>
      </Box>
      <FetchData></FetchData>
    </>
  );
}

export default App;
