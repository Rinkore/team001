let users = [

        {
            username:'admin',
            password:'123'
        },{
            username:'text',
            password:'text'
        }

];
Mock.mock("https//test.org/user/list","get",users)