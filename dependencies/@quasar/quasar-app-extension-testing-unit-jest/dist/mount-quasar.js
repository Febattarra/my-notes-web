"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mountQuasar = void 0;
const create_local_quasar_1 = require("./create-local-quasar");
const mount_wrapper_1 = require("./mount-wrapper");
function mountQuasar(
// eslint-disable-next-line @typescript-eslint/no-explicit-any
component, options = {}) {
    const localVue = create_local_quasar_1.createLocalVueForQuasar(options);
    return mount_wrapper_1.mountWrapper(localVue, component, options);
}
exports.mountQuasar = mountQuasar;
//# sourceMappingURL=mount-quasar.js.map