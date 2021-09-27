<template>
  <section class="skills">
    <header>
      <h1 class="skills__title title">Здравствуйте, меня зовут Сергей!</h1>
    </header>
    <dl class="skills__block">
      <dt>Кто я:</dt>
      <dd>
        <ul type="circle">
          <li>Я начинающий full-stack разработчик.</li>
        </ul>
      </dd>
    </dl>
    <dl class="skills__block">
      <dt>Опыт:</dt>
      <dd>
        <ul type="circle">
          <li>Начал с июня 2019.</li>
        </ul>
      </dd>
    </dl>
    <dl class="skills__block">
      <dt>Навыки:</dt>
      <dd>
        <ul type="circle">
          <li>TypeScript &#x3c;=&#x3e; JavaScript.</li>
          <li>SCSS &#x3c;=&#x3e; CSS3.</li>
          <li>HTML5</li>
        </ul>
      </dd>
    </dl>
    <dl class="skills__block">
      <dt>Фреймворки:</dt>
      <dd>
        <ul type="circle">
          <li>
            <span>Frontend:</span>
            <span>&#xa0;Vue.</span>
          </li>
        </ul>
      </dd>
      <dd>
        <ul type="circle">
          <li><span>Backend на платформе NodeJS:</span> <span>&#xa0;ExpressJS, Telegraf.</span></li>
        </ul>
      </dd>
      <dd>
        <ul type="circle">
          <li>
            <span>SQL на платформе NodeJS:</span>
            <span>&#xa0;Sequelize.</span>
          </li>
        </ul>
      </dd>
    </dl>
    <dl class="skills__block">
      <dt>Изучаемые JavaScript библиотеки:</dt>
      <dd>
        <ul type="circle">
          <li>Axios, Socket-IO, Joi(@hapi/joi), JsonWebToken.</li>
        </ul>
      </dd>
    </dl>
    <footer>
      <p>Уровень знаний всех перечисленных навыков не известно. Точнее, никто не оценивал. А по мне, моих знаний для начала достаточно.</p>
    </footer>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Skills",
});
</script>

<style lang="scss">
.skills {
  font-size: 1.3em;
  &__title {
    text-align: center;
    font-size: 2rem;
  }
  &__block {
    dt {
      font-weight: bold;
      font-size: 1.2rem;
    }
  }
}
</style>
