import {faker} from '@faker-js/faker'

function createRandomeCarList(){
    return{
        name:faker.vehicle.vehicle(),
        fuelType:faker.vehicle.fuel(),
        model:faker.vehicle.model(),
        type:faker.vehicle.type(),
        image:'https://www.india.com/wp-content/uploads/2018/09/The-all-new-BMW-7-Series.jpg',
        miles:1000,
        gearType:'Automatic',
        price:faker.finance.amount({min:4000, max:20000})
    }
}

const carList = faker.helpers.multiple(createRandomeCarList,{
    count:7
})

export default{
    carList
}