import classNames from 'classnames';
import styles from './no-change-of-yehidot.module.scss';

export interface NoChangeOfYehidotProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NoChangeOfYehidot = ({ className }: NoChangeOfYehidotProps) => {
    return <div className={classNames(styles.root, className)}>NoChangeOfYehidot</div>;
};
