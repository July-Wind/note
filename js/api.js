// 导入配置文件
import config from "./config.js";

export default {
    // 获取文件数
    getTree: `/repos/${config.gitee.owner}/${config.gitee.repo}/git/trees/${config.gitee.sha}?access_token=f6414c87abeb9ec4d54893b125cbb8de&recursive=1`,
    // 获取具体文件内容
    getContent: `/repos/${config.gitee.owner}/${config.gitee.repo}/contents/`
};
