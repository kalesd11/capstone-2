import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  const [Id, setId] = useState("");
  let link  = `https://cp-8esh.onrender.com/subscribers/${Id}`
  return (
    <div className="container text-center">
      <h1 className="shadow mb-2 text-danger pb-1">You-Tube Subscribers</h1>

      <div className="d-flex justify-content-around mt-5">
        <a className="btn btn-success" href="https://cp-8esh.onrender.com/subscribers" target="_blank">Subscribers</a>

        <a
          className="btn btn-success"
          href="https://cp-8esh.onrender.com/subscribers/names" target="_blank"
        >
          Subscribers-By-Name
        </a>
      </div>

      <div className="mt-3">
        <form>
          <input
            type="text"
            className="form-control"
            value={Id}
            onChange={(e) => {
              setId(e.target.value);
            }}
            name="subscriberId"
            placeholder="Enter User ID..."
          />
          <a className="btn btn-info mt-2" href={link} target="_blank">
            Subscribers-By-Id
          </a>
        </form>
      </div>
      <div id="result" className="mt-2"></div>
    </div>
  );
}

export default App;
