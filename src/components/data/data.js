import CategoriesCard from "../CategoriesCard/CategoriesCard"


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


export const sectionContent = [
    {
        id: 1,
        title : 'Browse Categories',
        content : <CategoriesCard categories={categories} />
    },
    {
        id : 2,
        title : 'Top Selling',
        content : <CategoriesCard categories={categories} />
    }

]