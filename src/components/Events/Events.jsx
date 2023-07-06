import styles from "./Events.module.css";
import axios from "axios";
import { useEffect } from "react";

axios.defaults.baseURL = "https://api.brawlstars.com/v1";

function Events() {
  function getEvents() {
    axios
      .get("/events/rotation", {
        headers: {
          Accept: "application/json",
          Authorization: "Bearer " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiIsImtpZCI6IjI4YTMxOGY3LTAwMDAtYTFlYi03ZmExLTJjNzQzM2M2Y2NhNSJ9.eyJpc3MiOiJzdXBlcmNlbGwiLCJhdWQiOiJzdXBlcmNlbGw6Z2FtZWFwaSIsImp0aSI6IjZjYmE2ZWNmLWZiNTktNGVkNy1iZmZlLTc5YjVjYTc1ZDBlYSIsImlhdCI6MTY4ODY2NDc3OSwic3ViIjoiZGV2ZWxvcGVyL2FmMDNlOWMzLTM1NmQtOTQ4My04MzlhLTE3YTY3ZGY4YjA4OSIsInNjb3BlcyI6WyJicmF3bHN0YXJzIl0sImxpbWl0cyI6W3sidGllciI6ImRldmVsb3Blci9zaWx2ZXIiLCJ0eXBlIjoidGhyb3R0bGluZyJ9LHsiY2lkcnMiOlsiMTg4LjE5MS4zMy4xMzciLCIwLjAuMC4wIl0sInR5cGUiOiJjbGllbnQifV19.y8cM1Hhh3m60OmwoRzT6qn8U99duqSQTGIkhL65jqt_EpEHtQB3Ys0dM9Y-pGWdjOrC3_aXpDZr3vE-JasCcfg",
        }
      })
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.error(error);
      }); 
  }

  useEffect(() => {
    getEvents();
  }, []);

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.title}>Events</h2>
        <div className={styles.events}>
          <p className={styles.eventsTitle}>Current Events</p>
          <ul className={styles.eventsList}></ul>
        </div>
      </div>
    </section>
  );
}
export default Events;
