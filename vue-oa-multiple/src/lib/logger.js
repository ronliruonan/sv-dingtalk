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
        // eslint-disable-next-line
        dd.device.notification.toast({
            icon: 'success',
            text: "[INFO]:" + msg
        });
    },
    error: msg => {
        if (!HASCONSOLE) return;
        if (typeof msg !== 'string')
            msg = JSON.stringify(msg);
        
        // eslint-disable-next-line
        console.error("[ERROR]:", msg);
        // eslint-disable-next-line
        dd.device.notification.toast({
            icon: 'error',
            text: "[ERROR]:" + msg
        });
    }
};

export default logger;
