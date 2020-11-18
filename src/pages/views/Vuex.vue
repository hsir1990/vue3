<template>
    <div id="uvex1">
        uvex1
        <!--不清楚为啥放在句首就不能使用-->
        <!-- {{ this.$store.state.count }} -->
        {{ countss }}

        {{ this.$store.state.count }}

        {{ this.$store.getters.getCount }}
        <button @click="add">+</button>
        <button @click="del">-</button>
        <alertbox> 用了插槽这句话就不用省略了 </alertbox>
    </div>
</template>

<style lang="less" scoped>
#uvex1 {
    font-size: 30px;
    color: #bbb;
}
</style>
<script>
import alertbox from "../../components/solt/alert-box.vue";
import { mapState, mapGetters, mapActions } from "vuex";
export default {
    name: "vuex1",
    props: {
        msg: String,
    },
    components: {
        alertbox,
    },
    // data() {
    //     return{
    //         sss:this.$store.state.count
    //     }

    // },
    data() {
        return {
            countss: this.$store.state.count,
        };
    },
    methods: {
        add() {
            //mutation
            // this.$store.commit('addCount',1)
            //Actions
            this.$store.dispatch("getAddCount", 1);
        },
        del() {
            //mutation
            // this.$store.commit('delCount',1)
            //Actions
            this.$store.dispatch("getDelCount", 1);
        },
        sss() {
            console.log(
                `1111111-----this.$store.state.count` + this.$store.state.count
            );
        },
    },
    created() {
        // 获取tree结构
        this.sss();
    },
    computed: {
        //通过配合 ... 拓展符号
        ...mapState({
            count1: (state) => state.count,
        }),
        ...mapGetters(["getCount", "isShow"]),
    },
};
</script>
