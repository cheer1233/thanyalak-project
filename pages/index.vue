<template>
  <div>
    <v-row>
      <v-col
        v-for="item in product"
        :key="item.name"
        md="6"
        cols="12"
        class="text-center"
      >
        <div>
          <div class="font-weight-bold pink">ชื่อสินค้า : {{ item.name }}</div>
          <div class="font-weight-bold green">ราคา : {{ item.price }}</div>
          <div class="font-weight-bold orange">
            รายละเอียด : {{ item.detail }}
          </div>
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  layout: 'default',
  name: 'App',
  data() {
    return {
      product: [
        { name: 'ชาไทย', price: '50 ฿', detail: 'น้ำสีส้ม' },
        { name: 'ชาเขียว', price: '50 ฿', detail: 'น้ำสีเขียว' },
        { name: 'ชาใต้หวัน', price: '50 ฿', detail: 'น้ำสีครีม' },
        { name: 'นมเผือก', price: '30 ฿', detail: 'น้ำสีม่วง' },
      ],
    }
  },
}
</script>
