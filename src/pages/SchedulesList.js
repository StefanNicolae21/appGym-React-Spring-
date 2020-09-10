import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SchedulesList.css";

class SchedulesList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contactsList: [],
    };
  }

  componentDidMount() {
    let that = this;
    fetch("http://localhost:8080/schedules-list")
      .then(function (res) {
        return res.json();
      })
      .then(function (data) {
        that.setState({
          contactsList: data,
        });
      });
  }

  render() {
    return (
      <div>
        <Header />
        <div className="title">FullName | Date From | Hour | Phone Number</div>
        <div>
          {
          this.state.contactsList.length === 0
            ? "Lista de programari este goala...."
            : this.state.contactsList.map(function (contact, index) {
                return (
                  <div key={index} className="schedule-list">
                    <label className="name">{contact.fullName}</label>
                    <label className="date">{"| " + contact.dateFrom}</label>
                    <label className="hour">{"| " + contact.hour}</label>
                    <label className="phone">{"| " + contact.phoneNumber}
                    </label>
                  </div>
                );
              })}
        </div>
        <Footer />
      </div>
    );
  }
}
export default SchedulesList;
