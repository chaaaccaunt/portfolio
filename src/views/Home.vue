<template>
  <section class="home">
    <div class="home__pc">
      <h1 class="home__pc__text">Добро пожаловать!</h1>
      <p class="home__pc__text1" id="prof" v-if="!trigger">
        Меня зовут Сергей. Я начинающий {{ text }}
      </p>
      <p v-else class="home__pc__edit" :style="{ width: tWidth }">
        {{ text2 }}
      </p>
      <my-button class="home__btn"></my-button>
      <div class="home__rgbled"></div>
      <div class="home__table"></div>
    </div>
    <div class="home__keyboard">
      <key-layers
        v-for="(keys, index) in keyboard"
        :key="index"
        :keys="keys"
        @keyEmiter="keyEmiter"
        :shift="shift"
        :ctrl="ctrl"
        :alt="alt"
        :caps="caps"
      >
      </key-layers>
    </div>
  </section>
</template>

<script lang="ts">
import Vue from "vue";
import KeyLayers from "@/components/KeyBoard/KeyLayers.vue";
import Keys from "@/components/KeyBoard/keys";

export default Vue.extend({
  name: "Home",
  data() {
    return {
      text: "web-разработчик!",
      text2: "",
      trigger: false,
      tWidth: "",
      shift: false,
      ctrl: false,
      alt: false,
      caps: false,
      keyboard: [
        [] as Array<{
          val: string;
          val2: string | null;
          class: string;
        }>,
        [] as Array<{
          val: string;
          val2: string | null;
          class: string;
        }>,
        [] as Array<{
          val: string;
          val2: string | null;
          class: string;
        }>,
        [] as Array<{
          val: string;
          val2: string | null;
          class: string;
        }>,
        [] as Array<{
          val: string;
          val2: string | null;
          class: string;
        }>,
        [] as Array<{
          val: string;
          val2: string | null;
          class: string;
        }>,
      ],
    };
  },
  watch: {
    text2(val: string) {
      this.tWidth = val.length + "ch";
    },
  },
  methods: {
    async keyEmiter(val: { val: string; val2: string | undefined }) {
      if (
        (!val.val.length && !val.val2?.length) ||
        [
          "Insert",
          "Home",
          "Page Up",
          "Print Screen",
          "Scroll Lock",
          "Pause Breake",
          "Delete",
          "End",
          "Page Down",
          "Submenu",
          "F1",
          "F2",
          "F3",
          "F5",
          "F6",
          "F7",
          "F8",
          "F9",
          "F10",
          "F11",
          "F12",
        ].includes(val.val) ||
        (val.val === "F4" && !this.alt)
      ) {
        return;
      }
      if (!this.trigger) this.text = "";
      this.trigger = true;
      if (val.val === "Shift") return (this.shift = !this.shift);
      if (val.val === "Ctrl") return (this.ctrl = !this.ctrl);
      if (val.val === "Alt") return (this.alt = !this.alt);
      if (val.val === "Caps Lock") return (this.caps = !this.caps);
      if (val.val === "Backspace") {
        if (this.text2.length > 0)
          return (this.text2 = this.text2.slice(0, -1));
        return;
      }
      if (val.val === "Tab") {
        return (this.text2 += " ".repeat(4));
      }
      if (val.val === "Space") {
        return (this.text2 += " ");
      }
      if (val.val === "Esc" || val.val === "Enter") {
        return (this.text2 = "");
      }
      if (this.caps) {
        if (new RegExp(/[A-Z]/).test(val.val)) {
          if (this.shift) return (this.text2 += val.val.toLowerCase());
          return (this.text2 += val.val);
        }
      }
      if (this.shift) {
        if (new RegExp(/[A-Z]/).test(val.val)) return (this.text2 += val.val);
        return (this.text2 += val.val2);
      }
      if (this.ctrl) {
        if (val.val === "V") {
          this.text2 = "Для вставки текста из буфера нужны права.";
          return setTimeout(() => (this.text2 = ""), 2000);
        }
        if (val.val === "T") {
          return window.open("http://google.com", "_blank");
        }
        if (val.val === "W") {
          return window.close();
        }
      }
      if (this.alt) {
        if (val.val === "F4") {
          return window.close();
        }
      }
      if (this.alt && this.ctrl && val.val === "Delete") {
        return window.close();
      }
      this.text2 += val.val.toLowerCase();
    },
    keyboardCreator(): void {
      Keys.forEach((key: string[], index: number) => {
        key.forEach((str) => {
          if (new RegExp(/\_{2}/).test(str)) {
            return this.keyboard[index].push({
              val: str.split("__")[0],
              val2: str.split("__")[1],
              class: "",
            });
          }
          if (
            str === "big" ||
            str === "small" ||
            str === "medium" ||
            str === "logo" ||
            str === "bigest" ||
            str === "Windows" ||
            str === "up" ||
            str === "right" ||
            str === "left" ||
            str === "down"
          ) {
            return this.keyboard[index].push({
              val: "",
              val2: "",
              class: str,
            });
          }
          this.keyboard[index].push({
            val: str.split("__")[0],
            val2: null,
            class: str,
          });
        });
      });
    },
  },
  components: {
    KeyLayers,
  },
  mounted() {
    this.keyboardCreator();
    document.addEventListener("readystatechange", () => {
      if (document.readyState === "complete") {
        let s = 0;
        const list = [
          "web-разработчик!",
          "fullstack разработчик!",
          "программиcт!",
        ];
        const prof = document.getElementById("prof")!;
        prof.style.width = 32 + list[s].length + "ch";
        const pushCh = (): void => {
          let i = 0;
          this.text = "";
          const int = setInterval(() => {
            if (this.trigger) {
              return clearInterval(main);
            }
            if (i >= list[s].length) return clearInterval(int);
            this.text = this.text + list[s][i];
            prof.style.width = parseInt(prof.style.width) + 1 + "ch";
            i++;
          }, 100);
        };
        const main = setInterval(() => {
          if (this.trigger) {
            return clearInterval(main);
          }
          const eraser = setInterval(() => {
            if (parseInt(prof.style.width) < 33) {
              s = s < list.length - 1 ? s + 1 : 0;
              pushCh();
              return clearInterval(eraser);
            }
            prof.style.width = parseInt(prof.style.width) - 1 + "ch";
          }, 30);
        }, 6000);
        if (this.trigger) {
          clearInterval(main);
        }
      }
      document.addEventListener("visibilitychange", () => {
        if (document.visibilityState === "visible") {
          document.location.reload();
        }
        if (document.hidden) this.trigger = true;
      });
    });
  },
});
</script>

<style lang="scss">
.home {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  position: relative;
  background-color: rgb(32, 57, 90);
  z-index: 0;
  &__table {
    position: absolute;
    bottom: -340px;
    width: 1200px;
    height: 350px;
    background-color: rgb(190, 106, 41);
    border-radius: 50px;
    transform: perspective(650px) rotateX(30deg);
    border-bottom: 10px solid rgb(75, 42, 17);
  }
  &__btn {
    margin: 40px 120px 0 0;
    position: relative;
    align-self: flex-end;
    &::before {
      content: "";
      position: absolute;
      border-right: 4px solid #009fff;
      border-left: 4px solid #ec2f4b;
      width: 75px;
      height: 20px;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      transform: scaleX(0);
      background: linear-gradient(
        45deg,
        #009fff,
        #ec2f4b,
        #009fff,
        #ec2f4b,
        #009fff
      );
      background-size: 400%;
      transform-origin: center;
      animation: mbattom 0.5s linear 5s forwards,
        mbattombg 15s linear infinite alternate;
      z-index: 2;
    }
    &::after {
      content: "Подробнее";
      position: absolute;
      width: 75px;
      height: 20px;
      display: grid;
      place-items: center;
      top: 0;
      right: 0;
      opacity: 0;
      bottom: 0;
      left: 0;
      z-index: 2;
      color: rgb(200, 251, 255);
      font-size: 0.8rem;
      animation: out 0.5s linear 6s forwards;
    }
  }
  &__pc {
    width: 720px;
    height: 420px;
    margin-bottom: 60px;
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    background-color: #f0eeef;
    border: 10px solid #252525;
    border-radius: 8px;
    &::before {
      content: "Monitor";
      position: absolute;
      right: -1px;
      left: 0;
      bottom: -1px;
      height: 40px;
      display: flex;
      flex-direction: column;
      align-items: center;
      color: #8d8a8c;
      justify-content: center;
      background-color: #252525;
      z-index: 8;
    }
    &::after {
      content: "";
      height: 20px;
      background-color: #808080;
      border-right: 1px solid #252525;
      border-left: 1px solid #252525;
      position: absolute;
      right: 330px;
      left: 330px;
      bottom: -24px;
      z-index: -1;
    }
    &__text {
      margin: 0;
      font-size: 1.2rem;
      color: rgb(85, 85, 85);
      animation: textstart 1s linear 1;
    }
    &__text1 {
      margin: 0;
      width: 47ch;
      height: 18px;
      text-align: left;
      opacity: 0;
      overflow: hidden;
      border-right: 3px solid rgb(85, 85, 85);
      white-space: nowrap;
      font-size: 1rem;
      animation: fborder 1.1s step-end infinite 4s,
        print 3s steps(47) 1s forwards;
    }
    &__edit {
      margin: 0;
      width: 0;
      font-size: 1rem;
      height: 18px;
      overflow: hidden;
      border-right: 3px solid #000;
      animation: fborder 1.1s step-end infinite;
    }
  }
  &__rgbled {
    position: absolute;
    z-index: -1;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    &::before,
    &::after {
      content: "";
      position: absolute;
      width: 250px;
      height: 100%;
      animation: rgbcolor 20s linear infinite alternate;
    }
    &::before {
      right: 0;
    }
    &::after {
      left: 0;
    }
  }
  &__keyboard {
    position: relative;
    display: flex;
    flex-direction: column;
    background-color: rgb(41, 41, 41);
    border-radius: 10px;
    font-size: 0.4rem;
    padding: 15px;
    perspective-origin: center;
    perspective: 400px;
    transform: perspective(550px) rotateX(25deg);
    box-shadow: 0 5px 0 #000;
  }
}
@keyframes rgbcolor {
  0% {
    box-shadow: 0 0 10px rgb(255, 69, 69), 0 0 20px rgb(255, 69, 69),
      0 0 30px rgb(255, 69, 69), 0 0 40px rgb(255, 69, 69),
      0 0 50px rgb(255, 69, 69), 0 0 60px rgb(255, 69, 69),
      0 0 70px rgb(255, 69, 69), 0 0 80px rgb(255, 69, 69),
      0 0 90px rgb(255, 69, 69), 0 0 100px rgb(255, 69, 69),
      0 0 110px rgb(255, 69, 69), 0 0 120px rgb(255, 69, 69),
      0 0 130px rgb(255, 69, 69), 0 0 140px rgb(255, 69, 69),
      0 0 150px rgb(255, 69, 69), 0 0 160px rgb(255, 69, 69),
      0 0 170px rgb(255, 69, 69);
  }
  50% {
    box-shadow: 0 0 10px rgb(69, 255, 78), 0 0 20px rgb(69, 255, 78),
      0 0 30px rgb(69, 255, 78), 0 0 40px rgb(69, 255, 78),
      0 0 50px rgb(69, 255, 78), 0 0 60px rgb(69, 255, 78),
      0 0 70px rgb(69, 255, 78), 0 0 80px rgb(69, 255, 78),
      0 0 90px rgb(69, 255, 78), 0 0 100px rgb(69, 255, 78),
      0 0 110px rgb(69, 255, 78), 0 0 120px rgb(69, 255, 78),
      0 0 130px rgb(69, 255, 78), 0 0 140px rgb(69, 255, 78),
      0 0 150px rgb(69, 255, 78), 0 0 160px rgb(69, 255, 78),
      0 0 170px rgb(69, 255, 78);
  }
  100% {
    box-shadow: 0 0 10px rgb(69, 48, 255), 0 0 20px rgb(69, 48, 255),
      0 0 30px rgb(69, 48, 255), 0 0 40px rgb(69, 48, 255),
      0 0 50px rgb(69, 48, 255), 0 0 60px rgb(69, 48, 255),
      0 0 70px rgb(69, 48, 255), 0 0 80px rgb(69, 48, 255),
      0 0 90px rgb(69, 48, 255), 0 0 100px rgb(69, 48, 255),
      0 0 110px rgb(69, 48, 255), 0 0 120px rgb(69, 48, 255),
      0 0 130px rgb(69, 48, 255), 0 0 140px rgb(69, 48, 255),
      0 0 150px rgb(69, 48, 255), 0 0 160px rgb(69, 48, 255),
      0 0 170px rgb(69, 48, 255);
  }
}
@keyframes out {
  to {
    opacity: 1;
  }
}
@keyframes fborder {
  0% {
    border-color: rgb(56, 56, 56);
  }
  50% {
    border-color: transparent;
  }
  100% {
    border-color: rgb(56, 56, 56);
  }
}
@keyframes mbattom {
  from {
    transform: scaleX(0);
  }
  to {
    transform: scaleX(1);
    border-right: none;
    border-left: none;
    border-radius: 6px;
  }
}
@keyframes mbattombg {
  0% {
    background-position: left;
  }
  100% {
    background-position: right;
  }
}
@keyframes textstart {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
    color: rgb(85, 85, 85);
  }
}
@keyframes print {
  from {
    opacity: 1;
    width: 0;
  }
  to {
    opacity: 1;
  }
}
</style>
