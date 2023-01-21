import styles from './Section.module.css'
import CategoriesCard from '../CategoriesCard/CategoriesCard';

import { categories } from '../data/data';



function Section() {
    return (
        <div className={`container text-white ps-4`}>
            <div className={styles.jss96}>
                <h1 className={`fs-3 fw-bold bg-transparent ${styles.jss97}`}>Browse Categories</h1>
            </div>
            <CategoriesCard categories={categories}/>
        </div>
    );
}

export default Section;