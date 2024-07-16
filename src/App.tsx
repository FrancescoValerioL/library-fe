import "./App.scss";
import LButton from "./assets/UI/LButton/Lbutton";
import LTable from "./assets/UI/LTable/LTable";
import LModal from "./assets/UI/LModal/Lmodal";
import LEditModal from "./assets/UI/LEditModal/LEditModal";
import { Key, useEffect, useState } from "react";

function App() {
  const columns = ["ID", "Author", "Title", "Year", "Pages", "Description", "Status", "Packed", "Actions"];
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(15);
  const [pageAmount, setPageAmount] = useState<number>(10);
  const [pages, setPages] = useState<JSX.Element[]>([]);
  const [selected, setSelected] = useState();
  const [rows, setRows] = useState<any[]>([]);

  const printData = (row: any) => {
    setSelected(row);
  };

  /* const rows = [
    {
      id: "1",
      author: "author1",
      title: "title1",
      description: "Long description",
      shortDescription: "Short Description",
      year: 2024,
      pages: 238,
      status: "Read",
      packed: false,
    },
    {
      id: "2",
      author: "author2",
      title: "title2",
      description: "Long description",
      shortDescription: "Short Description",
      year: 2024,
      pages: 238,
      status: "Not Read",
      packed: true,
    },
    {
      id: "3",
      author: "author3",
      title: "title3",
      description: "Long description",
      shortDescription: "Short Description",
      year: 2024,
      pages: 238,
      status: "Read",
      packed: true,
    },
    {
      id: "4",
      author: "author4",
      title: "title4",
      description: "Long description",
      shortDescription: "Short Description",
      year: 2024,
      pages: 238,
      status: "Not Read",
      packed: false,
    },
    {
      id: "5",
      author: "author5",
      title: "title5",
      description: "Long description",
      shortDescription: "Short Description",
      year: 2024,
      pages: 238,
      status: "Read",
      packed: false,
    },
    {
      id: "6",
      author: "author6",
      title: "title6",
      description: "Long description",
      shortDescription: "Short Description",
      year: 2024,
      pages: 238,
      status: "Read",
      packed: false,
    },
  ]; */

  useEffect(() => {
    fetch("http://localhost:8080/get?pageSize=" + pageSize + "&page=" + currentPage, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setRows(data.data);
      })
      .catch((error) => console.log(error));
  }, []);
  useEffect(() => {
    setPagination();
  }, [currentPage]);

  const setPagination = () => {
    setPages([]);
    for (let i = currentPage - 5; i < pageAmount; i++) {
      if (i < currentPage - 4 || i < 0) {
        continue;
      } else if (i === currentPage - 4) {
        setPages((_prevPages) => [
          ..._prevPages,
          <li key={i} className="page-item">
            <LButton
              variant="outline-primary"
              type="button"
              text="..."
              onClick={(e: any) => {
                changePage(1);
              }}
            />
          </li>,
        ]);
      } else if (i === currentPage + 4) {
        setPages((_prevPages) => [
          ..._prevPages,
          <li key={i} className="page-item">
            <LButton
              variant="outline-primary"
              type="button"
              text="..."
              onClick={(e: any) => {
                changePage(pageAmount);
              }}
            />
          </li>,
        ]);
        break;
      } else {
        setPages((_prevPages) => [
          ..._prevPages,
          <li key={i} className="page-item">
            <LButton
              variant={i === currentPage - 1 ? "primary" : "outline-primary"}
              type="button"
              text={i + 1}
              value={currentPage}
              onClick={(e: any) => {
                changePage(i + 1);
              }}
            />
          </li>,
        ]);
      }
    }
  };

  const changePage = (e: any) => {
    setCurrentPage(e);
  };
  const changePageSize = (e: any) => {
    setPageSize(e.target.value);
  };

  return (
    <div className="App">
      <LTable columns={columns}>
        {rows.length > 0 &&
          rows.map((row: any, idx: Key) => (
            <tr key={row._id} className={row.status === "Read" ? "table-success" : "table-warning"}>
              <td width={"5%"}>{row._id}</td>
              <td width={"20%"}>{row.author}</td>
              <td width={"20%"}>{row.title}</td>
              <td width={"5%"}>{row.year}</td>
              <td width={"5%"}>{row.pages}</td>
              <td width={"25%"}>{row.shortDescription}</td>
              <td width={"10%"}>{row.status}</td>
              <td width={"5%"}>
                {row.packed ? (
                  <i className="bi bi-check-circle text-success" style={{ fontSize: "1.5rem" }}></i>
                ) : (
                  <i className="bi bi-x-square text-danger" style={{ fontSize: "1.5rem" }}></i>
                )}
              </td>
              <td width={"15%"}>
                <LEditModal id="editModal" labelledby="editModalLabel" title={row.title} data={row.description} />
                <div className="btn-group" role="group" aria-label="Basic example">
                  <LButton
                    variant="outline-primary"
                    type="button"
                    toggle="modal"
                    target="#editModal"
                    icon="pencil-square"
                  />
                  <LButton
                    variant="outline-primary"
                    type="button"
                    toggle="modal"
                    target="#exampleModal"
                    icon="eye"
                    onClick={() => {
                      printData(row);
                    }}
                  />
                </div>
              </td>
            </tr>
          ))}
        <tr>
          <td></td>
          <td colSpan={5}>
            <nav aria-label="Page navigation example">
              <ul className="pagination">
                {pages.map((page) => page)}
                <li className="page-item">
                  <select
                    className="form-select"
                    aria-label="Default select example"
                    onChange={(e) => {
                      changePageSize(e);
                    }}
                  >
                    <option defaultValue={15}>15</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                  </select>
                </li>
              </ul>
            </nav>
          </td>
          <td>
            <LEditModal id="createModal" labelledby="createModalLabel" title={" New "} data={"row.description"} />
            <LButton variant="outline-primary" type="button" toggle="modal" target="#createModal" text="Create New" />
          </td>
          <td colSpan={5}></td>
        </tr>
      </LTable>
      <LModal id="exampleModal" labelledby="exampleModalLabel" data={selected} />
    </div>
  );
}

export default App;
