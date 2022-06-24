let users = [
    {
        username:'admin',
        password:'123'
    },{
        username:'text',
        password:'text'
    }
];

Mock.mock("http://test.org/user/list","get",users);

