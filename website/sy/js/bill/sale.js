import OptionSetter from '../chart/OptionSetter.js' //加.js

new Vue({
    el:'#app',
    data:{
        myChart:{}
    },
    mounted:function(){
        this.initChart();

    },methods:{
        initChart:function(){
            this.myChart = echarts.init(this.$refs.chart);
            let _this = this;
            $.ajax({
                url:'http://test.org/pro/list',
                method:'get',
                dataType:'json',
                success:function(data){
                    _this.setChartOption(data);

                }
            })

        },
                setChartOption:function(data){
                    let opt = this.getOpt(data);
                    let chartTitle='商品销售量分析';
                    // let option = OptionSetter.getOption(opt,chartTitle,'line');
                    let option = OptionSetter.getOptionForPie(chartTitle,data);
                    this.myChart.setOption(option);
                },
                getOpt:function(data){
                    let opt = {
                        names:[],
                        quantities:[]
                    }
                    opt.names = data.map(function (item) {
                        return item.name;
                    })
                    opt.quantities = data.map(function (item) {
                        return item.quantity;
                    })
                    return opt;
                }
}


})
// {
                //     console.log("data");
                //     console.log(data);

                //     let names=[];
                //     let quantities=[];

                //     for(let i=0; i<data.length; i++){
                //         names.push(data[i].name);
                //     }
                //     for(let i=0; i<data.length; i++){
                //         quantities.push(data[i].quantity);
                //     }

                    
                // myChart.setOption(option);
                //             }