<template>
  <v-app>
    <Header/>

    <v-main>
      <!-- <MainPage/> -->
      <router-view/>
    </v-main>
    <Footer/>
  </v-app>
</template>

<script>
// import MainPage from './components/MainPage';
import Header from './components/Header';
import Footer from './components/Footer';

export default {
  name: 'App',

  components: {
    // MainPage,
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>

<style>
@font-face {
  font-family: blackerlight;
  src: url("./assets/fonts/Blacker-Display-Light-trial.ttf")
}
@font-face {
  font-family: blackerregular;
  src: url("./assets/fonts/Blacker-Display-Regular-trial.ttf")
}
@font-face {
  font-family: blackermedium;
  src: url("./assets/fonts/Blacker-Display-Medium-trial.ttf")
}
@font-face {
  font-family: blackerbold;
  src: url("./assets/fonts/Blacker-Display-Bold-trial.ttf")
}
@font-face {
  font-family: blackerextrabold;
  src: url("./assets/fonts/Blacker-Display-ExtraBold-trial.ttf")
}
@font-face {
  font-family: blackeritaliclight;
  src: url("./assets/fonts/Blacker-Display-Light-Italic-trial.ttf")
}
@font-face {
  font-family: firasansregular;
  src: url("./assets/fonts/FiraSans-Regular.ttf")
}
@font-face {
  font-family: sofiapro-light;
  src: url("./assets/fonts/sofiapro-light.otf")
}
@font-face {
  font-family: futuramedium;
  src: url("./assets/fonts/futura medium bt.ttf")
}
@font-face {
  font-family: PlayfairDisplay-Bold;
  src: url("./assets/fonts/PlayfairDisplay-Bold.ttf")
}
@font-face {
  font-family: SofiaPro-Medium;
  src: url("./assets/fonts/Sofia Pro Medium.ttf")
}
</style>