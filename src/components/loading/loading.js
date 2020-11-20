// loading.js
import LoadingComponent from './loading.vue'

let $vm

export default {
    install : (app, options)=>{
        if (!$vm) {
            const LoadingPlugin = app.extend(LoadingComponent);

            $vm = new LoadingPlugin({
                el: document.createElement('div')
            });

            document.body.appendChild($vm.$el);
        }

        $vm.show = false;

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

        app.prototype.$loading = app.$loading;

        app.mixin({
            created() {
                this.$loading = app.$loading;
            }
        })
    }
}