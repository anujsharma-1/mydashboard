import { cloneElement, useEffect } from "react";

export const OutsideClickComponent = (props: any) => {
  useEffect(() => {
    document.addEventListener("click", clickHandler);
    return () => {
      document.removeEventListener("click", clickHandler);
    };
  });
  const clickHandler = (e: any) => {
    if (
      !(props.insideArea.current && props.insideArea.current.contains(e.target))
    ) {
      props.setShowDropdown(false);
    }
  };

  return <>{cloneElement(props.children, {})}</>;
};
