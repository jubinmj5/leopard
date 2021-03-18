<template>
  <v-app>
    <v-layout wrap justify-center>
      <v-flex align-self-center text-center xs12 md12 px-12>
        

        <v-layout wrap justify-center>
          <v-flex text-left py-5 px-12 xs12 md6 style="font-size:24px;font-family: sofiapro-light;">
            The Most <span style="font-family: SofiaPro-Medium;">Latest News</span> of the Week
          </v-flex>
          <v-flex text-right py-5 px-12 xs12 md6 style="font-size:14px;font-family:sofiapro-light;color:#8B8B8B;">
            Tue, 12th Jan 2021
          </v-flex>
        </v-layout>

        <v-layout wrap justify-center>
          <v-flex md5 py-2 align-self-center text-center>
            <v-flex md12 align-self-center text-center style="text-align:center">
              <span style="line-height:6px;font-size:26px;font-family:PlayfairDisplay-Bold;color:#000000;">Contrary to popular belief, Lorem Ipsum is not\ simply random text.</span> 
            </v-flex>
            <v-flex md12 align-self-center text-center py-4>
              <v-card
                tile
                class="mx-auto"
                max-width="80%"
                max-height="40%"
                elevation="0"
                >
                  <v-img
                    src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20191003134442/Maharajahs-Palace-in-Mysore-1024x667.jpg"
                    height="280px"
                    width="600px"
                  ></v-img>
                  <v-flex md12 align-self-center text-center>
                    <v-flex align-self-center text-center md12>
                      <span style="font-size:13px;font-family:sofiapro-light;color:#000000;">
                        Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et Malorum” (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, “Lorem ipsum dolor sit amet..”, comes from a line in section 1.10.32. <br><br> The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                      </span>
                    </v-flex>
                  </v-flex>
              </v-card>
            </v-flex>
          </v-flex>
        </v-layout>

        <v-layout wrap justify-center>
          <v-flex align-self-center md11 pb-10 py-5>
            <hr style="height:2px;width:100%;color:gray;background-color:gray"> 
          </v-flex>
        </v-layout>

        <v-layout wrap justify-start>
          <v-flex md12 py-4>
            <v-layout wrap>
              <v-flex md4
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

                  <v-flex text-left xs12 md11 style="font-size:13px;font-family:sofiapro-light;color:#000000;">
                    With the number of Coronavirus positive cases declining day-byday and businesses also seeing growth…
                  </v-flex>

                  <v-flex text-left style="font-size:12px;font-family:sofiapro-light;color:#8B8B8B;">
                    Tue, 12th Jan 2021
                  </v-flex>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>

        
        <v-layout>
          <v-flex md12 py-12>

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
      page: 1,
      Card: 3,
      SubCard: 5,
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