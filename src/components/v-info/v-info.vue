<template>
  <div class="info">
    <div class="info__top">
      <img
        class="info__avatar"
        src="https://i.ibb.co/tKHV0Z4/image.png"
        alt=""
      />
      <v-play-button />
    </div>
    <div class="info__bottom">
      <span class="info__position">Ведущий</span>
      <span class="info__name">Владимир</span>
      <span class="info__name">Соловьев</span>
      <span class="info__description">
        Владимир Соловьев – российский журналист и общественный деятель, ведущий
        на телевидении и радио, автор документальных фильмов и книг, кандидат
        экономических наук.
      </span>
    </div>
  </div>
</template>

<script setup>
import VPlayButton from "./v-play-button";
</script>

<style lang="scss">
.info {
  width: 286px;
  height: 380px;
  border-radius: var(--border-radius);
  background-color: var(--white-color);
  overflow: hidden;

  &__top {
    position: relative;
  }

  &__bottom {
    padding: 16px;
    display: flex;
    flex-direction: column;
  }

  &__position {
    color: #b8c2cc;
    font-size: 12px;
    text-transform: uppercase;
    line-height: 20px;
    letter-spacing: 1px;
    margin-bottom: 4px;
  }

  &__name {
    font-size: 24px;
    line-height: 28px;
    font-weight: 700;
    margin-bottom: 4px;
    font-weight: 700;
    word-break: break-word;
  }

  &__description {
    line-height: 24px;
    background: linear-gradient(180deg, #000000 25%, rgba(0, 0, 0, 0) 53.57%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    height: 168px;
  }
}
</style>
