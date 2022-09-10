import logo from "./logo.svg";
import "./App.css";
import InputForm from "./component/InputForm/InputForm";
import TableComponent from "./component/TableComponent/TableComponent";
import { StoreContextProvider } from "./Context/ContextProvider";

function App() {
  return (
    <div className="App">
      <StoreContextProvider>
<InputForm />
<TableComponent/>
      </StoreContextProvider>
      
      {/* <form
        action="form"
        name="name"
        className="form_container"
        id="form_container"
      >
        <div className="container">
          <div className="input_name">
            <label htmlFor="/">First Name</label>
            <input
              type="text"
              id="name_input"
              placeholder="Enter your first name"
              className="form-control"
            />
            <span className="input_name_error" id="input_name_error">
            </span>
            <label htmlFor="/">Last Name</label>
            <input
              type="text"
              id="name_input"
              placeholder="Enter your Last name"
              className="form-control"
            />
            <span className="input_name_error" id="input_name_error">
            </span>
          </div>
          <div className="password">
            
            <label htmlFor="/">Password</label>
            <input
              type="password"
              id="password_input"
              className="form-control"
            />
            <span className="input_password_error" id="input_password_error">
            </span>
          </div>
          <div id="email_id">
            <input
              type="text"
              id="email"
              placeholder="Enter your email address"
              className="form-control"
            />
          </div>
          <div id="date_of_birth">
            <input
              type="text"
              id="birth"
              placeholder="dateof birth"
              className="form-control"
            />
          </div>
          <div className="phone">
          <label htmlFor="/">Phone No.</label>
          <input type="number" id="phone" className="form-control" />
          <span className="input_phone_error" id="input_phone_error">
          </span>
          </div>
          <div className="adress">
            <input type="text" id="adress" className="form-control" />
          </div>
          <button id="submit_btn" className="btn">
            Submit{" "}
          </button>
        </div>
      </form> */}
    </div>
  );
}

export default App;
