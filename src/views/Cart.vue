<template>
	<div>
<v-row>
	<v-col v-for="cart in carts" :key="cart.id">
<v-sheet elevation="2">
	<h4>{{ cart.name }} : {{ cart.qty }} : {{ cart.qty * cart.price }} </h4>
</v-sheet>
	</v-col>
</v-row>
	</div>
</template>

<script>
import { mapState } from 'vuex'
	export default {
		name: 'Cart',
		computed: mapState(['carts']),
	}
</script>