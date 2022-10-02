import { createApp } from 'vue';
import 'tw-elements';
import App from './App.vue';
import './styles/app.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { faPlus, faMinus, faTrash, faCheck } from '@fortawesome/free-solid-svg-icons';

library.add(faPlus, faMinus, faTrash, faCheck);

createApp(App).mount('#app')
