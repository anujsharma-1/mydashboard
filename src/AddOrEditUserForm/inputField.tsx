interface IInputField {
  value:string;
  label:string;
  type:string;
  fieldName:string;
  id:string,
  name:string;
  onChange:(val:string)=>void;
  options:string[];
}
export const InputField = (props: any) => {
  return (
    <>
        <label>
          {props.label}{props.required && (<>*</>)} :
        </label>

        {props.type !== "option" && (
          <input
            id={props.id}
            name={props.name}
            type={props.type}
            value={props.value}
            onChange={props.onChange}
            style={{ width: "100%", padding: "0.5rem" }}
          />
        )}
        {props.type === "option" && (
          <select
            id={props.id}
            value={props.value}
            name={props.name}
            onChange={props.onChange}
            style={{width: "100%", padding: "0.5rem"}}
          >
            <option value="" disabled>
              Choose an option
            </option>
            {
              props.options.map((item:any, index:number)=>{
                return <option key={index} value = {item}>{item}</option>
              })
            }
          </select>
        )}
        <p>{props.error}</p>
    </>
  );
};
