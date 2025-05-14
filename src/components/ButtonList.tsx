import Button from "./Button";
import { BUTTON_LIST } from "../utils/constants";

const ButtonList = () => {
  return (
    <div className="flex whitespace-nowrap py-2">
      {BUTTON_LIST.map((buttonName, index) => <Button key={index} name={buttonName}/>)}
    </div>
  )
}

export default ButtonList
