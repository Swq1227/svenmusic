// 发送 ajax 请求
/**
 * 
 * 1. 封装功能函数
 *    1.1 功能点明确
 *    1.2 函数内部应该保留固定代码（静态的）
 *    1.3 将动态的数据抽取成形参，由使用者自身情况传入实参
 *    1.4 一个良好的功能函数应该设置形参默认值
 * 
 * 2. 封装功能组件
 *    2.1 功能点明确
 *    2.2 组件内部保留静态的代码
 *    2.3 将动态的数据抽取成 props 参数，由使用者根据自身情况以标签属性的形式动态传入
 *    2.4 一个良好的组件应该设置组件的必要性及数据类型
 */
import config from './config'

export default (url, data = {}, method = "GET") => {
  return new Promise((resolve,reject) => {
      wx.request({
        url:config.host+url,
        data,
        method,
        success: (res) => {
          console.log('请求成功：', res);
          resolve(res.data);
        },
        fail: (err) => {
          console.log('请求失败：', err);
          reject(err);
        }
      })
    })
}