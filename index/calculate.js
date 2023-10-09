module.exports = {
 // 加法 add
  add(num1, num2) {
    let a1, a2, m;
    try {
      a1 = num1.toString().split(".")[1].length;
    } catch (e) {
      a1 = 0;
    }
    try {
      a2 = num2.toString().split(".")[1].length;
    } catch (e) {
      a2 = 0;
    }
    m = Math.pow(10, Math.max(a1, a2));
    return (num1 * m + num2 * m) / m;
  },
  // 减法 subtraction
  sub(num1, num2) {
    let a1, a2, m, n;
    try {
      a1 = num1.toString().split(".")[1].length; // 获取小数点后的长度
    } catch (e) {
      a1 = 0;
    }
    try {
      a2 = num2.toString().split(".")[1].length; // 获取小数点后的长度
    } catch (e) {
      a2 = 0;
    }
    m = Math.pow(10, Math.max(a1, a2));
    n = (a1 >= a2) ? a1 : a2;
    return ((num1 * m - num2 * m) / m).toFixed(n);
  },
  // 乘法 multiplication
  mul(num1, num2) {
    let m = 0,
      s1 = num1.toString(),
      s2 = num2.toString();
    try {
      m += s1.split(".")[1].length;
    } catch (e) {}
    try {
      m += s2.split(".")[1].length;
    } catch (e) {}
    return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m);
  },
  // 除法 division
  div(num1, num2) {
    let t1 = 0,
      t2 = 0,
      a1, a2;
    try {
      t1 = num1.toString().split(".")[1].length;
    } catch (e) {}
    try {
      t2 = num2.toString().split(".")[1].length;
    } catch (e) {}

    a1 = Number(num1.toString().replace(".", ""));
    a2 = Number(num2.toString().replace(".", ""));
    return (a1 / a2) * Math.pow(10, t2 - t1);
  }
};
