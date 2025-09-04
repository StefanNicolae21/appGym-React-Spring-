import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SchedulesList.css";

class SchedulesList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contactsList: [],
      loading: true,
      error: "",
    };
  }

  componentDidMount() {
    fetch("http://localhost:8080/schedules-list")
      .then((res) => {
        if (!res.ok) throw new Error("Nu s-a putut încărca lista.");
        return res.json();
      })
      .then((data) => {
        this.setState({ contactsList: Array.isArray(data) ? data : [], loading: false });
      })
      .catch((err) => {
        this.setState({ error: err.message || "Eroare la încărcare.", loading: false });
      });
  }

  formatDate(d) {
    if (!d) return "-";
    // Acceptă ISO sau yyyy-mm-dd
    try {
      const date = d.length <= 10 ? new Date(`${d}T00:00:00`) : new Date(d);
      if (isNaN(date)) return d;
      return date.toLocaleDateString("ro-RO", { year: "numeric", month: "2-digit", day: "2-digit" });
    } catch {
      return d;
    }
  }

  render() {
    const { contactsList, loading, error } = this.state;

    return (
      <div>
        <Header />

        <div className="sched-page">
          <h2 className="sched-title">Schedules List</h2>

          {loading && <div className="sched-state">Se încarcă…</div>}
          {error && !loading && <div className="sched-error">{error}</div>}

          {!loading && !error && contactsList.length === 0 && (
            <div className="sched-state">Lista de programări este goală.</div>
          )}

          {!loading && !error && contactsList.length > 0 && (
            <div className="sched-table-wrap">
              <table className="sched-table">
                <thead>
                  <tr>
                    <th>Full Name</th>
                    <th>Date From</th>
                    <th>Start Hour</th>
                    <th>End Hour</th>
                    <th>Phone Number</th>
                  </tr>
                </thead>
                <tbody>
                  {contactsList.map((c, idx) => {
                    // suportă ambele variante: hour start/end din backend
                    const start = c.startHour || c.hourStart || c.hourStartStr || c.hour || "-";
                    const end = c.endHour || c.hourEnd || c.hourEndStr || c.hour || "-";
                    return (
                      <tr key={c.id || `${c.fullName}-${c.dateFrom}-${idx}`}>
                        <td>{c.fullName || "-"}</td>
                        <td>{this.formatDate(c.dateFrom)}</td>
                        <td>{start}</td>
                        <td>{end}</td>
                        <td>{c.phoneNumber || "-"}</td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

        <Footer />
      </div>
    );
  }
}

export default SchedulesList;

