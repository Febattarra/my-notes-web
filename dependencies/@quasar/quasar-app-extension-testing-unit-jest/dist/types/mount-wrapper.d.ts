import { Wrapper } from '@vue/test-utils';
import Vue, { ComponentOptions, VueConstructor } from 'vue';
import { QuasarMountOptions, VueClass } from './models';
export declare function mountWrapper<V extends Vue>(localVue: VueConstructor<Vue>, component: ComponentOptions<V>, options?: QuasarMountOptions): Wrapper<V>;
export declare function mountWrapper<V extends Vue>(localVue: VueConstructor<Vue>, component: VueClass<V>, options?: QuasarMountOptions): Wrapper<V>;
