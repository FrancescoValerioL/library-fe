import { ReactNode } from "react";
import "./LTable.scss";

const LTable = (props: TableProps, { onClickOrder }: any) => {
  return (
    <div className="tableFixHead">
      <table className={"table table-striped table-hover align-middle table-" + props.variant}>
        <thead>
          <tr>
            {props.columns.map((column, idx) => (
              <th key={idx}>
                <div className="d-flex align-items-center justify-content-between align-middle">
                  <div className="column-text">{column}</div>
                  {column !== "Description" && column !== "Actions" ? (
                    <div className="d-flex flex-column align-items-center">
                      <i className="bi bi-caret-up-fill" onClick={() => props.onClickOrder(column && column, "up")}></i>
                      <i
                        className="bi bi-caret-down-fill"
                        onClick={() => props.onClickOrder(column && column, "down")}
                      ></i>
                    </div>
                  ) : (
                    <div className="d-flex flex-column align-items-center">
                      <i className="bi bi-slash"></i>
                      <i className="bi bi-slash"></i>
                    </div>
                  )}
                </div>
              </th>
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
  onClickOrder(value: string, direction: string): any;
  children: ReactNode;
  columns: string[];
  variant?: string;
}
