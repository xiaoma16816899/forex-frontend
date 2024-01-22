<template>
  <div class="z-50 w-full h-screen" style="background: black;">
    <div class="fixed z-50 w-[100%] max-h-screen overflow-y-auto overscroll-auto -translate-x-1/2 left-1/2">
      <div style="padding-left: 5%; padding-right: 4.2%;" v-for="item in infoList" :key="item.c">
        <CardItem :percentage="item.h" :price="item.v" :currency="item.T"/>
      </div>
    </div>
    <NavigationBarBottom />
  </div>
</template>
  
<script setup>
import CardItem from "@/components/cardItem.vue";
import NavigationBarBottom from "@/components/navigationBarBottom.vue";
import { POST } from "@/http/http";
import { GET_ALL_FOREX } from "@/api/endPoint.js"
import { onMounted, ref } from "vue";

const infoList = ref([])

const fetchForexChangeRate = async () => {
  const params = {}
  params.date = "2023-01-09"
  const res = await POST(GET_ALL_FOREX,params)
  if (res.code != 0) {
    console.log("Error");
    return
  }
  infoList.value = res.data.result
}

onMounted(async() =>  {
  fetchForexChangeRate()
})

</script>
  
<style></style>
  