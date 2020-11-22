// loading.js
import LoadingComponent from './loading.vue'
import { provide, inject, reactive, createApp, h } from 'vue';

let $vm,toastWrapper

export default {
    install:(app, options) => {
    
        // app.config.globalProperties.$translate = key => {
        //     return key.split('.').reduce((o, i) => {
        //       if (o) return o[i]
        //     }, i18n)
        //   }
      
        //   app.provide('i18n', options)
        if (!$vm) {
            // const LoadingPlugin = app.createApp(LoadingComponent);
            $vm = createApp(LoadingComponent);

            // $vm = new LoadingPlugin({
            //     el: document.createElement('div')
            // });

            // document.body.appendChild($vm.$el);
            
                toastWrapper = document.createElement('div');
                toastWrapper.id = 'lx-toast';
                document.body.appendChild(toastWrapper);
                $vm.mount('#lx-toast');
            

        }
        // debugger
        $vm.show = true;

        let loading = {
            show(text) {
                $vm.show = true;

                $vm.text = text;
            },
            hide() {
                $vm.show = false;
            }
        };

        if (!app.$loading) {
            app.$loading = loading;
        }

        // app.config.globalProperties.$loading = app.$loading;

        app.mixin({
            created() {
                this.$loading = app.$loading;
            }
        })
    }
}