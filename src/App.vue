<template>
  <div id="main-app" class="container mx-auto">
    <div class="justify-center">
      <add-appointment />
      <appointments-list :appointments="appointments" @remove="removeItem" @edit="editItem" />
    </div>
  </div>
</template>

<script>
import AddAppointment from "./components/AddAppointment";
import AppointmentsList from "./components/AppointmentList";
import _ from "lodash";
import axios from "axios";


export default {
  name: "MainApp",
  data() {
    return {
      appointments: [],
      aptIndex: 0
    };
  },
  components: {
    AddAppointment,
    AppointmentsList
  },
  mounted() {
    axios
      .get("./data/appointments.json")
      .then((res) => (this.appointments = res.data.map(item => {
        item.aptId = this.aptIndex;
        this.aptIndex++;
        return item
      })));
  },
  methods: {
    removeItem: function (apt) {
      this.appointments = _.without(this.appointments, apt);
    },
    editItem: function (id, field, text) {
      const aptIndex = _.findIndex(this.appointments, {
        aptId: id
      });
      this.appointments[aptIndex][field] = text;
    }
  },
};
</script>


