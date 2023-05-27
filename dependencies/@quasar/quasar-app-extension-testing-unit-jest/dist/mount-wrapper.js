"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountWrapper = void 0;
const test_utils_1 = require("@vue/test-utils");
function mountWrapper(localVue, 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
component, options = {}) {
    var _a, _b;
    const mountFn = ((_a = options.mount) === null || _a === void 0 ? void 0 : _a.type) === 'full' ? test_utils_1.mount : test_utils_1.shallowMount;
    // mount functions usually require a Vue component,
    //  but due to Jest extensions resolution we get them
    //  working even when we provide only the script part
    // See https://github.com/vuejs/vue-jest/issues/188
    return mountFn(component, Object.assign(Object.assign({}, options.mount), { propsData: Object.assign(Object.assign({}, (_b = options.mount) === null || _b === void 0 ? void 0 : _b.propsData), options.propsData), localVue }));
}
exports.mountWrapper = mountWrapper;
//# sourceMappingURL=mount-wrapper.js.map