let getOption = function (opt, chartTitle, type){
    return {
        title: {
            text:chartTitle
        },
        tooltip: {},
        xAxis:{
            data:opt.names
        },
        yAxis:{},
        series: [
            {
                name:'任务量',
                type:type,
                data:opt.tasks
            }
        ]
    }
}
let getOptionForPie = function(chartTitle,data){

    let seriesData = data.map(function(item){
        return {
            name:item.name,
            value:item.task
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
    getOptionForPie
}
