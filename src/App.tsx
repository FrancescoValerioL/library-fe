import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import LButton from "./assets/UI/LButton/Lbutton";
import LTable from "./assets/UI/LTable/LTable";

function App() {
  const columns = ["ID", "Author", "Title", "Description", "Actions"];
  const rows = [
    {
      id: "1",
      author: "author1",
      title: "title1",
      description: "Long description",
      shortDescription: "Short Description",
    },
    {
      id: "2",
      author: "author2",
      title: "title2",
      description: "Long description",
      shortDescription: "Short Description",
    },
  ];
  const clicked = () => {
    console.log("funziona");
  };
  return (
    <div className="App">
      <LButton variant="info" onClick={clicked} type="button" text="Hello!" />
      <LTable columns={columns} variant="secondary">
        {rows.map((row, idx) => (
          <tr key={idx}>
            <td>{row.id}</td>
            <td>{row.author}</td>
            <td>{row.title}</td>
            <td>{row.shortDescription}</td>
            <td>
              <div className="btn-group" role="group" aria-label="Basic example">
                <LButton variant="primary" type="button" text="Action1" toggle="modal" target="#exampleModal" />
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                  Launch demo modal
                </button>
                <LButton variant="primary" type="button" text="Action2" />
              </div>
            </td>
          </tr>
        ))}
      </LTable>
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="false"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Modal title
              </h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">...</div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
