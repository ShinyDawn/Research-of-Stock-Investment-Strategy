/**
 * Created by StevenWu on 17/1/3.
 */
$(function(){ $('#tablepool').bootstrapTable({
    striped: true,
//        pagination: true,
    sidePagination: "client",
    pageNumber:1,
    pageSize: 10,
    pageList: [10, 25, 50, 100],
    height:600,
    clickToSelect: true,
    columns: [{

        field: 'id',
        title: '股票代码'
    }, {
        field: 'name',
        title: '股票名称'
    }],
    data: [ {
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    },{
        id: 'sh601998',
        name: '中国银行'
    }]
});
});