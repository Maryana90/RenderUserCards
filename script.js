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
    constructor(user,role){
        this.user = user;
        this.role = role;
    }
    render(){
        let userFiltered = [];
        this.user
            .filter(usInfo=>{
                if(usInfo.role==this.role){
                    userFiltered.push(usInfo);
                }
            })
        let userBlock =`${userFiltered
            .map(uInfo=>`<div class="user">${this.userInfo(uInfo)}${this.userCourses(uInfo)}</div>`)
            .join('')}`
        document.write(userBlock);
    }
    userInfo(uInfo){
        return `<div class="user__info">
            <div class="user__info--data">
                <img src=${uInfo.img} alt="${uInfo.role}" width=50>
                <div class="user__naming">
                    <p>Name: <b>${uInfo.name}</b></p>
                    <p>Age: <b>${uInfo.age}</b></p>
                </div>
            </div>
            <div class="user__info--role ${uInfo.role}">
            <img src="${roles[uInfo.role]}" width=25>
            <p>${uInfo.role}</p>
            </div>
        </div>`
    }
    userCourses(){
        return ""
    }

    userGradation(level){
        if (level<gradation[0][gradation[0].length-1]){
            return `<span class="satisfactory">Satisfactory</span>`
        } else{
            if(level>=gradation[1][0] && level<gradation[1][gradation[1].length-1]){
                return `<span class="good">Good</span>`
        } 
        else{
            if(level>=gradation[2][0] && level<gradation[2][gradation[2].length-1]){
                return `<span class="very-good">Very good</span>`
        }
        else{
            if(level>=gradation[3][0] && level<=gradation[3][gradation[3].length-1]){
                return `<span class="excellent">Excellent</span>`}}} 
        }
    }
}

class Student extends User{
    constructor(user,role="student"){
        super(user,role="student");
    }
    userCourses(uInfo){
        if(uInfo.courses){
            return `
            <div class="user__courses admin--info">
                ${uInfo.courses
                    .map(course=>`<div class="user__courses--course ${uInfo.role}">${this.usCoorse(course)}</div>`)
                    .join('')}
            </div>`
        } else {
            return ""
        }
    }
    usCoorse(course){
        return `<p>Title: <b>${course.title} <b>${this.userGradation(course.mark)}</b></b></p>`
    }
}

class Admin extends User{
    constructor(user,role="admin"){
        super(user,role="admin");
    }
    userCourses(uInfo){
        return `<div class="user__courses admin--info">
            ${uInfo.courses
                .map(course=>`<div class="user__courses--course ${uInfo.role}">${this.usCoorse(course)}</div>`)
                .join('')}
            </div>`
        }
    usCoorse(course){
        return `<p>Title: <b>${course.title}</b></p>
                <p>Admin's score: <b>${this.userGradation(course.score)}</b></p>
                <p>Lector: <b>${course.lector}</b></p>`
    }
}

class Lector extends User{
    constructor(user,role="lector"){
        super(user,role="lector");
    }
    userCourses(uInfo){
        return `<div class="user__courses admin--info">
            ${uInfo.courses
                .map(course=>`<div class="user__courses--course ${uInfo.role}">${this.usCoorse(course)}</div>`)
                .join('')}
            </div>`
        }
    usCoorse(course){
        return `<p>Title: <b>${course.title}</b></p>
                <p>Lector's score: <b>${this.userGradation(course.score)}</b></p>
                <p>Average student's score: <b>${this.userGradation(course.studentsScore)}</b></b></p>`
    }
}

let Students = new Student (users);
Students.render();

let Admins = new Admin (users);
Admins.render();

let Lectors = new Lector (users);
Lectors.render();

