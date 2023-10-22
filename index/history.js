Page({
  data: {
    sectext: '', // 用于存储从数据库获取的数据
  },

  sec_bt() {
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/15260107375uMTIC.php?", // 请求的API地址
      data: {
        sql: 'select *  from new_calcultor where id="1";', // SQL语句
        api_pawsord: "wdmpOtiaZhFkKv6" // API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) // 得到返回的数据
        this.setData({
          data1a: res.data.result[0].expression,
          data1b: res.data.result[0].equal,
          data1c: res.data.result[0].result,
        });
      },
      fail: () => {},
      complete: () => {}
    });
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/15260107375uMTIC.php?", // 请求的API地址
      data: {
        sql: 'select *  from new_calcultor where id="2";', // SQL语句
        api_pawsord: "wdmpOtiaZhFkKv6" // API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) // 得到返回的数据
        this.setData({
          data2a: res.data.result[0].expression,
          data2b: res.data.result[0].equal,
          data2c: res.data.result[0].result,
        });
      },
      fail: () => {},
      complete: () => {}
    });
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/15260107375uMTIC.php?", // 请求的API地址
      data: {
        sql: 'select *  from new_calcultor where id="3";', // SQL语句
        api_pawsord: "wdmpOtiaZhFkKv6" // API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) // 得到返回的数据
        this.setData({
          data3a: res.data.result[0].expression,
          data3b: res.data.result[0].equal,
          data3c: res.data.result[0].result,
        });
      },
      fail: () => {},
      complete: () => {}
    }),
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/15260107375uMTIC.php?", // 请求的API地址
      data: {
        sql: 'select *  from new_calcultor where id="4";', // SQL语句
        api_pawsord: "wdmpOtiaZhFkKv6" // API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) // 得到返回的数据
        this.setData({
          data4a: res.data.result[0].expression,
          data4b: res.data.result[0].equal,
          data4c: res.data.result[0].result,
        });
      },
      fail: () => {},
      complete: () => {}
    }),
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/15260107375uMTIC.php?", // 请求的API地址
      data: {
        sql: 'select *  from new_calcultor where id="5";', // SQL语句
        api_pawsord: "wdmpOtiaZhFkKv6" // API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) // 得到返回的数据
        this.setData({
          data5a: res.data.result[0].expression,
          data5b: res.data.result[0].equal,
          data5c: res.data.result[0].result,
        });
      },
      fail: () => {},
      complete: () => {}
    }),
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/15260107375uMTIC.php?", // 请求的API地址
      data: {
        sql: 'select *  from new_calcultor where id="6";', // SQL语句
        api_pawsord: "wdmpOtiaZhFkKv6" // API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) // 得到返回的数据
        this.setData({
          data6a: res.data.result[0].expression,
          data6b: res.data.result[0].equal,
          data6c: res.data.result[0].result,
        });
      },
      fail: () => {},
      complete: () => {}
    }),
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/15260107375uMTIC.php?", // 请求的API地址
      data: {
        sql: 'select *  from new_calcultor where id="7";', // SQL语句
        api_pawsord: "wdmpOtiaZhFkKv6" // API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) // 得到返回的数据
        this.setData({
          data7a: res.data.result[0].expression,
          data7b: res.data.result[0].equal,
          data7c: res.data.result[0].result,
        });
      },
      fail: () => {},
      complete: () => {}
    }),
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/15260107375uMTIC.php?", // 请求的API地址
      data: {
        sql: 'select *  from new_calcultor where id="8";', // SQL语句
        api_pawsord: "wdmpOtiaZhFkKv6" // API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) // 得到返回的数据
        this.setData({
          data8a: res.data.result[0].expression,
          data8b: res.data.result[0].equal,
          data8c: res.data.result[0].result,
        });
      },
      fail: () => {},
      complete: () => {}
    }),
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/15260107375uMTIC.php?", // 请求的API地址
      data: {
        sql: 'select *  from new_calcultor where id="9";', // SQL语句
        api_pawsord: "wdmpOtiaZhFkKv6" // API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) // 得到返回的数据
        this.setData({
          data9a: res.data.result[0].expression,
          data9b: res.data.result[0].equal,
          data9c: res.data.result[0].result,
        });
      },
      fail: () => {},
      complete: () => {}
    }),
    wx.request({
      url: "https://zbmysql.huaxio.cn/api/15260107375uMTIC.php?", // 请求的API地址
      data: {
        sql: 'select *  from new_calcultor where id="10";', // SQL语句
        api_pawsord: "wdmpOtiaZhFkKv6" // API密码
      },
      method: 'post',
      header: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      dataType: 'json',
      responseType: 'text',
      success: (res) => {
        console.log(res.data) // 得到返回的数据
        this.setData({
          data10a: res.data.result[0].expression,
          data10b: res.data.result[0].equal,
          data10c: res.data.result[0].result,
        });
      },
      fail: () => {},
      complete: () => {}
    })
  }
});
