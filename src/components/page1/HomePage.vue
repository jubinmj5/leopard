<template>
<v-app>
    <v-layout wrap justify-center>
      <v-flex xs12 sm12 md12 xl12 lg12 text-center style="color:white;">
        <v-img
          :src="require('../../assets/Mysores.jpg')"
          cover
        >
        <v-layout wrap justify-center pt-12>
          <v-flex xs12 sm5 md5 xl5 lg5 pt-6>
          <p style="line-height: 60px;font-family:blackerlight;font-size:65px;color:#FFFFFF">Palace</p>
          
                <!-- <hr style="height:2px;width:10%;border-width:0;color:yellow;background-color:#CB8E43"> -->
            <v-layout wrap justify-center>
                <v-flex xs12 sm3 md3 xl3 lg3 py-3>
                  <hr style="margin-left:80%;height:2px;width:30%;border-width:0;color:yellow;background-color:#CB8E43">
                </v-flex>
                <v-flex xs12 sm2 md2 xl2 lg2 >
                  <p style="margin-left:0%;line-height: 30px;font-family:blackeritaliclight;font-size:40px;color:#FFFFFF">of</p>
                </v-flex>
                <v-flex py-3 xs12 sm3 md3 xl3 lg3>
                  <hr style="height:2px;width:30%;border-width:0;color:yellow;background-color:#CB8E43"/>
                </v-flex>

            </v-layout> 
          <span style="line-height: 60px;font-family:blackerregular;font-size:75px;color:#FFFFFF">Mysuru</span><br>
          <p  class="pt-5" style="font-size:17px;font-family:firasansregular;color:#FFFFFF;">
            The Mysore Palace is a historical palace and the royal residence at Mysore in the Indian State of Karnataka. It is the official residence of the Wadiyar dynasty and the seat of the Kingdom of Mysore.
          </p>
          </v-flex>
        </v-layout>
        </v-img>
      </v-flex>
    </v-layout>

</v-app>
</template>

<script>
  export default {
    name: 'HomePage',

    data: () => ({
      ecosystem: [
        {
          text: 'vuetify-loader',
          href: 'https://github.com/vuetifyjs/vuetify-loader',
        },
        {
          text: 'github',
          href: 'https://github.com/vuetifyjs/vuetify',
        },
        {
          text: 'awesome-vuetify',
          href: 'https://github.com/vuetifyjs/awesome-vuetify',
        },
      ],
      importantLinks: [
        {
          text: 'Documentation',
          href: 'https://vuetifyjs.com',
        },
        {
          text: 'Chat',
          href: 'https://community.vuetifyjs.com',
        },
        {
          text: 'Made with Vuetify',
          href: 'https://madewithvuejs.com/vuetify',
        },
        {
          text: 'Twitter',
          href: 'https://twitter.com/vuetifyjs',
        },
        {
          text: 'Articles',
          href: 'https://medium.com/vuetify',
        },
      ],
      whatsNext: [
        {
          text: 'Explore components',
          href: 'https://vuetifyjs.com/components/api-explorer',
        },
        {
          text: 'Select a layout',
          href: 'https://vuetifyjs.com/getting-started/pre-made-layouts',
        },
        {
          text: 'Frequently Asked Questions',
          href: 'https://vuetifyjs.com/getting-started/frequently-asked-questions',
        },
      ],
    }),
  }
</script>
