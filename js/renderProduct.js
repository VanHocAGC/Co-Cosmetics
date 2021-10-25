var productList = JSON.parse(localStorage.getItem("products"));
var productListToRender = JSON.parse(
  localStorage.getItem("productSelectedList")
);
var sortfeature = document.querySelectorAll(".list-top div input");
var brandBar = document.querySelector(".brand-group ul");

function showProductList(element) {
  var productSelectedList = productList.filter(function (item) {
    for (let i = 0; i < item.url.length; i++) {
      if (item.url[i] === element) {
        return true;
      }
    }
  });
  localStorage.setItem(
    "productSelectedList",
    JSON.stringify(productSelectedList)
  );
}
function makeURL(element) {
  //element is tab clicked
  var url = new URL("http://127.0.0.1:5500/page.html");
  url.searchParams.append("name", element.id);
  window.location.assign(url);
}

function getQueryName(type, typeDefault) {
  const partURL = window.location.href;
  const index = partURL.indexOf(`${type}=`) + 1;
  console.log(`${type}=`);
  const lastIndex = partURL.indexOf("#");
  var queryName = index ? partURL.substring(index + type.length) : typeDefault;
  if (lastIndex != -1) {
    queryName = index
      ? partURL.substring(index + type.length, lastIndex)
      : typeDefault;
  }
  return queryName;
}
function changeQuery(element) {
  const url = new URL(window.location);
  url.searchParams.set("name", element.id);
  window.history.pushState({}, "", url);
  showProductList(element.id);
  productListToRender = JSON.parse(localStorage.getItem("productSelectedList"));
  renderProduct(productListToRender);
}

function renderOnload() {
  showProductList(getQueryName("name", "face-make-up"));
  productListToRender = JSON.parse(localStorage.getItem("productSelectedList"));
  renderProduct(productListToRender);
  renderbrand(productListToRender);
}
function renderbrand(listToRenderBrand) {
  var uniqueArray = [];
  for (let i = 0; i < listToRenderBrand.length; i++) {
    if (!uniqueArray.includes(listToRenderBrand[i].brand)) {
      uniqueArray.push(listToRenderBrand[i].brand);
    }
  }
  var brandHTML = uniqueArray.map(function (item, index) {
    return `<li class="bran--check-box">
                    <span>
                        <input id = "brand${index}" type="checkbox" value="${item}">
                        <label for="brand${index}" class="text-check">${item}</label>
                    </span>
                </li>`;
  });
  brandBar.innerHTML = brandHTML.join("");
}
function renderProduct(list) {
  var renderProductBox = document.querySelector(".view-product .row");
  var productHTML = list.map(function (item) {
    return `<div class="col-xs-6 col-sm-4 col-md-4 col-lg-4">
                <div class="product_border">
                    <div class="product__item">
                        <div class="product__img" onclick="viewProductDetail(${item.productID})">
                            <img src="${item.mainAvatar}" alt=${item.productName}"">
                            <div class="sale"></div>
                            <div class="caption-inner">
                                <button class="btn btn-success add" onclick="addToCart(event)" >Thêm vào giỏ hàng</button>
                            </div>
                        </div>
                        <div class="product__text">
                            <h3 class="product-name">
                                <a onclick="viewProductDetail(${item.productID})" href="#" class="textline"  title="${item.productName}">${item.productName}</a>
                            </h3>
                        </div>
                        <div class="product__price">
                            <div class="special-price">
                                <span class="product-price">${item.priceSell}₫</span>
                            </div>
                            <div class="old-price">
                                <span class="product-price-old">${item.realPrice}₫</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>`;
  });
  renderProductBox.innerHTML = productHTML.join("");
}

function checkToSort() {
  var sortType;
  for (var i = 0; i < sortfeature.length; i++) {
    if (sortfeature[i].checked) {
      sortType = sortfeature[i].id;
    }
  }
  if (sortType) {
    switch (sortType) {
      case "az": {
        makeSortedList(true, "productName");
        break;
      }
      case "za": {
        makeSortedList(false, "productName");
        break;
      }
      case "tang": {
        makeSortedList(true, "priceSell");
        break;
      }
      case "giam": {
        makeSortedList(false, "priceSell");
        break;
      }
    }
  }
}
function makeSortedList(sortType, sortName) {
  var sortedList;
  if (sortName === "productName") {
    sortedList = productListToRender.sort(function (a, b) {
      if (a[sortName] < b[sortName]) {
        return -1;
      }
      if (a[sortName] > b[sortName]) {
        return 1;
      }
      return 0;
    });
  } else {
    sortedList = productListToRender.sort(function (a, b) {
      return a[sortName] - b[sortName];
    });
  }
  if (!sortType) {
    sortedList.reverse();
  }
  renderProduct(sortedList);
}
function checkSelectedBrand() {
  var brandList = document.querySelectorAll(".brand-group ul li span input");
  var brandCheckedList = [];
  for (let i = 0; i < brandList.length; i++) {
    if (brandList[i].checked) {
      brandCheckedList.push(brandList[i].value);
    }
  }
  if (brandCheckedList.length != 0) {
    var newListByBrand = productListToRender.filter((item) => {
      return brandCheckedList.includes(item.brand);
    });
    renderProduct(newListByBrand);
  } else {
    renderProduct(productListToRender);
  }
}
function viewProductDetail(productID) {
  makeProductURL(productID);
}

function makeProductURL(productID) {
  var url = new URL("http://127.0.0.1:5500/product.html");
  url.searchParams.append("productID", productID);
  window.location.assign(url);
}

function renderDetailOnload() {
  var productID = getQueryName("productID", 1);
  var product = productList.find(function (item) {
    return item.productID == productID;
  });
  renderDetailProduct(product)
}
function renderDetailProduct(product) {
  document.querySelector(".product__root").innerHTML=
    ` <div class="product__container row col-xs-11 col-sm-11 col-md-11 col-lg-11">
        <div class="product__header">
          <a href="#">Trang chủ</a>
          <a href="#">FLASHSALE - THÁNG 4</a>
          <p>${product.productName}</p>
        </div>
        <div class="product__content">
          <div
            class="product__content__image col-xs-6 col-sm-6 col-md-6 col-lg-6"
          >
            <img
              src="${product.mainAvatar}"
              alt="${product.productName}"
            />
          </div>
          <div
            class="product__content__descr col-xs-6 col-sm-6 col-md-6 col-lg-6"
          >
            <h1>${product.productName}</h1>
            <div class="product__content__descr__brand">
              <span style="border-right: solid 1.5px #111"
                >Thương hiệu:<span> ${product.brand}</span></span
              >
              <span>Tình trạng:<span>${product.status}</span></span>
            </div>
            <div class="product__content__descr__price">
              <h3>${product.priceSell} đ</h3>
              <h5>${product.realPrice} đ</h5>
            </div>
            <div class="product__content__descr__border"></div>
            <div class="product__content__descr__type">
              <h4>Loại:</h4>
              <div>
                <div class="product__content__descr__type-active">TONE 128</div>
                <div>TONE 120</div>
              </div>
            </div>
            <div class="product__content__descr__type">
              <h4>Dung tích:</h4>
              <div>
                <div class="product__content__descr__type-active">5 ML</div>
              </div>
            </div>
            <div class="product__content__descr__type">
              <h4>Số lượng:</h4>
              <div class="product__content__descr__type__control">
                <button>-</button>
                <input type="text" value="1" />
                <button>+</button>
              </div>
            </div>
            <button>Cho vào giỏ hàng</button>
            <h4>
              Gọi đặt mua:<a href="#"> 0929398899‬-0965528998 </a>để nhanh chóng
              đặt hàng
            </h4>
          </div>
        </div>
        <div class="d-flex product__footer">
          <div class="product__footer__item">
            <div>
              <img
                src="./images/hocImage/productPage/service_1.png"
                alt="product ad"
              />
            </div>
            <div class="product__footer__item-content">
              <h4>Freeship toàn quốc</h4>
              <h5>Nội thành từ 99K. Ngoại thành, tỉnh từ 299k</h5>
            </div>
          </div>
          <div class="product__footer__item">
            <div>
              <img
                src="./images/hocImage/productPage/service_2.png"
                alt="product ad"
              />
            </div>
            <div class="product__footer__item-content">
              <h4>Sản phẩm chính hãng</h4>
              <h5>Đền ngay 10 Triệu đồng nếu phát hiện hàng FAKE</h5>
            </div>
          </div>
          <div class="product__footer__item">
            <div>
              <img
                src="./images/hocImage/productPage/service_3.png"
                alt="product ad"
              />
            </div>
            <div class="product__footer__item-content">
              <h4>Mua hàng giá ưu đãi</h4>
              <h5>Quà tặng bất ngờ cho đơn hàng 200K</h5>
            </div>
          </div>
        </div>
      </div>`
}

function addToCart(event) {
  console.log("event");
  event.stopPropagation();
}
