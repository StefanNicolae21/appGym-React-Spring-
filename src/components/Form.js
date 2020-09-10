import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {
    event.preventDefault();
    let that = this;
    let params = new FormData(event.target);
    var object = {};
    params.forEach(function (value, key) {
      object[key] = value;
    });
    var data = JSON.stringify(object);
    fetch("http://localhost:8080/schedule-now", {
      method: "POST",
      body: data,
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then(function (res) {
        return res.text();
      })
      .then(function (text) {
        console.log(text);
      });
  }

  render() {
    return (
      <div className="contact-form">
        <h3 className="form-title">BOOK A CLASS</h3>
        <form action="#" onSubmit={this.handleSubmit}>
          <div className="form-box">
            <label className="form-data">Full Name</label>
          </div>
          <div className="form-box">
            <input
              className="form-inputs"
              onSubmit={this.handleSubmit}
              type="text"
              name="fullName"
            />
          </div>
          <div className="form-box">
            <label className="form-data">Date from:</label>
          </div>
          <div className="form-box">
            <input
              className="form-inputs"
              onSubmit={this.handleSubmit}
              type="date"
              name="dateFrom"
              min="2020-09-10"
            />
          </div>
          <div className="form-box">
            <label className="form-data">Hour:</label>
          </div>
          <div className="form-box">
            <input
              className="form-inputs"
              onSubmit={this.handleSubmit}
              type="time"
              name="hour"
              min="09:00"
              max="17:00"
            />
          </div>
          <div className="form-box">
            <label className="form-data">Phone number: </label>
          </div>
          <div className="form-box">
            <input
              className="form-inputs"
              onSubmit={this.handleSubmit}
              type="number"
              onkeypress="phoneno()"
              maxlength="10"
              placeholder="Ex: 0744111222"
              name="phoneNumber"
            />
          </div>

          <button className="form-btn" type="submit">
            Send booking
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
