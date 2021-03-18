<template>
  <v-app>
    
            
    <v-layout wrap justify-center>
      <v-flex xs12 md12 px-12>
        <v-layout wrap justify-start>
          <v-flex py-5 px-12 xs12 md9>
            <v-layout wrap>
              <v-flex style="font-size: 24px; font-family: SofiaPro-Medium">
                History
              </v-flex>
              <v-flex
                py-3
                style="
                  font-size: 14px;
                  font-family: SofiaPro-Medium;
                  color: #b5b5b5;
                "
                >TRENDING</v-flex
              >
              <v-flex
                py-3
                style="
                  font-size: 14px;
                  font-family: SofiaPro-Medium;
                  color: #b5b5b5;
                "
                >NEW</v-flex
              >
              <v-flex
                py-3
                style="
                  font-size: 14px;
                  font-family: SofiaPro-Medium;
                  color: #b5b5b5;
                "
                >UPCOMING</v-flex
              >
              <v-flex
                py-3
                style="
                  font-size: 14px;
                  font-family: SofiaPro-Medium;
                  color: #b5b5b5;
                "
                >POPULAR</v-flex
              >
            </v-layout>
          </v-flex>
        </v-layout>

      </v-flex>
      <v-flex xs12 md12 px-12>
        <v-layout wrap justify-space-between>
              <v-flex md12 px-12 pr-2>
                <v-card elevation="0" tile>
                  <v-layout wrap justify-start>
                    <v-flex md4 py-2>
                      <v-img
                        class="white--text align-end"
                        height="280px"
                        width="100%"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                      >
                      
                      </v-img>
                    </v-flex>
                    <v-flex  md8>
                    <v-layout wrap justify-start>
                      <v-flex md12 px-3>
                        <v-flex md12
                          style="
                            font-size: 24px;
                            font-family: SofiaPro-Medium;
                            color: #d9a73d;
                          "
                        >
                          Upcoming
                        </v-flex>
                        <v-flex
                         py-2
                          style="
                            font-size: 24px;
                            font-family: blackermedium;
                            color: black;
                          "
                          >Remembrance Day</v-flex>
                        <v-flex md10>
                          <span style="font-size:18px;font-family:sofiapro-light;color:#777777;">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                          </span>
                        </v-flex>
                        <v-layout wrap justify-start>
                          <v-flex md2 py-12>
                            <v-icon>mdi-calendar-range</v-icon>
                            <span style="font-size: 14px;font-family: SofiaPro-Medium;color: #000000;">2nd March 2021</span>
                          </v-flex>
                          <v-flex md2 py-12>
                            <v-icon>mdi-av-timer</v-icon>
                            <span style="font-size: 14px;font-family: SofiaPro-Medium;color: #000000;">08:30 AM</span>
                          </v-flex>
                        </v-layout>
                      </v-flex>
                    </v-layout>
                    </v-flex>
                  </v-layout>
                </v-card>
              </v-flex>
            </v-layout>
            </v-flex>
<!--             
          <v-flex align-self-center md12 py-5>
            <hr style="height:2px;width:100%;color:gray;background-color:gray"> 
          </v-flex> -->

      <v-flex xs12 md12 px-12>

        <v-layout wrap>
          <v-flex md12 py-12 pl-12 pr-12>
            <v-layout wrap justify-start>
              <v-flex py-12>

              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    show: false,
    Card: 6,
    SubCard: 2,
  }),
};
</script>