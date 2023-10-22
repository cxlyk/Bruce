//引入四则运算的js
const acc = require('./calculate.js');
 
Page({
  data: {
    counter: {
      expression: ['', '', ''], //存放式子，比如  1+12 
      ansType: false, //判断是否是手动点击的等于号
    },
    history: [],
    result: [],
    equalButtonCount: -1,
  },
  //输入数字
  numBtn(e) {
    let num = e.currentTarget.dataset.val  // 对应wxml定义的data-val
    let expression = this.data.counter.expression
    if (expression[1] === '') { //如果运算符为空，就在式子数组第0个位置放入内容
      //判断特殊情况1： 小数点
      if (num == '.' && expression[0] == '') { //如果是点，且字符串为空，就默认加上 0
        expression[0] = '0'
      } else if (num == '.' && expression[0].indexOf('.') > -1) { //如果已经有点了还按
        return
      }
      //判断特殊情况2：如果是手动点了等号之后，再按数字，不应该在原位置加，而是清空再加 （通过其它方式比如 “1+2+“ 调用的finish函数不算，需要是手动点击的）
      if (this.data.counter.ansType) {
        expression[0] = ''
        this.setData({
          'counter.ansType': false //生效一次即可取消
        })
      }
      //判断特殊情况3：如果这里面只有0，那么就删掉这个0，再增加（想输入小数点除外）
      if (num !== '.' &&expression[0] == '0') {
        expression[0] = ''
      }
      this.setData({
        'counter.expression[0]': expression[0] + num
      })
    } else { //如果运算符不为空，就在式子数组第2个位置放入内容
      //判断特殊情况1： 小数点
      if (num == '.' && expression[2] == '') { //如果是点，且字符串为空，就默认加上 0
        expression[2] = '0'
      } else if (num == '.' && expression[2].indexOf('.') > -1) { //如果已经有点了还按
        return
      }
      //判断特殊情况2：如果这里面只有0，那么就删掉这个0，再增加 （想输入小数点除外）
      if (num !== '.' && expression[2] == '0') {
        expression[2] = ''
      }
      this.setData({
       'counter.expression[2]': expression[2] + num
     // 'counter.expression': expression
      });
      if (!isNaN(num) || num === '.') { //.
        this.addToHistory(expression.join(' '));
      }
    }

  },
  //输入运算符
  operatorBtn(e) {
    let op = e.currentTarget.dataset.val
    let expression = this.data.counter.expression
    if (expression[2] == '') { //如果式子最后一位为空的话，就把符号放进去运算符位置
      this.setData({
        'counter.expression[1]': op
        
      })
    } else { //否则就先运算，再放进去
      this.finish()
      this.setData({
        'counter.expression[1]': op
      })
    }
    console.log(this.data.counter.expression);
   
  },
  //运算
  finish(e) {
    let expression = this.data.counter.expression
    let left = parseFloat(expression[0] || 0) //左数字 如果是空字符串就设置为0
    let right = parseFloat(expression[2] || 0) //右数字 如果是空字符串就设置为0
    let ans = 0 //答案
    console.log(left, right);
    switch (expression[1]) { //根据不同运算符，进行不同的运算
      case '+':
        ans = acc.add(left, right)
        break;
      case '-':
        ans = acc.sub(left, right)
        break;
      case '×':
        ans = acc.mul(left, right)
        break;
      case '÷':
        if (right == 0) { //如果数字不合规-除以0
        wx.showToast({
        title: "Can't divided by 0 !",
        icon: 'none'
        })
                    ans = left
         } else {
          let _ans = acc.div(left, right)
          let x = String(_ans).indexOf('.') + 1;
          let y = String(_ans).length - x;
          if (y > 10) {
            ans = _ans.toFixed(10);
          } else {
            ans = _ans
          }
        }
        break;
      case '%':
         if (right == 0) { //如果数字不合规-余0
        wx.showToast({
        title: "Can't take a remainder of 0 !",
        icon: 'none'
       })
      ans = left
       } else {
       ans = left % right
       }
        break;
      default:
        ans = left
        break;
    }
    console.log(ans);
    expression = ['' + ans, '', ''] //清空数组，把答案放在第一位
 
    let ansType = false
    if (e) { //如果有事件对象，说明是手动点击的”=“，应该加一个标识符，点了=再点数字的时候，应该把左边数字清空再处理数字
      console.log('手动点击的等于号，后面点击数字时，将清空左边数字');
      ansType = true
    }
    this.data.result.push(expression[0]);
    this.setData({
      'counter.expression': expression,
      'counter.ansType': ansType,
      equalButtonCount: this.data.equalButtonCount + 1,
      result: this.data.result
      
    }),

  wx.request({
     
      url: "https://zbmysql.huaxio.cn/api/15260107375uMTIC.php?", 
      //请求的API地址
      data: {
        sql: 'INSERT INTO new_calcultor VALUES( null, "' + this.data.history[this.data.equalButtonCount].expression + '","=","' + this.data.result[this.data.equalButtonCount] + '");', //SQL语句
        api_pawsord: "wdmpOtiaZhFkKv6" //API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) //得到返回的数据
        if (res.data.affected = 1) {
          console.log('操作成功！')
        }
      },
      fail: () => {},
      complete: () => {},
  })
},
  //清空
  resetBtn() {
    this.setData({
      'counter.expression': ['', '', ''],
    })
  },
  //退位
  delBtn() {
    let expression = this.data.counter.expression
    //从右到左的顺序删除
    if (expression[2]) { //如果最后一位不为空，就先删除
      expression[2] = expression[2].substr(0, expression[2].length - 1)
    } else if (expression[1]) { //如果符号位不为空，就删除
      expression[1] = ''
    } else if (expression[0]) { //如果第一位不为空，就删除
      expression[0] = expression[0].substr(0, expression[0].length - 1)
    } else return 
    this.setData({
      'counter.expression': expression
    })
    console.log(this.data.counter.expression);
  },

addToHistory(expression) {
  let historyItem = {
    expression: expression,
  };
  this.data.history.push(historyItem);
  this.setData({
    history: this.data.history
  });
},
callhistory(){
  
}

  })
