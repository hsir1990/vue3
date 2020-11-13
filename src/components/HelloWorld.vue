<template>
<h1>{{ msg }}</h1>
<button @click="count++">count is: {{ count }}</button>
<p>
    Edit <code>components/HelloWorld.vue</code> to test hot module replacement.
</p>
<div id="app1">
    <input type="text" v-model="name" />
    <ul>
        <li v-for="cat in cats">{{ cat.name }}</li>
    </ul>
</div>
<div id="main" style="width: 600px;height:400px;"></div>
</template>

<style lang="less" scoped>
@import './hello.less';

#app1 {
    list-style: none;
    background-color: #ff0;

    input {
        background-color: purple;
        border-bottom: 1px solid #ccc;
        line-height: 60px;
        color: #fff;
        font-size: 20px;
    }
}
</style>

<script>
// import echarts from 'echarts'
export default {
    name: "HelloWorld",
    props: {
        msg: String,
    },
    data() {
        function aa() {
            // debugger
            // alert(11)
        }
        aa();
        return {
            count: 0,
            cats: [{
                    name: "cat1",
                    age: 11,
                },
                {
                    name: "cat2",
                    age: 22,
                },
                {
                    name: "cat3",
                    age: 33,
                },
            ],
        };
    },
    methods: {

        drawChart() {
            //基于准备好的dom，初始化echarts实例
            var myChart = this.$echarts.init(document.getElementById('main'));

            // 绘制图表
            myChart.setOption({
                title: {
                    text: 'ECharts 入门示例'
                },
                tooltip: {},
                xAxis: {
                    data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
                },
                yAxis: {},
                series: [{
                    name: '销量',
                    type: 'bar',
                    data: [5, 20, 36, 10, 10, 20]
                }]
            });

        },

        requestList() {
            this.$axios.get('/ajax/category/list')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.$axios.get('/swipes')
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
            this.$axios.post('/patients', {
                    pid: '1'
                })
                .then(function (response) {
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    },
    created() {
        this.requestList()
    },
    mounted() {
        this.drawChart();
    },

};
</script>
