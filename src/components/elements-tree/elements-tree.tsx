import classNames from 'classnames';
import styles from './elements-tree.module.scss';
import { AddMeStuff } from '../add-me-stuff/add-me-stuff';

export interface ElementsTreeProps {
    className?: string;
    someContext: number;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const ElementsTree = ({ className, someContext }: ElementsTreeProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div
                className={classNames(
                    styles.t,
                    styles.o,
                    styles.n,
                    styles.s,
                    styles.o,
                    styles.f,
                    styles.s,
                    styles.e,
                    styles.le,
                    styles.ct,
                    styles.ors,
                )}
            >
                <div className={styles.grid}>
                    <h2 className={styles.createdfromcode}>Replace content</h2>
                    <div>
                        <img src="/src/assets/react.svg" />
                    </div>
                    <div>
                        <img src="/src/assets/scss.svg" />
                    </div>
                    <div>
                        <img src="/src/assets/profile       pic.jpg" className={styles.bigimgage} />
                    </div>
                    <p className={styles.kljki}>We have a prop! Here it is: {someContext} </p>
                    <div className={styles.tonsofrule}>erer</div>
                    <img alt="kdkdkd" src="/src/assets/espeon.png" className={styles.ethhhhhpeon} />
                    <a href="/">Link</a>
                </div>
                <div></div>
            </div>
            <div></div>
            <div>
                <AddMeStuff className={styles.ftgh} />
                <form>
                    <textarea />
                    <button>Button</button>
                    <label>First name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Last name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
            <span>
                <div>
                    <div>
                        <div>
                            <h1>Heading 1</h1>
                        </div>
                    </div>
                </div>
                text
            </span>
            ElementsTree
            <div>
                <AddMeStuff className={styles.ftgh} />
                <form>
                    <textarea />
                    <button>Button</button>
                    <label>First name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <label>Last name:</label>
                    <br />
                    <input type="text" />
                    <br />
                    <br />
                    <input type="submit" value="Submit" />
                </form>
            </div>
        </div>
    );
};
