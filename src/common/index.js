import Vue from 'vue';
/**
 * ajax 从主应用传递来
 * @param {string} api 接口地址
 * @param {string} method 上传类型
 * @param {string | object} data 数据
 * @param {boolean} withAll 是否展示所有信息
 * @param {boolean} noTips 是否无提示
 * @param {boolean} isFormData 是否是formData格式上传
 * */
export let ajax = function ({
  api,
  method = 'get',
  data = null,
  withAll = false,
  noTips = false,
  isFormData = false
}) {
};

/**
 * 接受主应用的传参
 * @param props 主应用传的公共数据
 */
export function setCommonData (props) {
  const { publicPath, storage, utils, constants, http } = props;
  Vue.prototype.$storage = storage;
  Vue.prototype.$utils = utils;
  Vue.prototype.$publicPath = publicPath;
  Vue.prototype.$constants = constants;
  ajax = http;
}

/**
 * 设置微应用全局状态
 * @param props 主应用穿的公共数据
 */
export function initGlState(props) {
  let { onGlobalStateChange, setGlobalState } = props;
  Vue.prototype.$setGlobalState = setGlobalState;
  // 设置通讯
  onGlobalStateChange((state, prev) => {
    // state: 变更后的状态; prev 变更前的状态
    console.log(state, prev);
  }, true);
}
