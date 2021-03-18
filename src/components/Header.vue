<template>
  <div>
    <v-app-bar
      class="hidden-sm-and-down"
      color="white"
      white
      style="text-align: center"
      elevation="0"
    >
      <v-layout wrap justify-start>
        <v-flex md5 xl5 lg5 align-self-center>
          <v-layout justify-center class="font-futura">
            <v-flex md3 xl3 lg3>HOME</v-flex>
            <v-flex md3 xl3 lg3>HISTORY</v-flex>
            <v-flex md3 xl3 lg3>OUR VISION</v-flex>
          </v-layout>
        </v-flex>
        <v-flex
          style="font-size: 30px; font-family: blackerbold; color: #243b55"
          >MYSORE</v-flex
        >
        <v-flex md5 xl5 lg5 align-self-center>
          <v-layout justify-center class="font-futura">
            <v-flex md3 xl3 lg3>AREAS OF FOCUS</v-flex>
            <v-flex md3 xl3 lg3>PROJECTS</v-flex>
            <v-flex md3 xl3 lg3>CONTACT</v-flex>
          </v-layout>
        </v-flex>
      </v-layout>
    </v-app-bar>

    <v-layout wrap>
      <v-flex xs12 sm12>
        <v-app-bar class="hidden-lg-and-up" color="white" dark>
          <v-app-bar-nav-icon color="black" @click="drawer = true"></v-app-bar-nav-icon>

          <v-toolbar-title style="font-size: 22px; font-family: blackerbold; color: #243b55">Mysore</v-toolbar-title>
        </v-app-bar>
      </v-flex></v-layout
    >
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
          v-for="(item,index) in textArray" :key="index"
        >
          <v-list-item>
            <v-list-item-title align-self-center  class="font-futura">{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
// import NavToggle from "./NavToggle";
export default {
  data: () => ({
    drawer: false,
    group: null,
    textArray: [
      {
        title:"HOME",
      },
      {
        title:"HISTORY",
      },
      {
        title:"OUR VISION",
      },
      {
        title:"AREAS OF FOCUS",
      },
      {
        title:"PROJECTS",
      },
      {
        title:"CONTACT",
      },
    ]
  }),
  components: {
    // NavToggle,
  },
};
</script>

<style>
.font-futura {
  color: #0d0d0d;
  font-family: futuramedium;
}
</style>