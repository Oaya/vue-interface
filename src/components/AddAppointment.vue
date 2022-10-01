<template>
  <div class="justify-center text-center m-3 ">
    <div class="block  rounded-lg shadow-lg bg-white ">

      <div class="bg-blue-700  text-white p-4 rounded-t-lg cursor-pointer" @click="hidepanel = !hidepanel">
        <font-awesome-icon icon="plus" class="mr-3 font-bold"></font-awesome-icon>Add Appointment
      </div>

      <div class="p-6" :class="{'hidden':hidepanel}">
        <form id="aptForm" @submit.prevent="requestAdd">
          <div class="mt-4">
            <div class="md:text-left">
              <label class="md:text-right" for="petName">Pet Name</label>
            </div>

            <div class="">
              <input type="text"
                class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="petName" id="petName" placeholder="Pet's Name" v-model="formData.petName">
            </div>
          </div>

          <div class="mt-4">
            <div class="md:text-left">
              <label for="ownerName">Pet Owner</label>
            </div>
            <div class="">
              <input type="text"
                class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="ownerName" placeholder="Owner's Name" v-model="formData.petOwner">
            </div>
          </div>

          <div class="mt-4">
            <div class="md:text-left">
              <label for="aptDate">Date</label>
            </div>
            <div class="mb-4">
              <input type="date"
                class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="aptDate" v-model="formData.aptDate">
            </div>
            <div class="md:text-left">
              <label class="" for="aptTime">Time</label>
            </div>

            <div class="mb-4">
              <input type="time"
                class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                name="aptTime" id="aptTime" v-model="formData.aptTime">
            </div>
          </div>

          <div class="">
            <div class="md:text-left">
              <label class="md:text-right" for="aptNotes">Apt. Notes</label>
            </div>
            <textarea
              class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              rows="4" cols="50" name="aptNotes" id="aptNotes" placeholder="Appointment Notes"
              v-model="formData.aptNotes"></textarea>

          </div>

          <div class="mt-4">
            <button class="bg-blue-700  text-white d-block ml-auto w-full px-2 py-3 rounded shadow-md">Add
              Appointment</button>
          </div>
        </form>
      </div>
    </div>
  </div>

</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "AddAppointment",
  data() {
    return {
      formData: [],
      hidepanel: true
    };
  },
  components: { FontAwesomeIcon },
  methods: {
    requestAdd: function () {
      this.formData = {
        petName: this.formData.petName,
        petOwner: this.formData.petOwner,
        aptDate: this.formData.aptDate + " " + this.formData.aptTime,
        aptNotes: this.formData.aptNotes
      }
      this.$emit("add", this.formData)
      this.formData = [];
      this.hidepanel = true
    }
  }


}
</script>

