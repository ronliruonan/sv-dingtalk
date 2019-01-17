/**
 * Created by Ron on 2019-1-14
 */

import { HASCONSOLE } from "./env";

const logger = {
  warn: (msg, e) => {
    if (!HASCONSOLE) return;
    // eslint-disable-next-line
    console.warn("[Warning]", msg);

    if (e) {
      throw e;
    } else {
      const warning = new Error("WARNING STACK TRACE");
      // eslint-disable-next-line
      console.warn(warning.stack);
    }
  },
  info: msg => {
    if (!HASCONSOLE) return;
    // eslint-disable-next-line
    console.info("[INFO]:", msg);
  },
  error: msg => {
    if (!HASCONSOLE) return;
    // eslint-disable-next-line
    console.error("[ERROR]:", msg);
    // eslint-disable-next-line
    // alert(msg);
  }
};

export default logger;
