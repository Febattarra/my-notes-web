"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createLocalVueForQuasar = void 0;
const test_utils_1 = require("@vue/test-utils");
const quasar_1 = require("quasar");
function createLocalVueForQuasar({ quasar, plugins, mount, }) {
    var _a;
    const localVue = (_a = mount === null || mount === void 0 ? void 0 : mount.localVue) !== null && _a !== void 0 ? _a : test_utils_1.createLocalVue();
    // Quasar skips installation if it already went through it, but this applies to different Vue instances too
    // Here we reset the installation flag to allow the plugin to be correctly installed on another Vue instance
    quasar_1.Quasar.__qInstalled = undefined;
    localVue.use(quasar_1.Quasar, quasar);
    (plugins !== null && plugins !== void 0 ? plugins : []).forEach((pluginDescriptor) => {
        if (!Array.isArray(pluginDescriptor)) {
            pluginDescriptor = [pluginDescriptor];
        }
        const [plugin, ...options] = pluginDescriptor;
        localVue.use(plugin, ...options);
    });
    // (options.bootFunctions ?? []).forEach(bootFn => {
    //   bootFn({ app, store, router, Vue: localVue, ssrContext });
    // });
    return localVue;
}
exports.createLocalVueForQuasar = createLocalVueForQuasar;
//# sourceMappingURL=create-local-quasar.js.map