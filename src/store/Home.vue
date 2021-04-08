<template>
  <v-card color="primary" class="lighten-2 px-2" min-height="200px">
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
</template>

<script>
import { mapState, mapActions } from 'vuex'


export default {
  name: "Home",
	computed: {
		...mapState(['carts', 'products'])
	},
  methods: {
    ...mapActions(['addCart']),
  },
}
</script>
