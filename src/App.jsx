import { useState } from "react";
import LightOff from "./views/LightOff/LightOff";
import LightOn from "./views/LightOn/LightOn";

export default function App() {

const [lightSwitch, setLightSwitch] = useState(false)

  return <>
  {lightSwitch
    ? <LightOff setLightSwitch={setLightSwitch} />
    : <LightOn setLightSwitch={setLightSwitch}/>
  }
  </>;
}
