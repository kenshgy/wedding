<template>
  <v-row class="pa-4 mt-10" align="center">
    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
      <div class="text-center">
        明治神宮/明治記念館 <br />
        <a href="https://www.meijikinenkan.gr.jp/access/">https://www.meijikinenkan.gr.jp/access/</a
        ><br />
        東京都渋谷区代々木神園町１−１<br />
        * 挙式と披露宴で場所が異なります。<br />ご注意ください。
      </div>
    </v-col>
    <v-col cols="12" lg="6" md="6" sm="12" xs="12">
      <div class="text-center googlemap">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3241.02454682483!2d139.69674561129733!3d35.67639757247446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cb7ca708ad3%3A0x9fb61d06f41afa2a!2z5piO5rK756We5a6uIOelnualveauvw!5e0!3m2!1sja!2sjp!4v1694514381997!5m2!1sja!2sjp"
          width="350"
          height="250"
          style="border: 0"
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </v-col>
  </v-row>
</template>

<style>
.googlemap {
  height: auto;
  overflow: hidden;
  position: relative;
  /* padding-top: 20%; */
}

.googlemap iflame {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
}
</style>
