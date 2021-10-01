<template>
  <div class="contacts">
    <div class="contacts__email">
      <h4>Email</h4>
      <p>chaaaccaunt@gmail.com</p>
      <a class="contacts__email-address" href="mailto:chaaaccaunt@gmail.com?subject=По поводу портфолио" target="_blank"></a>
      <my-button :link="'chaaaccaunt@gmail.com'">copy</my-button>
    </div>
    <div class="contacts__links">
      <h4>Ссылки</h4>
      <div class="contacts__links-wrp">
        <links v-for="l in links" :key="l.image" :image="l.image" :link="l.link">{{ l.image }}</links>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Contacts",
  data() {
    return {
      links: [
        {
          image: "Codewars",
          link: "https://www.codewars.com/users/chydym",
        },
        {
          image: "GitHub",
          link: "https://github.com/chaaaccaunt",
        },
      ],
    };
  },
});
</script>

<style lang="scss">
.contacts {
  height: 70%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  &__links {
    width: 250px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    &-wrp {
      display: flex;
      width: 250px;
      justify-content: space-around;
      flex-wrap: wrap;
    }
  }
  &__email {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    &-address {
      display: block;
      width: 50px;
      height: 50px;
      background: no-repeat center/100% url("~@/assets/icons/mailto.png");
    }
  }
}
</style>
