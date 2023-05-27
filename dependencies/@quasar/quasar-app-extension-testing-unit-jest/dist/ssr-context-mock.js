"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ssrContextMock = void 0;
function ssrContextMock() {
    return {
        req: {
            headers: {},
        },
        res: {
            setHeader: () => undefined,
        },
        url: '',
    };
}
exports.ssrContextMock = ssrContextMock;
//# sourceMappingURL=ssr-context-mock.js.map