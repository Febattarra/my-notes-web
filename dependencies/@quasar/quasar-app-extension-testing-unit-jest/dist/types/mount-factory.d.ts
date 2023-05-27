import { Wrapper } from '@vue/test-utils';
import Vue, { ComponentOptions } from 'vue';
import { VueClass, QuasarMountOptions } from './models';
export declare function mountFactory<V extends Vue>(component: VueClass<V>, options?: QuasarMountOptions): (propsData?: QuasarMountOptions['propsData']) => Wrapper<V>;
export declare function mountFactory<V extends Vue>(component: ComponentOptions<V>, options?: QuasarMountOptions): (propsData?: QuasarMountOptions['propsData']) => Wrapper<V>;
