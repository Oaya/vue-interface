<template>
  <div id="main-app" class="container">
    <div class="row justify-content-center">
      <appointments-list :appointments="appointments" />
    </div>
  </div>
</template>

<script>
// import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import AppointmentsList from "./components/AppointmentList";
import axios from "axios";

export default {
  name: "MainApp",
  data() {
    return {
      title: "Appointment List",
      appointments: [],
    };
  },
  components: {
    // FontAwesomeIcon,
    AppointmentsList,
  },
  mounted() {
    axios
      .get("./data/appointments.json")
      .then((res) => (this.appointments = res.data));
  },
};
</script>


