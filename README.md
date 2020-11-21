# vue3
cross-env  的使用规范（去除mac和win中设置属性不兼容）
"dev": "cross-env NODE_ENV=production vite",
注意在win中set NODE_ENV=development&& vite build（这种写法在win中有效），&&前不能要空格
在mac中设置export NODE_ENV=development  假如自己没有更改到位，默认无效的时候，会被使用development