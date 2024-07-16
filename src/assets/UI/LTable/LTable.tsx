import { ReactNode } from "react";

const LTable = (props: TableProps) => {
  return (
    <table className={"table table-striped table-hover table-bordered align-middle table-" + props.variant}>
      <thead>
        <tr>
          {props.columns.map((column, idx) => (
            <th key={idx}>{column}</th>
          ))}
        </tr>
      </thead>
      <tbody>{props.children}</tbody>
    </table>
  );
};
export default LTable;

interface TableProps {
  children: ReactNode;
  columns: string[];
  rows?: any[];
  variant?: string;
}
