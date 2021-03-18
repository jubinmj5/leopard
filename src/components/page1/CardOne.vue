<template>
  <v-app>
    <v-layout wrap justify-center>
      <v-flex xs12 sm12 md12 xl12 lg12 px-12>
        <v-layout wrap>
          <v-flex py-7 px-12 xs12 sm12 md12 xl12 lg12 style="font-size:24px;font-family: sofiapro-light;">
            The Most <span style="font-family: SofiaPro-Medium;">Latest News</span> of the Week
          </v-flex>
        </v-layout>
        <v-layout wrap justify-start>
          <v-flex xs12 sm12 md12 xl12 lg12 >
            <v-layout wrap>
              <v-flex xs12 sm4 md4 xl4 lg4
                v-for="card in Card"
                :key="card.id">
                <v-card
                tile
                class="mx-auto"
                max-width="80%"
                max-height="40%"
                elevation="0"
                >
                  <v-img
                    src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20191003134442/Maharajahs-Palace-in-Mysore-1024x667.jpg"
                    height="180px"
                    width="400px"
                  ></v-img>
                  <v-flex py-2 style="line-height:20px;font-size:14px;font-family:PlayfairDisplay-Bold;color:#000000;">
                    
                  <v-flex pr-12 style="text-align:left">
                    <span class="dot"></span>
                    Contrary to popular belief, Lorem Ipsum is not\ simply random text.
                  </v-flex>
                  </v-flex>

                  <v-flex xs12 sm11 md11 xl11 lg11 style="font-size:13px;font-family:sofiapro-light;color:#000000;">
                    With the number of Coronavirus positive cases declining day-byday and businesses also seeing growth…
                  </v-flex>

                  <v-flex style="font-size:12px;font-family:sofiapro-light;color:#8B8B8B;">
                    Tue, 12th Jan 2021
                  </v-flex>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        <v-layout wrap justify-start>
          <v-flex xs12 sm6 md6 xl6 lg6 py-12 pl-12 pr-12
          v-for="subcard in SubCard"
          :key="subcard.id">
            <v-card
            tile
            class="d-flex"
            elevation="0"
            >
            <v-layout wrap>
              <v-flex xs12 sm12 md12 xl12 lg12 py-3>
              <v-img
                src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20191003134442/Maharajahs-Palace-in-Mysore-1024x667.jpg"
                height="70px"
                width="80px"
              ></v-img>

              </v-flex>
            </v-layout>
              <v-layout wrap justify-start>
                <v-flex px-4 xs12 sm12 md12 xl12 lg12>
                  <v-flex xs12 sm12 md12 xl12 lg12 py-2 style="line-height:20px;font-size:14px;font-family:PlayfairDisplay-Bold;color:#000000;">
                    Recovering from COVID-19… Tourist footfall increases at Mysore Palace, Zoo - Star of Mysore
                  </v-flex>

                  <v-flex xs12 sm11 md11 xl11 lg11 style="font-size:13px;font-family:sofiapro-light;color:#000000;">
                    With the number of Coronavirus positive cases declining day-byday and businesses also seeing growth…
                  </v-flex>

                  <v-flex style="font-size:12px;font-family:sofiapro-light;color:#8B8B8B;">
                    Tue, 12th Jan 2021
                  </v-flex>

                </v-flex>
              </v-layout>
            </v-card>
          </v-flex>
        </v-layout>
        <v-layout wrap justify-center>    
          <v-flex align-self-center xs12 sm6 md6 xl6 lg6 offset-5>
            <v-btn
              elevation="0"
              outlined
              rounded
              class="text-capitalize"
              large
              style="font-family: SofiaPro-Medium;color:#153687"
            > View All <v-icon>mdi-arrow-right</v-icon>
            </v-btn>
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
      Card: 3,
      SubCard: 2,
    }),
  }
</script>

<style>
.dot {
  height: 8px;
  width: 8px;
  background-color:#FFC219;
  border-radius: 50%;
  display: inline-block;
}
</style>