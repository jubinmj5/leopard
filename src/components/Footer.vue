<template>
  <v-footer
    dark
    padless
  >
    <v-card
      flat
      tile
      class="white white--text text-center"
    >
    <v-layout>
      <v-flex xs12 md6>
        <v-layout justify-start px-12 py-10>
          <v-flex xs12 md12>
            <v-layout wrap justify-start px-12>
              <v-flex xs12 md9 align-self-start>
                <p style="text-align:left;color:#B4B4B4;font-family:blackerbold;font-size:26px">MYSORE</p>
                <p style="text-align:left;font-family:sofiapro-light;font-size:14px;color:#B4B4B4">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md6>
      <v-layout justify-center>
      <v-flex xs12 md12>
        <v-layout justify-start pt-10>
          <v-flex xs12 md12>
            <v-layout wrap justify-start>
              <v-flex xs12 md9 align-self-start>
                <p style="text-align:left;color:#B4B4B4;font-family:futuramedium;font-size:12px">HISTORY</p>
                <p style="text-align:left;color:#B4B4B4;font-family:futuramedium;font-size:12px">AREAS OF FOCUS</p>
                <p style="text-align:left;color:#B4B4B4;font-family:futuramedium;font-size:12px">OUR VISION</p>
                <p style="text-align:left;color:#B4B4B4;font-family:futuramedium;font-size:12px">TEAM</p>
                <p style="text-align:left;color:#B4B4B4;font-family:futuramedium;font-size:12px">PROJECTS</p>
                <p style="text-align:left;color:#B4B4B4;font-family:futuramedium;font-size:12px">ADVISORY GROUP</p>
                <p style="text-align:left;color:#B4B4B4;font-family:futuramedium;font-size:12px">CONTACT</p>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex xs12 md12>
        <v-layout justify-start pt-12>
          <v-flex xs12 md12>
            <v-layout wrap justify-start pt-12>
              <v-flex xs12 md9 align-self-start>
                <v-layout justify-start pt-12>
                  <v-flex xs2>
                    <v-icon style="color:#B2B2B2">mdi-twitter</v-icon>
                  </v-flex>
                  <v-flex xs2>
                    <v-icon style="color:#B2B2B2">mdi-facebook</v-icon>
                  </v-flex>
                  <v-flex xs2>
                    <v-icon style="color:#B2B2B2">mdi-linkedin</v-icon>
                  </v-flex>
                </v-layout>
                <v-layout pt-5>
                  <v-flex xs2>
                    <v-icon style="color:#B2B2B2">mdi-email</v-icon>
                  </v-flex>
                  <v-flex xs7>
                    <p style="font-family:sofiapro-light;color:#B2B2B2">mysore@gmail.com</p>
                  </v-flex>
                </v-layout>
                <v-layout>
                  <v-flex xs2>
                    <v-icon style="color:#B2B2B2">mdi-phone</v-icon>
                  </v-flex>
                  <v-flex xs7>
                    <p style="font-family:sofiapro-light;color:#B2B2B2">+91 9484 000 000</p>
                  </v-flex>
                </v-layout>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      </v-layout>
      </v-flex>
    </v-layout>
    <v-layout justify-center py-9>
      <v-flex style="font-family:sofiapro-light;color:#B4B4B4;">
        <p>LEOPARD TECH LABS PVT. LTD</p>
      </v-flex>
    </v-layout>


      
    </v-card>
  </v-footer>
</template>

<script>
  export default {
    data: () => ({
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-linkedin',
        'mdi-instagram',
      ],
    }),
  }
</script>
