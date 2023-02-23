const user = { id: 1, name: 'Gorib Aamir', job: 'actor' }


// const stringified = JSON.stringify(user);
// console.log(user);
// console.log(stringified);

const shop={
    owner:'Alia',
    address:{
        street:'kachukhet Voot er goli',
        city:'ranaghat',
        contry:'India'
    },
    product:['laptop','mic','monitor','keyboard'],
    revenue:45000,
    isOpen:true,
    isNew:false
}

const shopJson=JSON.stringify(shop);
console.log(shop);
console.log(shopJson);



