<template>
  <el-form
    :model="ruleForm"
    ref="ruleForm"
    label-width="100px"
    class="demo-ruleForm"
    :rules="rules"
  >
    <el-form-item label="第一空" prop="name">
      <!-- prop对应规则名 -->
      <el-input v-model="ruleForm.name" ></el-input>
    </el-form-item>
    <el-form-item label="第二空" prop="name1">
      <el-input v-model="ruleForm.name1" ></el-input>
    </el-form-item>
  </el-form>
</template>

<script>
export default {
  data() {
    var self = this;
    const validateCode = (rule, value, callback) => {
      if (value && self.ruleForm.name1 && value > self.ruleForm.name1) {
        // self.ruleForm.name = "";
        callback("请输入不大于第二空的数");
      } else {
        this.$refs.ruleForm.clearValidate("name1");
        callback();
      }
    };
    const validateCode1 = (rule, value, callback) => {
      if (value && self.ruleForm.name && value < self.ruleForm.name) {
        // this.ruleForm.name = "";
        callback("请输入不小于第一空的数");
      } else {
        self.$refs.ruleForm.clearValidate("name");
        callback();
      }
    };

    return {
      ruleForm: {
        name: "",
        name1: "",
      },
      rules: {//这个rules来自于表单元素<el-form>的rules属性的值
        name: [//这个name来自于具体的表单域的prop属性的值
          { required: true, message: "请输入活动名称", trigger: ["blur","change"] },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
          { required: true, validator: validateCode,trigger:["blur","change"]  },
        ],
        name1: [
          { required: true, message: "请输入活动名称1", trigger: ["blur","change"]  },
          // { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" },
          // { validator: rules,trigger:"blur" }
          { validator: validateCode1,trigger:["blur","change"]  }
        ],
      },
    };
  },
  // methods: {
  //   submitForm(formName) {
  //     this.$refs[formName].validate((valid) => {
  //       if (valid) {
  //         alert("submit!");
  //       } else {
  //         console.log("error submit!!");
  //         return false;
  //       }
  //     });
  //   },
  //   resetForm(formName) {
  //     this.$refs[formName].resetFields();
  //   },
  // },
};
</script>