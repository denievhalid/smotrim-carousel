<template>
  <div class="person carousel__item">
    <div class="person__inner">
      <img
        class="person__avatar"
        width="144"
        height="144"
        :src="getImageUrl(person.picId)"
        alt=""
      />
      <span class="person__name">{{ person.name }}</span>
      <span class="person__name">{{ person.surname }}</span>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";

defineProps({
  person: Object,
});

const getImageUrl = (picId) => {
  return `https://api.smotrim.ru/api/v1/pictures/${picId}/bq/redirect`;
};
</script>

<style lang="scss">
.person {
  text-align: center;

  &__inner {
    display: flex;
    flex-direction: column;
  }

  &__position {
  }

  &__avatar {
    border-radius: 50%;
    margin-bottom: 10px;
  }

  &__name {
    font-family: RFDewiBold, serif;
    font-size: 14px;
    line-height: 16px;
  }
}
</style>
