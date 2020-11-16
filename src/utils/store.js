import { createStore } from 'vuex'

// interface State {
//   userName: string
// }
export default createStore({
    state:{ //要设置的全局访问的state对象
        //要设置的初始化属性
        count:1,
        ChangeShowCom:true,
        userPage:''//路由的访问
    },
    getters:{//实时监听state值的变化（最新状态）
        getCount(state){ //承载变化的count值
            return state.count;
        },
        isShow(state){//承载变化的showCom值
            return state.ChangeShowCom;
        }
    },

    mutations:{
        addCount(state,num){//这里面参数除了state之外还传了需要增加的值num
            state.count = state.count+Unum
        },
        delCount(state,num){
            //count 到 0就不能减少了
            if(state.count >0 ){
                state.count = state.count - num
            }else{
                state.count = 0
            }
        },
        show(state){//自定义改变state初始值的方法，这里面的参数除了state之外还可以再传额外的参数（变量或对象）
            state.ChangeShowCom = true
        },
        hide(state){
            state.ChangeShowCom = false
        }
    },
    actions:{
        getAddCount(context, num){
            context.commit('addCount', num)
        },
        // getUserPage(context, userPage){
        //     context.commit('userPage', userPage)
        // },
        getDelCount(context, num){
            context.commit('delCount', num)
        },
        hideCom(context){//自定义出发mutations里面的函数的方法，context与store 实例具有相同方法和属性
            context.commit('hide')
        },
        showCom(context){
            context.commit('show')
        }
    }
});