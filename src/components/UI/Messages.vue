<template>
  <div class="message" :class="{ 'message-on': status }">
    <h4 v-if="type === 'error'" class="message-title">Ошибка</h4>
    <p><slot></slot></p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  props: {
    status: {
      type: Boolean,
      default() {
        return false;
      },
    },
    type: {
      type: String,
      default() {
        return "";
      },
    },
  },
  name: "Messages",
});
</script>

<style lang="scss">
.message {
  position: absolute;
  bottom: 0;
  right: 50px;
  transition: bottom 0.5s;
  padding: 0.2em 0.3em;
  border-radius: 10px;
  display: none;
  opacity: 0;
  background-color: rgb(125, 162, 209);
  &-title {
    text-align: center;
    color: rgb(221, 103, 103);
  }
  & p {
    color: rgb(51, 51, 51);
  }
  &-on {
    display: block;
    animation: showmessage 0.2s linear forwards, hidemessage 0.2s linear 1 alternate 2s forwards;
  }
  @keyframes showmessage {
    to {
      bottom: 100px;
      opacity: 1;
    }
  }
  @keyframes hidemessage {
    to {
      bottom: 50px;
      opacity: 0;
    }
  }
}

@media only screen and (max-width: 768px) {
  .message {
    bottom: 0;
    right: unset;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
