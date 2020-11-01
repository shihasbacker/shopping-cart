var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  let products = [
    {
      name: "iphone 11",
      category: "mobile",
      description: "this is a good phone",
      image: "https://www.reliancedigital.in/medias/iPhone-11-128GB-Black-491584660-i-1-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wxMTEzOTR8aW1hZ2UvanBlZ3xpbWFnZXMvaDgwL2hlYS85MTk1ODYwMDAwNzk4LmpwZ3xiOGE2Yzk1ZTg0NDdmNjhjOTYzYmQ4OGY3MGJmYzRlYTU0M2UxOWE5MzQyNzgyYmJhMmNiMjYzOGU1MmZmMGI1",
    },
    {
      name: "iphone 12",
      category: "mobile",
      description: "this is a good phone",
      image: "https://assets.entrepreneur.com/content/3x2/2000/1598215289-EverythingApplePro1.jpg",
    },
    {
      name: "redmi note 7 pro",
      category: "mobile",
      description: "this is a good phone",
      image: "https://gloimg.gbtcdn.com/images/pdm-product-pic/Electronic/2019/03/19/source-img/20190319143430_95255.jpg_500x500.jpg",
    },
    {
      name: "oneplus 8",
      category: "mobile",
      description: "this is a good phone",
      image: "https://media.wired.com/photos/5e94c228056547000ac5e8af/1:1/w_1280,h_1280,c_limit/Gear-OnePlus-8-front-SOURCE-OnePlus-Feature.jpg",
    }
  ]
  res.render('index', { products, admin:false });
});

module.exports = router;
