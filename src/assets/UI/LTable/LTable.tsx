import { ReactNode } from "react";
import "./LTable.scss";

const LTable = (props: TableProps) => {
  return (
    <div className="tableFixHead">
      <table className={"table table-striped table-hover table-bordered align-middle table-" + props.variant}>
        <thead>
          <tr>
            {props.columns.map((column, idx) => (
              <th key={idx}>{column}</th>
            ))}
          </tr>
        </thead>
        {props.children}
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
