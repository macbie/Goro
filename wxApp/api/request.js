export const request = (url, data) => {

  const token = getApp().globalData.token

  if (!token) {
    wx.reLaunch({
      url: '/pages/login/login',
    })
    return Promise.reject()
  }

  return new Promise((r, j) => {
    wx.request({
      url: `${wx.BASE_URL}${url}`,
      method: 'post',
      data: data,
      header: {
        'content-type': 'application/x-www-form-urlencoded',
        'accept-language': 'zh-cn,zh',
        'session-token': token
      },
      success(res) {
        console.log(res);
        if (res.statusCode == 401) {
          wx.showToast({
            icon: 'warn',
            title: '登录已经失效，请重新登录',
            duration: 2000
          });
          wx.reLaunch({
            url: '../mine/login',
          })
        } else {
          r(res.data)
        }
      }, fail(e) {
        j(e)
      },
      error(e) {
        j(e)
      }
    })
  })
}