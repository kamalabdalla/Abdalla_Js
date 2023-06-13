let user = {
    name: 'abdalla',
    age: 21,
    email: 'kamalabdalla@gmail.com',
    location: 'makka',
    blog1: [
        { title: 'schooles', likes: 30},
        { title: 'wahin', likes: 20}
    ],
    blog: ['abdalla site', 'make easy by hard way'],
    login (){
        console.log('the user loged in')
    },
    logedout: ()=>{
        console.log('user loged out')
    },
    // blogs: function(){
    //     // console.log(this.blog)
    //     console.log('this user has written the folloeing blogs')
    //     this.blog.forEach(blo =>{
    //         console.log(blo)
    //     })
    // }
    blogs(){
        console.log('the following written blog')
        this.blog1.forEach(blo =>{
            console.log(blo.title, blo.likes)
        })
    }
}
// user.blogs();
// user.login()
// user.logedout();
console.log(user.email)

// console.log(user['name'])


const par = document.querySelectorAll('p')
par.forEach(pa=>{
    pa.textContent = 'Abdalla'.toUpperCase()
    pa.innerText += ' new'
})
// par.innerText = 'Abdalla'

const content = document.querySelector('.con');
content.innerHTML = '<h1>yaa alla</h1>'

content.innerHTML += '<h2>yaa Rbbi</h2>'

const people = ['suma','arf','dan'];
people.forEach(person=>{
    content.innerHTML += `<h2>${person}</h2>`
    
})

// const Myf = document.querySelector('.f')
// const faver =['issa', 'arf', 'azz', 'ibr', 'dan', 'tafa']
// faver.forEach(per=>{
//     Myf.innerHTML += `<h3>${per}</h3>`
// })

// attribute
const link = document.querySelector('a');
// console.log(link.getAttribute('href'));
link.setAttribute('href', 'www.suza');
link.innerText = "suza";

// const kaa = document.querySelector('span');
// kaa.style.color ='red';
// kaa.style.fontSize ='20px'; 

const node = document.createElement("h2");
const textnode = document.createTextNode("www");
node.appendChild(textnode);
document.getElementById("con").appendChild(node);

 
 
// function response(url,success,error){
//     fetch(url)
// .then(response=>response.json())
// .then(success)
// .catch(error);

//   =====================================
// response('https://jsonplaceholder.typicode.com/todos/1',successMethod,errorMethod);

// function successMethod(data){
//     console.log(JSON.stringify(hellodata));
// }
// function errorMethod(myerr){
//     console.log("Error : "+myerr)
// }


// fetch('https://jsonplaceholder.typicode.com/todos/1')

       


    // document.addEventListener('DOMContentLoaded',function(){
    //     fetch('http://139.162.12.176:4050/gala/zanzibar/api/v1/school/yueyuwerwe/')
    //     .then(response=>response.json())
    //     .then(data=>{
    //         console.log(data);
    //     })
    //     .catch(error =>{
    //         console.error('Error fetching data',error);
    //     })
    // })

 // fetch('https://ipapi.co/8.8.8.8/json')
        // .then(response => response.json())
        // .then(data=>{
        //     console.log(JSON.stringify(data));
        // })
        // .catch(e=>{
        //     console.log("ERROR OCCCURED : " + e)
        // });


    async function fetchData() {
        try {
            const response = await fetch('https://ipapi.co/8.8.8.8/json');
            const data = await response.json();
            console.log(JSON.stringify(data));
        } catch (error) {
            console.error(error);
        }
}
 
    /*fetch('https://example.com/api/data', {
    headers: {
        'Authorization': 'Bearer ' + token
    }
    })
    .then(response => response.json())
    .then(data => {
        // Do something with the data
        console.log(data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });*/
 
