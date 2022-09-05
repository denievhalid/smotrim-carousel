<template>
  <div class="persons">
    <div class="persons__inner">
      <v-skeletons v-if="loading" />
      <Carousel ref="cRef" v-else-if="persons.length" :items-to-show="8">
        <Slide v-for="(person, i) in persons" :key="i">
          <v-person :person="person" />
        </Slide>

        <template #addons="{ currentSlide }">
          <button
            class="carousel__prev"
            @click="prevSlide"
            v-if="currentSlide > 3"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              :style="{ transform: 'rotate(180deg)' }"
            >
              <path
                d="M14 6L20 12L14 18"
                stroke="black"
                stroke-width="2"
                stroke-linecap="square"
              />
              <path
                d="M4 12H18.6662"
                stroke="black"
                stroke-width="2"
                stroke-linecap="square"
              />
            </svg>
          </button>
          <button
            class="carousel__next"
            @click="nextSlide"
            v-if="currentSlide !== 11"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 6L20 12L14 18"
                stroke="black"
                stroke-width="2"
                stroke-linecap="square"
              />
              <path
                d="M4 12H18.6662"
                stroke="black"
                stroke-width="2"
                stroke-linecap="square"
              />
            </svg>
          </button>
        </template>
      </Carousel>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref } from "vue";
import usePerson from "../../composables/usePerson";
import VPerson from "./v-person";
import "vue3-carousel/dist/carousel.css";
import { Carousel, Slide, Navigation } from "vue3-carousel";
import VSkeletons from "../v-skeletons/v-skeletons";

const { loading, persons, fetchPersons } = usePerson();
const cRef = ref(null);

const prevSlide = () => {
  cRef.value.prev();
};

const nextSlide = () => {
  cRef.value.next();
};

onMounted(fetchPersons);
</script>

<style lang="scss">
.persons {
  width: 1440px;
  height: 256px;
  background-color: var(--white-color);
  margin-left: 32px;

  &__inner {
    width: inherit;
    height: inherit;
    display: flex;
    justify-content: center;
    align-items: center;
    padding-left: 24px;
    padding-right: 24px;
  }
}
</style>
