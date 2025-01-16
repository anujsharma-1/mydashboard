export const DropdownList = (props: any) => {
  return (
    <>
      {props.showDropdown && (
        <div className={props.CSSFile.dropdown}>
          {props.list.map((item: any, index:number) => {
            return (
              <>
                <div onClick={item.handler}>{item.key}</div>
                {index !== (props.list.length -1) && <hr />}
              </>
            );
          })}
        </div>
      )}
    </>
  );
};
