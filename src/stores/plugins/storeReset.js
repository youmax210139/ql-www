import _ from "lodash";
import { toRaw } from "vue";

export default function storeReset({ store }) {
  const initialState = _.cloneDeep(toRaw(store.$state));
  store.$reset = () => store.$patch(_.cloneDeep(initialState));
}
