<template>
  <div class="px-4 flex flex-row justify-center w-full">

    <div class="mt-4 text-md w-full">
      <input id="SearchApts" placeholder="Search" type="text" class="py-3 px-4 rounded-l shadow-md border border-gray-200 w-full
          focus:outline-none focus:border-blue-300 
          active:outline-none active:border-blue-300 " aria-label="Search Appointments" />
    </div>
    <div class="dropdown relative z-10 inline-flex items-center py-4 text-md font-medium text-center">
      <button class="
              dropdown-toggle
              px-6
              py-4
              bg-blue-600
              text-white
              font-medium
              text-sm
              leading-tight
              rounded-r
              shadow-md
              hover:bg-blue-700 hover:shadow-lg
              focus:border-blue-300 
              active:border-blue-300 
              transition
              duration-150
              ease-in-out
              flex
              items-center
              whitespace-nowrap
            " type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
        Sort by
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="caret-down" class="w-2 ml-2" role="img"
          xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
          <path fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z">
          </path>
        </svg>
      </button>
      <ul class="
              dropdown-menu
              min-w-max
              absolute
              hidden
              bg-white
              text-base
              z-50
              float-left
              py-3
              list-none
              text-left
              rounded-lg
              shadow-lg
              mt-1
              hidden
              m-0
              bg-clip-padding
              border-none
            " aria-labelledby="dropdownMenuButton1">
        <li>
          <a class="
                  dropdown-item
                  text-sm
                  py-3
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-gray-700
                  hover:bg-gray-100
                " href="#" id="petName">
            Pet Name
            <font-awesome-icon icon="check" />
          </a>
        </li>
        <li>
          <a class="
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-gray-700
                  hover:bg-gray-100
                " href="#" id="aptDate">
            Date
            <font-awesome-icon icon="check" />
          </a>
        </li>
        <li>
          <a class="
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-gray-700
                  hover:bg-gray-100
                " href="#" id="ownerName">
            Owner
            <font-awesome-icon icon="check" />
          </a>
        </li>
        <hr class="h-0 my-2 border border-solid border-t-0 border-gray-700 opacity-25" />
        <li>
          <a class="
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-gray-700
                  hover:bg-gray-100
                " href="#" id="asc">
            Asc
            <font-awesome-icon icon="check" />
          </a>
        </li>
        <li>
          <a class="
                  dropdown-item
                  text-sm
                  py-2
                  px-4
                  font-normal
                  block
                  w-full
                  whitespace-nowrap
                  bg-transparent
                  text-gray-700
                  hover:bg-gray-100
                " href="#" id="desc">
            Desc
            <font-awesome-icon icon="check" />
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
export default {
  name: "SearchAppointment",
  data() {
    return {
      searchTerm: ''
    }
  },
  components: { FontAwesomeIcon }

}

</script>