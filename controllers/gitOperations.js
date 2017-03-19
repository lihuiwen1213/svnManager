/**
 * 创建人：李智勇
 * 创建时间： 2017/3/19.
 * 描述：git操作控制器
 */
const shell = require('shelljs');
const successMessage={
    success:true,
    message:"成功！"
};
const failMessage={
    success:false,
    message:"失败！"
};

exports.createBranch=function (req, res) {
    console.log(shell.exec("git branch "+req.params.name).code);
    console.log(shell.exec("git checkout "+req.params.name).code);
    console.log(shell.exec("git push origin "+req.params.name).code);
    res.json(successMessage);
};
exports.getBranchInfo=function (req, res) {
    if (shell.exec('git clone https://github.com/HappyCoder01/YiDengDemo.git').code !== 0) {
        res.json(failMessage)
    }else {
        res.json(successMessage);
    }
};