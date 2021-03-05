Page({
  data: {
    list: [1,2,3,4,5]
  },

  linkDetailPageHandler(){
    my.navigateTo({
      url: '/pages/detail/detail'
    });
  }
});
