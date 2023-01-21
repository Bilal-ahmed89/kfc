import styles from './Section.module.css'
import CategoriesCard from '../CategoriesCard/CategoriesCard';




function Section({categories, sectionContent}) {
    return (
        <div className={`container text-white ps-4`}>
            <div className={styles.jss96}>
                <h1 className={`fs-3 fw-bold bg-transparent ${styles.jss97}`}>{sectionContent.title}</h1>
            </div>
            
            <div>{sectionContent.content}</div>

            
        </div>
    );
}

export default Section;