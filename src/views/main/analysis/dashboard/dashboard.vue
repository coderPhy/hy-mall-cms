<template>
  <div class="dashboard">
    <el-row :gutter="10">
      <el-col :span="7">
        <hy-card title="分类商品数量(饼图)">
          <pie-echart :pie-data="categoryGoodsCount"></pie-echart>
        </hy-card>
      </el-col>
      <el-col :span="10">
        <hy-card title="不同城市商品销量">
          <map-echart :mapData="addressGoodsSale"></map-echart>
        </hy-card>
      </el-col>
      <el-col :span="7">
        <hy-card title="分类商品数量(玫瑰图)">
          <rose-echart :roseData="categoryGoodsCount"></rose-echart>
        </hy-card>
      </el-col>
    </el-row>

    <el-row :gutter="10" class="content-row">
      <el-col :span="12">
        <hy-card title="分类商品的销量">
          <line-echart
            title="分类商品的销量"
            v-bind="categoryGoodsSale"
          ></line-echart>
        </hy-card>
      </el-col>
      <el-col :span="12">
        <hy-card title="分类商品的收藏">
          <bar-echart v-bind="categoryGoodsFavor" title="title"></bar-echart>
        </hy-card>
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent } from "vue"

import { useStore } from "@/store"

import hyCard from "@/base-ui/card"
import {
  pieEchart,
  barEchart,
  roseEchart,
  lineEchart,
  mapEchart
} from "@/components/page-echarts"

export default defineComponent({
  name: "dashboard",
  components: {
    hyCard,
    pieEchart,
    barEchart,
    roseEchart,
    lineEchart,
    mapEchart
  },
  setup() {
    const store = useStore()
    store.dispatch("dashboard/getDashboardDataAction")

    const categoryGoodsCount = computed(() => {
      return store.state.dashboard.categoryGoodsCount.map((item) => {
        return { name: item.name, value: item.goodsCount }
      })
    })
    const categoryGoodsSale = computed(() => {
      const categoryGoodsSale = store.state.dashboard.categoryGoodsSale
      const xLabel: string[] = []
      const values: number[] = []
      for (const item of categoryGoodsSale) {
        xLabel.push(item.name)
        values.push(item.goodsCount)
      }

      return {
        xLabel,
        values
      }
    })
    const categoryGoodsFavor = computed(() => {
      const categoryGoodsFavor = store.state.dashboard.categoryGoodsFavor
      const xLabel: any[] = []
      const data: any[] = []
      for (const item of categoryGoodsFavor) {
        xLabel.push(item.name)
        data.push(item.goodsFavor)
      }

      return {
        xLabel,
        data
      }
    })
    const addressGoodsSale = computed(() => {
      return store.state.dashboard.addressGoodsSale.map((item: any) => {
        return {
          value: item.count,
          name: item.address
        }
      })
    })

    return {
      categoryGoodsCount,
      categoryGoodsSale,
      categoryGoodsFavor,
      addressGoodsSale
    }
  }
})
</script>

<style scoped lang="less">
.content-row {
  margin-top: 10px;
}
</style>
