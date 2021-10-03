import { ComponentCustomProperties } from "vue";

declare module "@vue/runtime-core" {
  interface iMain {
    state: boolean;
    type: "error" | "message" | "";
    message: string;
  }

  interface ComponentCustomProperties {
    $root: {
      $data: {
        handler: iMain[];
      };
    };
  }
}
