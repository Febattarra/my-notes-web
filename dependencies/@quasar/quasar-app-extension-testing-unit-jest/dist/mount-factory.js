"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountFactory = void 0;
const create_local_quasar_1 = require("./create-local-quasar");
const mount_wrapper_1 = require("./mount-wrapper");
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function mountFactory(component, options = {}) {
    // Cache localVue instance, as options cannot change anymore at this point
    const localVue = create_local_quasar_1.createLocalVueForQuasar(options);
    return (propsData) => mount_wrapper_1.mountWrapper(localVue, component, Object.assign(Object.assign({}, options), { propsData: Object.assign(Object.assign({}, options.propsData), propsData) }));
}
exports.mountFactory = mountFactory;
//# sourceMappingURL=mount-factory.js.map