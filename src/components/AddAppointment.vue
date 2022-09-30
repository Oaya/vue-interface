<template>
  <div class="justify-center text-center m-3">
    <div class="bg-blue-700  text-white p-4">
      <font-awesome-icon icon="plus" class="mr-3 font-bold"></font-awesome-icon>Add Appointment
    </div>
    <div class="p-6">
      <form id="aptForm">
        <div class="mt-4">
          <div class="md:text-left">
            <label class="md:text-right" for="petName">Pet Name</label>
          </div>

          <div class="">
            <input type="text"
              class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="petName" id="petName" placeholder="Pet's Name">
          </div>
        </div>

        <div class="mt-4">
          <div class="md:text-left">
            <label for="ownerName">Pet Owner</label>
          </div>
          <div class="">
            <input type="text"
              class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="ownerName" placeholder="Owner's Name">
          </div>
        </div>

        <div class="mt-4">
          <div class="md:text-left">
            <label for="aptDate">Date</label>
          </div>
          <div class="mb-4">
            <input type="date"
              class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="aptDate">
          </div>
          <div class="md:text-left">
            <label class="" for="aptTime">Time</label>
          </div>

          <div class="mb-4">
            <input type="time"
              class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              name="aptTime" id="aptTime">
          </div>
        </div>

        <div class="">
          <div class="md:text-left">
            <label class="md:text-right" for="aptNotes">Apt. Notes</label>
          </div>
          <textarea
            class="mt-2 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            rows="4" cols="50" name="aptNotes" id="aptNotes" placeholder="Appointment Notes"></textarea>

        </div>

        <div class="mt-4">
          <button class="bg-blue-700  text-white d-block ml-auto w-full px-2 py-3 rounded shadow-md">Add
            Appointment</button>
        </div>
      </form>
    </div>
  </div>

</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "AddAppointment",
  components: { FontAwesomeIcon }


}
</script>

