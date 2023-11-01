import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";



function App() {
  const [alertVisible, setAlertVisibility] = useState(false);

  // let items = ['New York', 'Stockholm', 'Beijing', 'Tokyo', 'London'];
  // const handleSelectItem = (item:string) => {
    // console.log(item)
  // }

  return (
    <div>
      {alertVisible && <Alert onClose={()=>setAlertVisibility(false)}>My Alert</Alert>}
      <Button onClick={() => setAlertVisibility(true)}>My Button</Button>

      {/* <Alert>
        Hello World
        <p>Hi</p>
      </Alert> */}
      {/* <ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}/> */}
    </div>
  );
}

export default App;
