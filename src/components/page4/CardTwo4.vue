<template>
  <v-app>
    
            
    <v-layout wrap justify-center>
      <v-flex xs12 md12 px-12>
        <v-layout wrap justify-start>
          <v-flex py-5 px-12 xs12 md9>
            <v-layout wrap>
              <v-flex style="font-size: 24px; font-family: SofiaPro-Medium">
                Latest News
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
        <v-layout wrap justify-start>
              <v-flex md12 px-12 pr-2>
                <v-card elevation="0" tile>
                  <v-layout wrap justify-start>
                    <v-flex md4>
                      <v-img
                        class="white--text align-end"
                        height="311px"
                        width="100%"
                        src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                      >
                      
                      </v-img>
                    </v-flex>
                    <v-flex  md8>
                    
                    <v-layout wrap justify-start>
                      <v-flex  px-3>
                        <v-flex
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
            
          <v-flex align-self-center md12 pt-12 py-3>
            <hr style="height:2px;width:100%;color:gray;background-color:gray"> 
          </v-flex>

      <v-flex xs12 md12 px-12>

        <v-layout wrap>
          <v-flex md12 pl-12 pr-12>
            


            <v-layout wrap justify-start>
              <v-flex
                py-3
                px-4
                style="
                  font-size: 24px;
                  font-family: SofiaPro-Medium;
                  color: #b5b5b5;
                "
                >Trending</v-flex
              >
            </v-layout>
            <v-layout wrap justify-center>
              <v-flex v-for="card in Card" :key="card.id" md4>
                <v-layout wrap justify-start>
                  <v-flex md12 px-4 py-4>
                    <v-flex md12>
                      <v-card tile outlined elevation="0">
                        <v-img
                          src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20191003134442/Maharajahs-Palace-in-Mysore-1024x667.jpg"
                          height="60%"
                          width="100%"
                        ></v-img>
                        <v-card-title
                          py-2
                          style="
                            line-height: 26px;
                            font-size: 14px;
                            font-family: PlayfairDisplay-Bold;
                            color: #383838;
                          "
                        >
                          Contrary to popular belief, Lorem Ipsum is not\ simply
                          random text.
                        </v-card-title>

                        <v-layout wrap>
                          <v-flex
                            px-5
                            style="
                              font-size: 12px;
                              font-family: sofiapro-light;
                              color: #8b8b8b;
                            "
                          >
                            Tue, 12th Jan 2021
                          </v-flex>
                          <v-flex
                            px-5
                            style="
                              text-align: right;
                              font-size: 12px;
                              font-family: SofiaPro-Medium;
                              color: #b4b4b4;
                            "
                          >
                            Read More
                          </v-flex>
                        </v-layout>
                      </v-card>
                    </v-flex>
                  </v-flex>
                </v-layout>
              </v-flex>

              <v-layout wrap>
                <v-flex py-12> </v-flex>
              </v-layout>
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