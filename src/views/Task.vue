<template>
  <v-card elevation="5" class="pa-2" rounded>
    <strong>{{ task.name }}</strong>
    <p v-if="task.description">
      {{ task.description }}
    </p>
  </v-card>
</template>

<script>
import { mapGetters} from 'vuex'

export default {
  name: "Task",
  props: {
    columnId: {
      type: String,
      required:true 
    },
    taskId: {
      type: String,
      required:true 
    },
  },
computed: {
  ...mapGetters(['getTask']),
  task(){
    return this.getTask(this.columnId, this.taskId) 
  },
},

}
</script>
