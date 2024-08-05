import initApi from "./initApi";
import preInitApi from "./preInitApi";

const rootApi = initApi(process.env.EXPO_PUBLIC_LINK_API);
const predictApi = preInitApi(process.env.EXPO_PUBLIC_LINK_API);
const vietmapAPI = initApi("https://maps.vietmap.vn/api/");

export default rootApi;

export { predictApi, vietmapAPI };
