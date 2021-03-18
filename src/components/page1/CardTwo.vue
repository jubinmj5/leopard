<template>
  <v-app>
    <v-layout wrap justify-center>
      <v-flex xs12 sm12 md12 xl12 lg12 px-12>
        <v-layout wrap justify-start>
          <v-flex py-5 px-12 xs12 sm12 md9 xl9 lg9>
            <v-layout wrap>
              <v-flex xs12 sm12 md12 xl12 lg12 style="font-size:24px;font-family: SofiaPro-Medium;">
                Latest News
              </v-flex>
              <v-flex xs5 sm12 md py-3 style="font-size:14px;font-family: SofiaPro-Medium;color:#B5B5B5;">TRENDING</v-flex>
              <v-flex xs5 py-3 style="font-size:14px;font-family: SofiaPro-Medium;color:#B5B5B5;">NEW</v-flex>
              <v-flex xs5 py-3 style="font-size:14px;font-family: SofiaPro-Medium;color:#B5B5B5;">UPCOMING</v-flex>
              <v-flex xs5 py-3 style="font-size:14px;font-family: SofiaPro-Medium;color:#B5B5B5;">POPULAR</v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-layout wrap>
          <v-flex pl-12 pr-12>
            <v-card
            outlined>
            <v-layout wrap justify-start>
              <v-flex md6 pr-2>
                <v-card
                  elevation="0"
                  tile
                  
                  >
                  <v-img
                    class="white--text align-end"
                    height="311px"
                    width="100%"
                    src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
                    >
                    <v-layout wrap>
                      <v-flex py-5 px-3>
                        <v-card-subtitle style="font-size:14px;font-family: SofiaPro-Medium;color:#D9A73D;" >
                          Upcoming
                        </v-card-subtitle>
                        <v-card-title style="font-size:24px;font-family: blackermedium;color:#FFFFFF;">Remembrance Day</v-card-title>
                        <v-card-subtitle style="font-size:14px;font-family: SofiaPro-Medium;color:#F4F4F4;" >
                          2nd March 2021
                        </v-card-subtitle>
                      </v-flex>
                    </v-layout>
                  </v-img>
                </v-card>
              </v-flex>
              
              <v-flex
                v-for="card in Card"
                :key="card.id"
                md3>
                <v-layout wrap justify-start>
                  <v-flex md12>
                    <v-card
                    tile
                    outlined
                    elevation="0"
                    >
                      <v-img
                        src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20191003134442/Maharajahs-Palace-in-Mysore-1024x667.jpg"
                        height="60%"
                        width="100%"
                      ></v-img>
                      <v-card-title py-2 style="line-height:26px;font-size:14px;font-family:PlayfairDisplay-Bold;color:#383838;">
                        Contrary to popular belief, Lorem Ipsum is not\ simply random text.
                      </v-card-title>

                      <v-layout wrap>
                        <v-flex px-5 style="font-size:12px;font-family:sofiapro-light;color:#8B8B8B;">
                          Tue, 12th Jan 2021
                        </v-flex>
                        <v-flex px-5 style="text-align:right;font-size:12px;font-family: SofiaPro-Medium;color:#B4B4B4;" >
                          Read More
                        </v-flex>
                      </v-layout>
                    </v-card>
                  </v-flex>
                </v-layout>
              </v-flex>
              
              <v-flex py-12>
                <v-flex pa-12>
                  <v-flex pa-12 py-12> 
                    <!-- <v-btn
                      elevation="0"
                      tile
                      class="text-capitalize"
                      large
                      style="font-family: SofiaPro-Medium;color:#153687"
                    > View All <v-icon>mdi-arrow-right</v-icon>
                    </v-btn> -->
                    <span style="font-family: SofiaPro-Medium;color:#153687">View All<v-icon style="font-family: SofiaPro-Medium;color:#153687">mdi-arrow-right</v-icon></span>
                  </v-flex>
                </v-flex>

              </v-flex>
              <v-layout wrap>
              </v-layout>
            </v-layout>

            </v-card>

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
      Card: 5,
      SubCard: 2,
    }),
  }
</script>