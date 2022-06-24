// 1.数据模拟
let product = Mock.mock({
    "list|5":[{
        "id|+1":1,
        "name":function(){
            return "产品"+this.id;

        },
        "price":"@natural(500,3000)",
        "quantity":"@natural(100,1000)",
        "year|1":years,
        "month":"@natural(1,12)",
        "date":"@natural(1,28)",
        "isClosed|1":[true,false]

    }]
});

Mock.mock("http://test.org/pro/list","get",product.list)