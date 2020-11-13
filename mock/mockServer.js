import Mock from 'mockjs'

import {swipes} from './data/swipes';
import {patients} from './data/patients';

Mock.mock('/swipes',swipes);
Mock.mock('/ajax/category/list',swipes);
Mock.mock('/patients',patients);
Mock.mock("/patients", "post", (options)=>{
////对传入id进行筛选
//   const jsonObj = eval('(' + options.body + ')');
//   const patient = patients.filter(p=>p.id == jsonObj.pid);
//   return patient[0];
    return patients
});

////require的输出
// module.export = {
//     a: function(){
//      console.log(666)
//   }
// }
