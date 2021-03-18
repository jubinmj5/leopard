<template>
  <v-layout>
    <v-flex>
      <HomePage/>
      <CardOne/>
      <CardTwo/>
      <CardThree/>

    </v-flex>
  </v-layout>
</template>

<script>
import HomePage from './page1/HomePage';
import CardOne from './page1/CardOne';
import CardTwo from './page1/CardTwo';
import CardThree from './page1/CardThree';

export default {
  name: 'MainPage',

  components: {
    HomePage,
    CardOne,
    CardTwo,
    CardThree
  },

  data: () => ({
    //
  }),
};
</script>
