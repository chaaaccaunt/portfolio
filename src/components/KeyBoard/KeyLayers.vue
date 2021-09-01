<template>
  <div class="home__keyboard-layer">
    <div
      v-for="(key, index) in keys"
      :key="index"
      class="home__keyboard-layer-key"
      :class="[
        key.class,
        {
          active:
            (key.val === 'Shift' && shift) ||
            (key.val === 'Alt' && alt) ||
            (key.val === 'Ctrl' && ctrl) ||
            (key.val === 'Caps Lock' && caps),
        },
      ]"
      @click="$emit('keyEmiter', { val: key.val, val2: key.val2 })"
    >
      <p>{{ key.val }}</p>
      <p v-if="key.val2">{{ key.val2 }}</p>
    </div>
  </div>
</template>

<script lang="ts">
import Vue, { PropType } from "vue";

export default Vue.extend({
  props: {
    keys: {
      type: Array as PropType<
        {
          val: string;
          val2: string | null;
          class: string;
        }[]
      >,
      required: true,
    },
    shift: {
      type: Boolean as PropType<boolean>,
      default: () => {
        return false;
      },
    },
    ctrl: {
      type: Boolean as PropType<boolean>,
      default: () => {
        return false;
      },
    },
    alt: {
      type: Boolean as PropType<boolean>,
      default: () => {
        return false;
      },
    },
    caps: {
      type: Boolean as PropType<boolean>,
      default: () => {
        return false;
      },
    },
  },
  name: "keylayer",
});
</script>

<style lang="scss">
.home__keyboard {
  &-layer {
    display: flex;
    flex-wrap: wrap;
    &-key {
      width: 28px;
      height: 18px;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 1px solid rgb(20, 20, 20);
      text-align: center;
      border-radius: 4px;
      margin: 1px;
      color: rgb(207, 207, 207);
      cursor: pointer;
      user-select: none;
      box-shadow: 0 2px 0 #000;
      p {
        margin: 0;
        padding: 0;
        line-height: 1.1;
      }
      &:hover {
        background-color: rgb(179, 179, 179);
        color: #000;
      }
    }
  }
  & > div:nth-child(1) {
    p {
      line-height: 1.07;
    }
  }
  & > div:nth-child(3) > div.home__keyboard-layer-key.Enter {
    width: 34px;
    position: relative;
    border-bottom: none;
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 4px;
    box-shadow: 0 0 0 transparent;
    &::before {
      content: "";
      width: 24px;
      height: 22px;
      position: absolute;
      right: -1px;
      bottom: -23px;
      border-bottom: 1px solid rgb(20, 20, 20);
      border-right: 1px solid rgb(20, 20, 20);
      border-left: 1px solid rgb(20, 20, 20);
      border-bottom-left-radius: 4px;
      border-bottom-right-radius: 4px;
      box-shadow: 0 2px 0 #000;
    }
    &::after {
      content: "";
      position: absolute;
      left: -1px;
      bottom: -1px;
      width: 10px;
      height: 10px;
      border-bottom: 1px solid rgb(20, 20, 20);
      border-bottom-left-radius: 6px;
      box-shadow: 0 2px 0 #000;
    }
    &:hover::before {
      background-color: rgb(179, 179, 179);
    }
  }
  & > div:nth-child(5) > div.home__keyboard-layer-key.Enter {
    width: 28px;
    position: relative;
    border: none;
    box-shadow: 0 0 0 transparent;
    p {
      display: none;
    }
    &::after {
      content: "Enter";
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      width: 28px;
      height: 40px;
      border: 1px solid rgb(20, 20, 20);
      border-radius: 4px;
      box-shadow: 0 2px 0 #000;
    }
    &:hover::after {
      background-color: rgb(179, 179, 179);
    }
  }
  & > div:nth-child(3) > div.home__keyboard-layer-key.\+ {
    border: none;
    position: relative;
    box-shadow: 0 0 0 transparent;
    p {
      display: none;
    }
    &::before {
      content: "+";
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      position: absolute;
      top: 0;
      right: 0;
      left: 0;
      width: 28px;
      height: 40px;
      border: 1px solid rgb(20, 20, 20);
      border-radius: 4px;
      box-shadow: 0 2px 0 #000;
    }
    &:hover:before {
      background-color: rgb(179, 179, 179);
    }
  }
  & > div:nth-child(6) > div.home__keyboard-layer-key.\30 {
    width: 60px;
  }
  & > div:nth-child(2) > div.home__keyboard-layer-key.Num.Lock {
    color: rgb(114, 255, 71);
  }
}
.logo,
.big,
.medium,
.bigest,
.small {
  margin: 1px;
  border: 1px solid transparent;
  box-shadow: 0 0 0 transparent;
  &:hover {
    background-color: rgb(41, 41, 41);
  }
}
.logo {
  width: 80px;
  position: relative;
  &::before {
    content: "Wireless Keyboard";
    position: absolute;
    top: -10px;
    right: 0px;
    left: 20px;
    bottom: 0;
    width: 100px;
    display: flex;
    border-radius: 4px;
    flex-direction: column;
    font-size: 0.8rem;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #8d8a8c;
  }
}
.big {
  width: 28px;
}
.bigest {
  width: 24px;
}
.medium {
  width: 10px;
}
.small {
  width: 5px;
}
.Backspace {
  width: 56px;
}
.Tab {
  width: 50px;
}
.Caps {
  width: 60px;
}
.Shift {
  width: 74px;
}
.Space {
  width: 248px;
}
.up,
.right,
.left,
.down {
  position: relative;
  &::before {
    content: "->";
  }
}
.down::before {
  transform: rotate(90deg);
}
.left::before {
  transform: rotate(180deg);
}
.up::before {
  transform: rotate(270deg);
}
.Windows {
  background-image: url("~@/assets/images/w.png");
  background-position: center;
  background-size: 60%;
  background-repeat: no-repeat;
}
.active {
  background-color: rgb(138, 138, 138);
}
</style>
