let users = [
    {
        username:'admin',
        password:'123'
    },{
        username:'text',
        password:'text'
    }
];

// 拦截规则
Mock.mock("http://test.org/user/list","get",users)