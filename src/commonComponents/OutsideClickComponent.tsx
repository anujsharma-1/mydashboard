import { cloneElement } from "react";

export const OutsideClickComponent = (props: any) => {
  const clickHandler = () => {
    console.log("consoledd!!!");
  };
  window.addEventListener("click", clickHandler);

  return <>{cloneElement(props.children, {})}</>;
};
