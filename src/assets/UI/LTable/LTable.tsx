import { ReactNode } from "react";

const LTable = (props: TableProps) => {
  return (
    <div className="table-responsive">
      <table className={"table table-striped table-hover table-" + props.variant}>
        <thead>
          <tr>
            {props.columns.map((column, idx) => (
              <th key={idx}>{column}</th>
            ))}
          </tr>
        </thead>
        <tbody>{props.children}</tbody>
      </table>
    </div>
  );
};
export default LTable;

interface TableProps {
  children: ReactNode;
  columns: string[];
  rows?: any[];
  variant?: string;
}
