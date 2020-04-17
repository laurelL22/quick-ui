
const prompt = require('@system.prompt');

const router = require('@system.router');

const media = require('@system.media');

const request = require('@system.request');

const image = require('@system.image');

const NATIVE = {
    prompt,
    router,
    request,
    media,
    image
    // ... 需要的接口自行添加
}

/**
 * promise 化快应用
 * @param {*} actions 
 * @param {*} option 
 */
function nativeApi(actions, option) {
    const [action, name] = actions.split('.');
  
    return new Promise((resolve, reject) => 
        NATIVE[action][name](Object.assign({}, option, {
            success: resolve,
            fail: reject
        }))
    )
}

export default nativeApi;
