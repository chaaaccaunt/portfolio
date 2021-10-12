<template>
  <section class="about">
    <header>
      <h1 class="about__title title">Здравствуйте, меня зовут Сергей!</h1>
    </header>
    <div class="about-wrp">
      <description-list v-for="(skill, index) in skillList" :key="index" :termin="skill.termin" :list="skill.list"></description-list>
    </div>
    <figure>
      <img @click="popupImage" src="@/assets/photo.jpg" alt="my photo" />
      <figcaption>Фото 2016 года</figcaption>
    </figure>
    <footer>
      <p>Уровень знаний всех перечисленных навыков неизвестен. Точнее сказать, никто не оценивал. Сам считаю, что моих знаний для начала достаточно.</p>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "About",
  data() {
    return {
      skillList: [
        {
          termin: "Кто я:",
          list: ["Я начинающий full-stack разработчик."],
        },
        {
          termin: "Опыт:",
          list: ["Начал с июня 2019."],
        },
        {
          termin: "Навыки:",
          list: ["TypeScript <-> JavaScript;", "SCSS <-> CSS3;", "HTML5."],
        },
        {
          termin: "Фреймворки:",
          list: [
            "Frontend: Vue;",
            "Backend: NodeJS",
            "Backend API: ExpressJS;",
            "WebSocket на платформе NodeJS: Socket-IO;",
            "TelegramBot на платформе NodeJS: Telegraf;",
            "SQL на платформе NodeJS: Sequelize.",
          ],
        },
        {
          termin: "Изучаемые JavaScript библиотеки:",
          list: ["Axios;", "Joi(@hapi/joi);", "JsonWebToken;", "MomentJS."],
        },
      ],
    };
  },
  methods: {
    popupImage(val: PointerEvent) {
      console.log(val.target);
    },
  },
});
</script>

<style lang="scss">
.about {
  display: grid;
  grid-template-columns: 1fr 40%;
  grid-template-areas:
    "header header"
    "about figure"
    "footer footer";
  & header {
    grid-area: header;
  }
  &-wrp {
    grid-area: about;
  }
  & figure {
    margin: 1vw 0;
    padding: 0;
    display: block;
    grid-area: figure;
    & img {
      display: block;
      margin: 0 auto;
      width: 80%;
    }
    & figcaption {
      text-align: center;
    }
  }
  & footer {
    grid-area: footer;
  }
  &__block {
    dt {
      font-weight: bold;
    }
  }
}
</style>
