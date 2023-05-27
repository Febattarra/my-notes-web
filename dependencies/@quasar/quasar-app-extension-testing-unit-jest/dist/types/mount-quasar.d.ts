import { Wrapper } from '@vue/test-utils';
import Vue, { ComponentOptions } from 'vue';
import { QuasarMountOptions, VueClass } from './models';
export declare function mountQuasar<V extends Vue>(component: ComponentOptions<V>, options?: QuasarMountOptions): Wrapper<V>;
export declare function mountQuasar<V extends Vue>(component: VueClass<V>, options?: QuasarMountOptions): Wrapper<V>;
