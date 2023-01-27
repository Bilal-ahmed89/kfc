import Section from '../section/Section';
import styles from './everydayvalue.module.css';
import { sectionContent } from "../data/data";

function EverydayValue({ Tags }) {
    return (
        <>
            <div className={`container my-4 sticky-top ${styles.stickyTop}`}>
                <div className="row">
                    {
                        Tags.map((Tag) => {
                            return (
                                <div className="col-md-2 ps-0 ">
                                    <button className={`text-white border-0 px-2 py-1 rounded-3 fw-bold w-100 ${styles.bgRed}`} >{Tag.title}</button>
                                </div>

                            );
                        })
                    }

                    

                </div>
            </div>
           

            <Section  sectionContent={sectionContent} />
            
        </>
    );
}


export default EverydayValue;