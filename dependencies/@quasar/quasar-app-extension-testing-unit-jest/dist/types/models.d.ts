import type { mount } from '@vue/test-utils';
import { QuasarPluginOptions } from 'quasar';
import Vue, { PluginFunction, PluginObject } from 'vue';
/**
 * Utility type to declare an extended Vue constructor
 */
export declare type VueClass<V extends Vue> = (new (...args: any[]) => V) & typeof Vue;
export declare type VueMountOptions = Parameters<typeof mount>[1];
export declare type VuePlugin = PluginObject<any> | PluginObject<never> | PluginFunction<any> | PluginFunction<never>;
export declare type VuePluginOptions = any[];
/**
 * `mountQuasar` options interface
 */
export interface QuasarMountOptions {
    mount?: {
        type?: 'full' | 'shallow';
    } & VueMountOptions;
    quasar?: Partial<QuasarPluginOptions>;
    propsData?: Record<string, any>;
    /** Vue plugins to load */
    plugins?: (VuePlugin | [VuePlugin, ...VuePluginOptions])[];
}
