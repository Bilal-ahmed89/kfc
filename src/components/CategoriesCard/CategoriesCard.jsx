import styles from './CategoriesCard.module.css'
import kruchBurger from '../../assets/imgs/krunchBurger.jpg'
import krunchBurger from '../../assets/imgs/krunchBurger.jpg'


function CategoriesCard({ categories }) {
    return (
        <div className="row">
            {
                categories.map((category) => {
                    return (
                        <div className="col-md-3 mb-4">
                            <div className={`${styles.categoriesCard}`}>
                                <img src={kruchBurger} alt="" style={{ width: '180px', borderRadius: '6px', border: '1px dashed white',height : '170px' }} />

                                <span className={`position-absolute start-50 translate-middle-x ${styles.categoriesTitle} `}>{category.title}</span>
                            </div>
                        </div>
                    )
                })
            }

        </div>

    );
}
export default CategoriesCard;