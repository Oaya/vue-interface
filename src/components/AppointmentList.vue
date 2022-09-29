<template>
  <div class="grid grid-cols-12 gap-4 m-4">
    <div class="col-span-12">
      <div class="list-group-item d-flex align-item-start py-4 border-b-2" v-for="item in appointments"
        :key="item.aptIndex">
        <div class="flex-column">
          <div class="flex-row">
            <button @click="$emit('remove', item)" class="
                bg-red-500
                hover:bg-red-800
                text-white
                font-bold
                py-2
                px-3
                mr-2
                rounded
              ">
              <font-awesome-icon icon="trash"></font-awesome-icon>
            </button>
            <span contenteditable @blur="$emit('edit', item.aptId, 'petName', $event.target.innerText )"
              class="h4 text-blue-600 text-3xl">{{ item.petName }}</span>
            <span class="float-right">{{ formattedDate(item.aptDate) }}</span>
          </div>
          <div>
            <div class="owner-name">
              <span class="font-bold text-blue-600 mr-4">Owner:</span>
              <span contenteditable @blur="$emit('edit', item.aptId, 'petOwner', $event.target.innerText )">{{
              item.petOwner }}</span>
            </div>
            <div contenteditable @blur="$emit('edit', item.aptId, 'aptNotes', $event.target.innerText )">{{
            item.aptNotes }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import moment from "moment";

export default {
  name: "AppointmentList",
  props: ["appointments"],
  components: { FontAwesomeIcon },
  methods: {
    formattedDate: function (date) {
      return moment(new Date(date)).format("MM-DD-YY, h:mm a");
    },
  },
};
</script>