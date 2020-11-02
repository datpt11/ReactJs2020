import "./App.css";
import ClassClick from "./components/ClassClick";
import Counter from "./components/Counter";
import CounterClick from "./components/CounterClick";
import CounterHover from "./components/CounterHover";
import EventBind from "./components/EventBind";
import Form from "./components/Form";
import FunctionClick from "./components/FunctionClick";
import Greet from "./components/Greet";

import InputFocus from "./components/InputFocus";
import LifecycleA from "./components/LifecycleA";
import Message from "./components/Message";
import Parent from "./components/Parent";
import RefDemo from "./components/RefDemo";

function App() {
  const customers = [
    {
      id: 0,
      name: "John",
      status: true,
    },
    {
      id: 1,
      name: "Mike",
      status: false,
    },
    {
      id: 2,
      name: "Vincent",
      status: false,
    },
  ];
  const greetEl = customers.map((customer) => {
    let result = "";
    if (customer.status) {
      result = <Greet key={customer.id}>{customer.name}</Greet>;
    }
    return result;
  });
  return (
    <div className="App">
      {/* {greetEl}
      <Message />
      <Counter />
      <FunctionClick />
      <ClassClick />
      <EventBind /> */}
      {/* <Form /> */}
      {/* <LifecycleA /> */}
      {/* <Parent /> */}
      {/* <RefDemo /> */}
      {/* <InputFocus /> */}
      <CounterClick name="Dat" />
      <CounterHover />
    </div>
  );
}

export default App;
