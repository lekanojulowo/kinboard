<template>
  <div>
    <v-card color="primary" class="lighten-2 px-2" min-height="200px">
      <v-card-title class="white--text">KinBoard</v-card-title>
      <v-card-subtitle class="white--text">Kinplus Technologies Task Board for managing your schedules</v-card-subtitle>
      <v-row>
        <v-col v-for="column in board.columns" :key="column.id" cols="12" sm="6" md="4" lg="3">
          <v-sheet elevation="5" class="pa-2 lighten-2" color="grey" rounded>
            <strong>{{ column.name }}</strong>
            <v-card v-for="task in column.tasks" :key="task.id" :to="{name: 'task', params: {columnId: column.id, taskId: task.id}}" elevation="5" class="ma-2 pa-2" rounded>
              <strong>{{ task.name }}</strong>
              <p v-if="task.description">
                {{ task.description }}
              </p>
            </v-card>
          </v-sheet>
        </v-col>
      </v-row>


      <v-divider class="mt-5 red"></v-divider>
      <v-sheet class="ma-2 pa-2">
        <v-badge overlap>
          <template v-slot:badge>
            {{ carts.length }}
          </template>
        <v-btn :to="{name: 'cart'}">Cart</v-btn>
        </v-badge>

        <v-row>
          <v-col v-for="prod in products" :key="prod.id">
            <v-avatar>
              <v-icon>
                <!-- {{`mdi-${prod.src}`}} -->
                mdi-{{prod.src}}
              </v-icon>
            </v-avatar>
            <h1>{{prod.name}}</h1>
            <h4>NGN{{prod.price}}</h4>
            <v-btn @click="addCart(prod)">Add To Cart</v-btn>

          </v-col>
        </v-row>
      </v-sheet>
    </v-card>
    <v-dialog
      :value="isTaskOpen"
      max-width="500"
      @click:outside="closeTask"
    >
      <router-view></router-view>   
    </v-dialog>
  </div>
</template>

<script>
// import {uuid } from '@/services'
import { mapState, mapActions } from 'vuex'
// import SlidesCarousel from '@/components/SlidesCarousel.vue'


export default {
  name: "Home",

  data: () => ({
    // expand: false,
  }),
computed: {
  ...mapState(['board', 'carts', 'products']),
  isTaskOpen (){
    return this.$route.name === 'task'
  }
},
  methods: {
    ...mapActions(['addCart']),
    closeTask(){
      this.$router.push({name: 'home'})
    },
  },
}
</script>
