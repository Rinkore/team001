
let getOption = function(opt,chartTitle,type) {

return{
    title:{
        text:chartTitle
    }
,
    tooltip:{
    }
,
    xAxis:{
        data:opt.names
    }
,
    yAxis:{
    }
,
    series:[
        {
            name: '库存',
            type: type,
            data: opt.quantities
        }
    ]
}
}

let getOptionForpie = function(chartTitle,data){
    let seriesData = data.map(function(item){
        return{
            name:item.name,
            value:item.quantity
        }
    })
    return{
        series:[
            {
                type:'pie',
                data:seriesData
            }
        ]
    }
}
export default{
    getOption,
    getOptionForpie
}