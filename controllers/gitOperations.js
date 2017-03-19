/**
 * 创建人：李智勇
 * 创建时间： 2017/3/19.
 * 描述：git操作控制器
 */
const shell = require('shelljs');
exports.clone=function (req, res) {
    if (shell.exec('git clone https://github.com/HappyCoder01/YiDengDemo.git').code !== 0) {
        res.json({
            success:false,
            message:"失败！"
        })
    }else {
        res.json({
            success:true,
            message:"成功！"
        });
    }
};