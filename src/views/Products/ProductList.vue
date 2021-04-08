<template>
  <v-container>
    <v-row>
      <v-col cols="12" sm="8" offset-sm="2">
        <h1 class="mb-3 text-center">My products</h1>
        <v-card v-for="product in products" :key="product.id" class="mb-5" elevation="4">
          <v-row>
            <v-col cols="4">
              <v-img :src="product.imageSrc" height="250" />
            </v-col>
            
            <v-col cols="8">
              <v-card-text class="text-h4 pb-0">{{ product.title }}</v-card-text>
              <v-card-text class="text-subtitle-1 text--secondary">{{ product.description }}</v-card-text>

              <v-card-actions>
                <v-spacer />
                <v-btn
                  color="primary"
                  depressed
                  :to="'/product/' + product.id"
                >Open</v-btn>
              </v-card-actions>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      products: [
        {
          id: "1",
          title: "Lenovo Legion Y520",
          vendor: "Lenovo",
          color: "black",
          material: "metal/plastic",
          description:
            'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
          price: 760,
          promo: false,
          imageSrc: "https://image.ibb.co/fZzq1o/Lenovo_Legion_Y520.jpg"
        },
        {
          id: "2",
          title: "Asus FX503VD",
          vendor: "Asus",
          color: "white",
          material: "plastic",
          description:
            'Intel Core i5 7300HQ 2500 MHz/15.6"/1920x1080/8Gb/256Gb SSD/DVD нет/NVIDIA GeForce GTX 1050/Wi-Fi/Bluetooth/Windows 10 Home',
          price: 984,
          promo: true,
          imageSrc: "https://image.ibb.co/cpScgo/ASUS_FX503_VD.jpg"
        },
        {
          id: "3",
          title: "ASUS TUF Gaming FX504GD",
          vendor: "Asus",
          color: "black",
          material: "metal/plastic",
          description:
            'Intel Core i7 8750H 2300 MHz/15.6"/1920x1080/12Gb/1000Gb HDD/DVD нет/NVIDIA GeForce GTX 1050, 4096 МБ/Wi-Fi/Bluetooth/Win 10 Home',
          price: 1220,
          promo: true,
          imageSrc: "https://image.ibb.co/jBZOMo/ASUS_TUF_Gaming_FX504_GD.jpg"
        },
        {
          id: "4",
          title: "HP Omen 17",
          vendor: "Hp",
          color: "black",
          material: "metal/plastic",
          description:
            'Intel Core i7 7700HQ 2800 MHz/17.3"/1920x1080/12Gb/1128Gb HDD+SSD/DVD-RW/NVIDIA GeForce GTX 1060/Wi-Fi/Bluetooth/Windows 10 Home',
          price: 1600,
          promo: false,
          imageSrc: "https://image.ibb.co/g6czu8/HP_Omen_17.jpg"
        },
        {
          id: "5",
          title: "Acer Swift 5 SF514",
          vendor: "Acer",
          color: "gold",
          material: "metal",
          description:
            'Intel Core i7 8550U 1800 MHz/14"/1920x1080/16Gb/512Gb SSD/DVD нет/Intel HD Graphics 620/Wi-Fi/Bluetooth/Windows 10 Home',
          price: 1100,
          promo: true,
          imageSrc: "https://image.ibb.co/mrOsgo/Acer_Swift_5.jpg"
        },
        {
          id: "6",
          title: "Apple MacBook (MLHC2RU/A)",
          vendor: "Apple",
          color: "silver",
          material: "metal",
          description:
            'Intel Core m3 1200 MHz/12"/2304x1440/8Gb/256Gb SSD/DVD нет/Intel HD Graphics 615/Wi-Fi/Bluetooth/MacOS X',
          price: 980,
          promo: true,
          imageSrc: "https://image.ibb.co/fxDsgo/Apple_macbook.jpg"
        }
      ]
    };
  }
};
</script>
