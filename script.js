//script.async = false;

let roles = {
        admin: "https://www.flaticon.com/svg/static/icons/svg/1424/1424453.svg",
        student: "https://www.flaticon.com/svg/static/icons/svg/1424/1424424.svg",
        lector: "https://www.flaticon.com/svg/static/icons/svg/1424/1424450.svg"
    }
    
let gradation = [
        [0,20],
        [20,55],
        [55,85],
        [85,100]
    ]
    
let users = [
        {
            name: "Jack Smith",
            age: 23,
            img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922522.svg",
            role: "student",
            courses: [
                {
                    title: "Front-end Pro",
                    mark: 20
                },
                {
                    title: "Java Enterprise",
                    mark: 100
                }
            ]
        },
        {
            name: "Amal Smith",
            age: 20,
            img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922656.svg",
            role: "student"
        },
        {
            name: "Noah Smith",
            age: 43,
            img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922616.svg",
            role: "student",
            courses:[
                {
                    "title": "Front-end Pro",
                    "mark": 50
                }
            ]
        },
        {
            name: "Charlie Smith",
            age: 18,
            img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922688.svg",
            role: "student",
            courses: [
                {
                    title: "Front-end Pro",
                    mark: 75
                },
                {
                    title: "Java Enterprise",
                    mark: 23
                }]
        },
        {
            name: "Emily Smith",
            age: 30,
            img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922565.svg",
            role: "admin",
            courses: [
                {
                    title: "Front-end Pro",
                    score: 10,
                    lector: "Leo Smith"
                },
                {
                    title: "Java Enterprise",
                    score: 50,
                    lector: "David Smith"
                },
                {
                    title: "QA",
                    score: 75,
                    lector: "Emilie Smith"
                }]
        },
        {
            name: "Leo Smith",
            age: 33,
            img: "https://www.flaticon.com/svg/static/icons/svg/2922/2922719.svg",
            role: "lector",
            courses: [
                {
                    title: "Front-end Pro",
                    score: 78,
                    studentsScore: 79
                },
                {
                    title: "Java Enterprise",
                    score: 85,
                    studentsScore: 85
                }
            ]
        }
    ]


class User{
    constructor(user){
        this.user = user;
    }

    render(){
        let userBlock = `<div class="users">
            ${this.user
                    .map(uInfo=>`<div class="user">${this.method(uInfo)}</div>`)
                    .join('')
                }
        </div>`
        document.write(userBlock);
    }

    method(uInfo){
        return `
        <div class="user__info">
            <div class="user__info--data">
                <img src=${uInfo.img} alt="${uInfo.role}" width=50>
                <div class="user__naming">
                    <p>Name: <b>${uInfo.name}</b></p>
                    <p>Age: <b>${uInfo.age}</b></p>
                </div>
            </div>
            <div class="user__info--role student">
            <img src="${roles[uInfo.role]}" width=25>
            <p>${uInfo.role}</p>
            </div>
        </div>`
    }
        
}

let Users = new User (users);
Users.render();


// method(uInfo){
//     return `<div class="user__naming">
        
//         
//             <p>Name: <b>${uInfo.name}</b></p>
//             <p>Age: <b>${uInfo.age}</b></p>
//     
// }


//<div class="user__info"> </div>


// class User{
//     constructor(us){
//         this.us = us;
//     }

//     render(){
//         let foo = `<div>
//             <h2>${this.us
//                 .map(uss=>this.method(uss))
//                 .join('')
//                 }     
//             </h2>     
//         </div>`
//         document.write(foo);
//     }
//     method(uss){
//         return `<p>${uss.name}</p>`
//     }
// }

//     let userss = new User(users);
//     userss.render();

