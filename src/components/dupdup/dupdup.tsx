import classNames from 'classnames';
import styles from './dupdup.module.scss';

export interface DupdupProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const Dupdup = ({ className }: DupdupProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <div>
                <a href="/">Link</a>
            </div>
            <div>
                <img src="https://i.gifer.com/Td9n.gif" />
            </div>
        </div>
    );
};
