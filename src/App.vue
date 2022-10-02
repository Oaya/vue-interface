<template>
  <div id="main-app" class="container mx-auto">
    <div class="justify-center">
      <add-appointment @add="addItem" />
      <search-appointment @searchRecords="searchAppointment" />
      <appointments-list :appointments="searchedApts" @remove="removeItem" @edit="editItem" />

    </div>
  </div>
</template>

<script>
import AddAppointment from "./components/AddAppointment";
import AppointmentsList from "./components/AppointmentList";
import SearchAppointment from "./components/SearchAppointment";
import _ from "lodash";
import axios from "axios";


export default {
  name: "MainApp",
  data() {
    return {
      appointments: [],
      aptIndex: 0,
      searchTerms: ''
    };
  },
  components: {
    AddAppointment,
    AppointmentsList,
    SearchAppointment
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
  computed: {
    searchedApts: function () {
      return this.appointments.filter(item => {
        return (
          item.petName.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.petOwner.toLowerCase().match(this.searchTerms.toLowerCase()) ||
          item.aptNotes.toLowerCase().match(this.searchTerms.toLowerCase())
        )
      })
    }
  },
  methods: {
    searchAppointment: function (terms) {
      this.searchTerms = terms;
    },
    removeItem: function (apt) {
      this.appointments = _.without(this.appointments, apt);
    },
    editItem: function (id, field, text) {
      const aptIndex = _.findIndex(this.appointments, {
        aptId: id
      });
      this.appointments[aptIndex][field] = text;
    },
    addItem: function (item) {
      item.id = this.aptIndex
      this.aptIndex++

      this.appointments.push(item)
      console.log(this.appointments)

    }
  },
};
</script>


