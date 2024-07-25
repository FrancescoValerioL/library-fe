import "./App.scss";
import LButton from "./assets/UI/LButton/Lbutton";
import LTable from "./assets/UI/LTable/LTable";
import LModal from "./assets/UI/LModal/Lmodal";
import LEditModal from "./assets/UI/LEditModal/LEditModal";
import { Key, useEffect, useRef, useState } from "react";
import LDeleteModal from "./assets/UI/LDeleteModal/LDeleteModal";
import { Bounce, Slide, ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as Toast from "./services/Toast";

function App() {
  const columns = ["ID", "Author", "Title", "Year", "Pages", "Description", "Status", "Packed", "Actions"];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);
  const [pageAmount, setPageAmount] = useState<number>(1);
  const [pages, setPages] = useState<JSX.Element[]>([]);
  const [selected, setSelected] = useState<any>();
  const [rows, setRows] = useState<any[]>([]);
  const [total, setTotal] = useState<number>(0);
  const toastId = useRef<any>();

  const selectRow = (row: any) => {
    setSelected(row);
  };

  const notifySuccess = () => (toastId.current = Toast.defaultToast("Loading Data", "light", 3000));

  const notifyError = () => (toastId.current = Toast.errorToast("Success", "colored", 3000));

  const retrieveData = (value: string, direction: string) => {
    notifySuccess();
    // Modifica: Usa template literals per costruire l'URL
    fetch(`http://localhost:8080/get?pageSize=${pageSize}&page=${currentPage}&value=${value}&direction=${direction}`, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setRows(data.data);
        setPageAmount(data.pageAmount);
        setTotal(data.length);
        // Modifica: Chiama setPagination con il nuovo valore di pageAmount
        setPagination(data.pageAmount);
        toast.dismiss(toastId.current);
      })
      .catch((error) => {
        toast.dismiss(toastId.current);
        notifyError();
      });
  };

  useEffect(() => {
    retrieveData("_id", "down");
  }, [currentPage, pageSize]); // Modifica: Rimuovi useEffect duplicato, combina tutto in uno

  const setPagination = (pageAmount: number) => {
    const newPages = []; // Modifica: Usa un array temporaneo per accumulare le pagine
    for (let i = currentPage - 5; i < pageAmount; i++) {
      if (i < currentPage - 4 || i < 0) {
        continue;
      } else if (i === currentPage - 4) {
        newPages.push(
          <li key={i} className="page-item">
            <LButton
              variant="outline-primary"
              type="button"
              text="..."
              onClick={() => changePage(1)} // Modifica: Correggi onClick
            />
          </li>
        );
      } else if (i === currentPage + 4) {
        newPages.push(
          <li key={i} className="page-item">
            <LButton
              variant="outline-primary"
              type="button"
              text="..."
              onClick={() => changePage(pageAmount)} // Modifica: Correggi onClick
            />
          </li>
        );
        break;
      } else {
        newPages.push(
          <li key={i} className="page-item">
            <LButton
              variant={i === currentPage - 1 ? "primary" : "outline-primary"}
              type="button"
              text={i + 1}
              onClick={() => changePage(i + 1)} // Modifica: Correggi onClick
            />
          </li>
        );
      }
    }
    setPages(newPages); // Modifica: Imposta lo stato una volta sola
  };

  const changePage = (page: number) => {
    setCurrentPage(page); // Modifica: Usa il parametro page direttamente
  };

  const changePageSize = (e: any) => {
    setPageSize(Number(e.target.value)); // Modifica: Assicurati che il valore sia un numero
  };

  const test = (value: string, direction: string) => {
    retrieveData(value, direction);
  };

  return (
    <div className="App" style={{ overflowX: "scroll" }}>
      <LTable
        columns={columns}
        onClickOrder={(value: string, direction: string) => {
          test(value, direction);
        }}
      >
        <tbody>
          {rows.length > 0 &&
            rows.map((row: any, idx: Key) => (
              <tr key={row._id} className={row.status === true ? "table-success" : "table-warning"}>
                <td width={"5%"}>{row._id}</td>
                <td width={"20%"}>{row.author}</td>
                <td width={"20%"}>{row.title}</td>
                <td width={"5%"}>{row.year}</td>
                <td width={"5%"}>{row.pages}</td>
                <td width={"20%"}>{row.shortDescription}</td>
                <td width={"10%"}>{row.status === true ? "Read" : "Not Read"}</td>
                <td width={"5%"}>
                  {row.packed === true ? (
                    <i className="bi bi-check-circle text-success" style={{ fontSize: "1.5rem" }}></i>
                  ) : (
                    <i className="bi bi-x-square text-danger" style={{ fontSize: "1.5rem" }}></i>
                  )}
                </td>
                <td width={"20%"}>
                  <div className="btn-group" role="group" aria-label="Basic example">
                    <LButton
                      variant="outline-primary"
                      type="button"
                      toggle="modal"
                      target="#createModal"
                      icon="pencil-square"
                      onClick={() => {
                        selectRow(row);
                      }}
                    />
                    <LButton
                      variant="outline-primary"
                      type="button"
                      toggle="modal"
                      target="#exampleModal"
                      icon="eye"
                      onClick={() => {
                        selectRow(row);
                      }}
                    />
                    <LButton
                      variant="outline-danger"
                      type="button"
                      toggle="modal"
                      target="#deleteModal"
                      icon="trash"
                      onClick={() => {
                        selectRow(row);
                      }}
                    />
                  </div>
                </td>
              </tr>
            ))}
        </tbody>
      </LTable>
      <div className="container-fluid">
        <div className="row align-items-start justify-content-start">
          <div className="col-2">Total: {total}</div>
          <div className="col-10">
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {pages.map((page) => page)}
                <li className="page-item">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={changePageSize} // Modifica: Rimuovi arrow function non necessaria
                  >
                    <option defaultValue={15}>15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <LEditModal
        id="createModal"
        labelledby="createModalLabel"
        data={selected}
        onConfirm={() => retrieveData("_id", "down")}
      />
      <LModal id="exampleModal" labelledby="exampleModalLabel" data={selected} />
      <LDeleteModal
        id="deleteModal"
        labelledby="deleteModalLabel"
        _id={selected?._id}
        onConfirm={() => retrieveData("_id", "down")}
      />
    </div>
  );
}

export default App;
