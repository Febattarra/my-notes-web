"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setCookies = void 0;
const quasar_1 = require("quasar");
function setCookies(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
cookies, ssrContext) {
    const cookieStorage = ssrContext ? quasar_1.Cookies.parseSSR(ssrContext) : quasar_1.Cookies;
    Object.entries(cookies).forEach(([key, value]) => {
        cookieStorage.set(key, value);
    });
}
exports.setCookies = setCookies;
//# sourceMappingURL=set-cookies.js.map