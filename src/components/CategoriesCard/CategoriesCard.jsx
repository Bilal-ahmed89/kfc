import styles from './CategoriesCard.module.css'


function CategoriesCard({ categories }) {
    return (
        <div className="row">
            {
                categories.map((category) => {
                    return (
                        <div className="col-md-2 mb-4 p-0 pe-2 col-sm-4">
                            <div className={`${styles.categoriesCard}`}>
                                <img src={category.img} alt="" style={{ width: '100%', borderRadius: '6px', border: '1px dashed white' }} />

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