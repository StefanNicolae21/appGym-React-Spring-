import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = { error: "", success: "" };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toMinutes(hhmm) {
    const [h, m] = hhmm.split(":").map(Number);
    return h * 60 + m;
  }

  handleSubmit(event) {
    event.preventDefault();

    // ia referința la formular ACUM (ca să nu fie nul în then)
    const form = event.currentTarget;

    this.setState({ error: "", success: "" });

    // strânge valorile din formular
    const params = new FormData(form);
    const object = {};
    params.forEach((value, key) => (object[key] = value));

    // Validări ore
    const start = object.startHour;
    const end = object.endHour;

    if (!start || !end) {
      this.setState({ error: "Completează ambele ore." });
      return;
    }

    const s = this.toMinutes(start);
    const e = this.toMinutes(end);

    if (s < this.toMinutes("09:00") || e > this.toMinutes("17:00")) {
      this.setState({ error: "Intervalul trebuie să fie între 09:00 și 17:00." });
      return;
    }

    if (e <= s) {
      this.setState({ error: "Ora de sfârșit trebuie să fie după ora de început." });
      return;
    }

    // Trimite la backend
    const data = JSON.stringify(object);
    fetch("http://localhost:8080/schedule-now", {
      method: "POST",
      body: data,
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.text())
      .then((text) => {
        if (text === "success") {
          this.setState({ success: "Booking added successfully!", error: "" });
          form.reset(); // <- folosim referința, nu event.target
          // opțional: redirect după 800ms
           setTimeout(() => (window.location.href = "/schedules-list"), 1500);
        } else {
          this.setState({ error: text || "Eroare la salvare.", success: "" });
        }
      })
      .catch(() => this.setState({ error: "Eroare de rețea.", success: "" }));
  }

  render() {
    return (
      <div className="contact-form">
        <h3 className="form-title">Schedule your Gym</h3>

        <form onSubmit={this.handleSubmit}>
          {/* Full name */}
          <div className="form-box">
            <label className="form-data">Full Name:</label>
            <input className="form-inputs" type="text" name="fullName" required />
          </div>

          {/* Date */}
          <div className="form-box">
            <label className="form-data">Date:</label>
            <input className="form-inputs" type="date" name="dateFrom" min="2020-09-10" required />
          </div>

          {/* Start hour */}
          <div className="form-box">
            <label className="form-data">Start hour:</label>
            <input
              className="form-inputs"
              type="time"
              name="startHour"
              min="09:00"
              max="17:00"
              step="60"
              required
            />
          </div>

          {/* End hour */}
          <div className="form-box">
            <label className="form-data">End hour:</label>
            <input
              className="form-inputs"
              type="time"
              name="endHour"
              min="09:00"
              max="17:00"
              step="60"
              required
            />
          </div>

          {/* Phone */}
          <div className="form-box">
            <label className="form-data">Phone number:</label>
            <input
              className="form-inputs"
              type="text"
              name="phoneNumber"
              maxLength="10"
              placeholder="Ex: 0744111222"
              pattern="\d{10}"
              title="Introduce doar 10 cifre."
              required
            />
          </div>

          <button className="form-btn" type="submit">Send booking</button>

          {this.state.error && <div className="form-error">{this.state.error}</div>}
          {this.state.success && <div className="form-success">{this.state.success}</div>}
        </form>
      </div>
    );
  }
}

export default Form;
