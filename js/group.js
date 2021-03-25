var datas = {
    "msg": "成功",
    "code": 0,
    "list": [{
        "id": 1,
        "name": "4口充电宝",
        "barCode": null,
        "catalog": 2,
        "catalogName": "充电宝",
        "salePrice": 388.00,
        "vipPrice": 38.80,
        "price": 388.00,
        "marketPrice": 499.00,
        "inventory": 0,
        "logo": "https://cdn.haoxuer.com/bigworld/upload/image/202009/5ddb360a-7c47-456e-948a-918c9e2d83f9.png",
        "num": 0,
        "unit": "个",
        "destUnit": null,
        "demo": "主机+2块电池",
        "skus": [],
        "state": "在售",
        "model": null,
        "stock": 0,
        "agentShare": null,
        "salesmanShare": null
    }, {
        "id": 2,
        "name": "充电电池",
        "barCode": null,
        "catalog": 2,
        "catalogName": "充电宝",
        "salePrice": 40.00,
        "vipPrice": 0.00,
        "price": 40.00,
        "marketPrice": 50.00,
        "inventory": 0,
        "logo": "https://cdn.haoxuer.com/bigworld/upload/image/202009/d621a996-7581-41a0-aea5-eaafee6d9abb.png",
        "num": 0,
        "unit": "个",
        "destUnit": null,
        "demo": "配套电池",
        "skus": [],
        "state": "在售",
        "model": null,
        "stock": 0,
        "agentShare": null,
        "salesmanShare": null
    }, {
        "id": 6,
        "name": "6口充电宝",
        "barCode": null,
        "catalog": 2,
        "catalogName": "充电宝",
        "salePrice": 588.00,
        "vipPrice": 58.80,
        "price": 588.00,
        "marketPrice": 799.00,
        "inventory": 0,
        "logo": "https://cdn.haoxuer.com/bigworld/upload/image/202009/aeb4a7b6-eb66-4273-8adc-6df3b9bfc0b2.png",
        "num": 0,
        "unit": "个",
        "destUnit": null,
        "demo": "主机+3块电池",
        "skus": [],
        "state": "在售",
        "model": null,
        "stock": 0,
        "agentShare": null,
        "salesmanShare": null
    }, {
        "id": 7,
        "name": "12口充电宝",
        "barCode": null,
        "catalog": 2,
        "catalogName": "充电宝",
        "salePrice": 988.00,
        "vipPrice": 0.00,
        "price": 988.00,
        "marketPrice": 1299.00,
        "inventory": 0,
        "logo": "https://cdn.haoxuer.com/bigworld/upload/image/202009/46b32023-1b88-4fa3-b98d-be38613c569c.png",
        "num": 0,
        "unit": "个",
        "destUnit": null,
        "demo": "主机+8块电池",
        "skus": [],
        "state": "在售",
        "model": null,
        "stock": 0,
        "agentShare": null,
        "salesmanShare": null
    }, {
        "id": 5,
        "name": "测试商品",
        "barCode": null,
        "catalog": 3,
        "catalogName": "生活用品",
        "salePrice": 1.00,
        "vipPrice": 0.40,
        "price": 1.00,
        "marketPrice": 20.00,
        "inventory": 0,
        "logo": "https://cdn.haoxuer.com/bigworld/upload/image/202005/f6922f21-f4e8-4c60-8816-e19c35444325.jpg",
        "num": 0,
        "unit": "kg",
        "destUnit": null,
        "demo": "12",
        "skus": [],
        "state": "在售",
        "model": null,
        "stock": 0,
        "agentShare": null,
        "salesmanShare": null
    }, {
        "id": 9,
        "name": "123213",
        "barCode": null,
        "catalog": 3,
        "catalogName": "生活用品",
        "salePrice": 12.00,
        "vipPrice": null,
        "price": 12.00,
        "marketPrice": null,
        "inventory": 0,
        "logo": "https://cdn.haoxuer.com/bigworld/upload/image/202012/364119cc-2b5c-4b1a-a913-00ce6d53f172.jpg",
        "num": 0,
        "unit": "套",
        "destUnit": null,
        "demo": "11",
        "skus": [],
        "state": "在售",
        "model": null,
        "stock": 0,
        "agentShare": null,
        "salesmanShare": null
    }, {
        "id": 8,
        "name": "36口充电宝",
        "barCode": null,
        "catalog": 4,
        "catalogName": "电子产品",
        "salePrice": 4999.00,
        "vipPrice": 0.00,
        "price": 4999.00,
        "marketPrice": 5999.00,
        "inventory": 0,
        "logo": "https://cdn.haoxuer.com/bigworld/upload/image/202009/ae4e03a2-24d4-4a17-953d-51957e04e32c.png",
        "num": 0,
        "unit": "个",
        "destUnit": null,
        "demo": "主机+28块电池",
        "skus": [],
        "state": "在售",
        "model": null,
        "stock": 0,
        "agentShare": null,
        "salesmanShare": null
    }],
    "no": 1,
    "size": 100,
    "total": 7,
    "totalPage": 1,
    "firstNo": 1,
    "endNo": 1
};

var list = datas.list;
var gourps = {};
list.forEach(item => {
    var g = gourps[item.catalog];
    if (!g) {
        g = {};
        g.name=item.catalogName;
        g.list=[];
        g.id=item.catalog;
        gourps[item.catalog] = g;
    }

    g.list.push(item);

});
var list=[];
for (const key in gourps) {
    if (Object.hasOwnProperty.call(gourps, key)) {
        const element = gourps[key];
        list.push(element);
    }
}
console.log(list);