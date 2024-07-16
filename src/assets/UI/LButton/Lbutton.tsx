const LButton = (props: ButtonProps) => {
  return (
    <button
      type={props.type}
      className={"btn btn-" + props.variant}
      onClick={props.onClick}
      data-bs-toggle={props.toggle}
      data-bs-target={props.target}
    >
      {props.icon && <i className={"bi bi-" + props.icon}></i>}
      {props.text}
    </button>
  );
};
export default LButton;
interface ButtonProps {
  text?: string | number;
  variant?: string;
  type: "button" | "submit" | "reset" | undefined;
  onClick?: any;
  toggle?: string;
  target?: string;
  icon?: string;
  value?: any;
}
