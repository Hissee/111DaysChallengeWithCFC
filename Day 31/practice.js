let data = "Secret data"

class user{
    constructor(name, email){
        this.name = name;
        this.email = email;
    }

    viewData(){
        console.log("data = ", data);
    }
}

class Admin extends user{
    constructor(name, email){
        super(name, email);
    }
    editData(){
        data = "Some new value";
    }
}

let std1 = new user("Hissee", "hissee@gmail.com");
let std2 = new user("hasina", "hasina@gmail.com");

let admin1 = new Admin("admin", "admin@college.com");
