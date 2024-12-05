import { initApi } from "./initApi";

console.log("process.env.EXPO_PUBLIC_API", process.env.EXPO_PUBLIC_API);
const rootApi = initApi(process.env.EXPO_PUBLIC_API);

export default rootApi;
