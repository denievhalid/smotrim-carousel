<template>
  <div class="skeletons">
    <div class="skeletons__item" v-for="i in 8">
      <Skeletor
        circle
        size="144"
        :style="{
          marginBottom: '10px',
        }"
      />
      <Skeletor
        width="100"
        height="10"
        :style="{
          marginBottom: '10px',
        }"
        pill
      />
      <Skeletor width="70" height="10" pill />
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss">
.skeletons {
  display: flex;
  justify-content: space-between;
  flex: 1;
  padding-left: 15px;
  padding-right: 15px;
  position: relative;
  top: -1px;

  &__item {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
