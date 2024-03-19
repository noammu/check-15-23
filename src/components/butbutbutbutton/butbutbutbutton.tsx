import classNames from 'classnames';
import styles from './butbutbutbutton.module.scss';

export interface ButbutbutbuttonProps {
    className?: string;
    butState: boolean;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Butbutbutbutton = ({ className, butState }: ButbutbutbuttonProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <button disabled={butState} className={styles.butbut}>
                Button
            </button>
        </div>
    );
};
