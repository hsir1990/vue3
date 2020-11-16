<template>
    <div id="mock">mock</div>
    <div id="mock">恭喜mock  {{ dataRus }}</div>
</template>

<style lang="less" scoped>
#mock{
    font-size: 30px;
    color: #ddd;
}
</style>
<script>
export default {
    name: "mock",
    props: {
        msg: String,
    },
    data() {
        return{
            dataRus:''
        }
        
    },
    methods:{
        requestList() {
            let self = this;
            this.$axios.get('/ajax/category/list')
                .then(function (response) {
                    self.dataRus = response.data.message
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
    }

};
</script>
