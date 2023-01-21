import CategoriesCard from "../CategoriesCard/CategoriesCard"
import Card from "../Card/Card"



export const categories = [
    {
        id : 1,
        title : 'EVERYDAY VALUE',
        img : './assets/imgs/krunchBurger.jpg'
    },
    {
        id : 2,
        title : 'AL CARTE & COMBOS',
        img : './assets/imgs/alaCrateCombo.jpg'
    },
    {
        id : 3,
        title : 'SIGNATURE BOXES',
        img : './assets/imgs/duoBox.jpg'
    },
    {
        id : 4,
        title : 'SHARING',
        img : './assets/imgs/sharing.jpg'
    },
    
]


export const cardContent = [
    {
        id: 1,
        title : 'Krunch Burger',
        price : 250,
        description : 'Crunchy chicken fillet, spicy mayo, lettuce, sandwiched between a sesame seed bun',
        img : './assets/imgs/krunchBurger.jpg'
    },
    {
        id: 2,
        title : 'Midnight Deal 3',
        price : 640,
        description : 'Mighty Zinger + regular drink',
        img : './assets/imgs/midNight.jpg'
    },
    {
        id: 3,
        title : 'Rice N Spice',
        price : 320,
        description : 'Spiced, buttery rice with 6 pcs of Hot Shots topped with our signature Vietnamese sauce',
        img : './assets/imgs/ricenspice.jpg'
    },
    {
        id: 3,
        title : 'Krunch With Fries N Drink',
        price : 470,
        description : 'Krunch + 1 regular Fries + 1 regular Drink',
        img : './assets/imgs/alaCrateCombo.jpg'
    },

]

export const sectionContent = [
    {
        id: 1,
        title : 'Browse Categories',
        content : <CategoriesCard categories={categories} />
    },
    {
        id : 2,
        title : 'Top Selling',
        content : <Card cardContent={cardContent}/>
    }

]