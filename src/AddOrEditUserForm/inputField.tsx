export const InputField = (props:any) => {
  return (
    <>
      <div style={{ marginBottom: "1rem" }}>
        <label
          style={{ display: "block", marginBottom: "0.5rem" }}
        >
          {props.label}:
        </label>
        <input
          id={props.id}
          name={props.name}
          type={props.type}
          value={props.value}
          onChange={props.onChange}
          style={{ width: "100%", padding: "0.5rem" }}
        />
      </div>
    </>
  );
};
