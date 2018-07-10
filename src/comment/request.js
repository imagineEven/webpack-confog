import axios from 'axios';
const apiServer = axios.create({
  baseURL: '/all', // api的base_url
  timeout: 15000, // 请求超时时间
  withCredentials: true,
  transformRequest: function() {
    let ret = '';
    return ret;
  }
});

// request拦截器
apiServer.interceptors.request.use(config => {
  /* if (store.getters.token) {
    config.headers['X-Token'] = getToken() // 让每个请求携带自定义token 请根据实际情况自行修改 001END
  } */
  config.headers['Content-Type'] = 'application/x-www-form-urlencoded; charset=UTF-8';
  return config;
}, error => {
  console.log(error); // 打印错误
  Promise.reject(error);
});


apiServer.interceptors.response.use(
  response => {
  /**
  * code为非20000是抛错 可结合自己业务进行修改
  */
    let data = response.data;
    console.log('数据拦截器');
    console.log(response);
    return Promise.resolve(data);
  },
  error => {
    console.log('require.js文件里的错误');
  }
);

export default apiServer;