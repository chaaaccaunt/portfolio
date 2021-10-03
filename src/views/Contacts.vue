<template>
  <h1 class="title">Контакты и ссылки</h1>
  <div class="contacts">
    <h4>Контакты</h4>
    <div class="contacts__wrp">
      <my-links v-for="(cont, index) in contacts" :key="index" :image="cont.image" :link="cont.link">{{ cont.name }}</my-links>
    </div>
    <h4>Ссылки</h4>
    <div class="contacts__wrp">
      <my-links v-for="(link, index) in links" :key="index" :image="link.image" :link="link.link">{{ link.name }}</my-links>
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
          image: "Codewars.png",
          name: "Codewars",
          link: "https://www.codewars.com/users/chydym",
        },
        {
          image: "GitHub.png",
          name: "GitHub",
          link: "https://github.com/chaaaccaunt",
        },
      ],
      contacts: [
        {
          image: "email.jpg",
          name: "Email",
          link: "mailto:chaaaccaunt@gmail.com?subject=По поводу портфолио",
        },
        {
          image: "telegram.png",
          name: "Telegram",
          link: "https://t.me/SChydym",
        },
      ],
    };
  },
});
</script>
<style lang="scss">
.contacts {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  & h4 {
    margin: 1vw 0;
  }
  & h4:nth-child(1) {
    margin: 1vw 0 1vw 0;
  }
  &__wrp {
    min-width: 15vw;
    margin: 1vw 0;
    display: flex;
    justify-content: space-between;
  }
}
@media screen and (min-width: 769px) and (max-width: 1024px) {
  .contacts {
    &__wrp {
      min-width: 20vw;
    }
  }
}
@media screen and (min-width: 481px) and (max-width: 768px) {
  .contacts {
    &__wrp {
      min-width: 25vw;
    }
  }
}
@media screen and (min-width: 320px) and (max-width: 480px) {
  .contacts {
    &__wrp {
      min-width: 30vw;
    }
  }
}
</style>
