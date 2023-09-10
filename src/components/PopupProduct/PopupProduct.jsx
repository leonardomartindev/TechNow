import { useContext } from "react";
import PopupItem from "./PopupItem";
import { PopupContainer } from "./PopupProduct.style";
import AppContext from "../../context/AppContext";

export default function PopupProduct() {
  const { popupVisible, popupItem } = useContext(AppContext)
  return (
    <>
        {popupVisible ? <PopupContainer >{<PopupItem data={popupItem}/>}</PopupContainer> : null}
    </>

  )
}
