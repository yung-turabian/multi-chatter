import PocketBase from "pocketbase";
import { writable } from "svelte/store";
const url = "https://platia.pockethost.io/";
export const pb = new PocketBase(url);

export const currentUser = writable(pb.authStore.model);

pb.authStore.onChange((auth) => {
  console.log("authStore changed", auth);
  currentUser.set(pb.authStore.model);
});
