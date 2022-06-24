
    let clients =Mock.mock({
        "list|5":[{
            "name":function(){
                var num0= Math.floor(Math.random()*(96-65+1)+65);
                var num1= Math.floor(Math.random()*(96-65+1)+65);
                var num2= Math.floor(Math.random()*(96-65+1)+65);
                var Name="Client_"+String.fromCharCode(num0)+String.fromCharCode(num1)+String.fromCharCode(num2)
                $.ajax({
                url:'http://api.tianapi.com/cname/index?key=6e8962f80426df51ea45e45d37ddf659|||||',
                method:'get',
                dataType:'json',
                    success:function (data) {
                        console.log(data.code)
                        if(data.code=='200')
                        {
                            return Name=data.newslist[0].naming
                        }
                        else{
                            return Name
                        }
                        
                    }
                })
                return Name
    
            },
            "task":"@natural(1,10)",
            "date":"@natural(1,28)",
            "isHaveJob|1":[true,false]
        }]
    });
    console.log(clients.list);
    //人员名称  职务级别 任务数量 入职日期 是否离职 
    Mock.mock("http://test.org/client/list","get",clients.list);
    