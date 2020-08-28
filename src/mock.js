// 引入mockjs
// import Mock from 'mockjs';
const Mock = require("mockjs");

// 获取 mock.Random 对象
const Random = Mock.Random;

// mock一组循环数据
const produceNewsData = function() {
  let articles = [];
  for (let i = 0; i < 10; i++) {
    let newArticleObject = {
      arcId: Random.guid(),
      title: Random.csentence(5, 30), //  Random.csentence( min, max )
      thumbnail_pic_s: Random.dataImage("100x150", "mock的图片"), // Random.dataImage( size, text ) 生成一段随机的 Base64 图片编码
      author_name: Random.cname(), // Random.cname() 随机生成一个常见的中文姓名
      date: Random.date() + " " + Random.time() // Random.date()指示生成的日期字符串的格式,默认为yyyy-MM-dd；Random.time() 返回一个随机的时间字符串
    };
    articles.push(newArticleObject);
  }

  return {
    articles: articles
  };
};

// Mock.mock( url, post/get , 返回的数据)；
Mock.mock("/news/index", "post", produceNewsData);

// mock 一组详情数据
const produceDetailData = function() {
  var detailData = {
    picture: Random.dataImage("750x375", "详情图片"),
    title: Random.csentence(5, 30),
    thumbnail_pic_s: Random.dataImage("100x150", "mock的图片"),
    author_name: Random.cname(),
    publishDate: Random.date("yyyy/MM/dd ") + Random.time("HH:mm"),
    details: Random.csentence(40, 160)
  };

  var news = produceNewsData();
  let { projectInformation } = news;
  return {
    detailData,
    projectInformation
  };
};

Mock.mock("/news/detail", "post", produceDetailData);
