import classNames from 'classnames';
import styles from './no-board-stylesheet.module.scss';

export interface NoBoardStylesheetProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NoBoardStylesheet = ({ className }: NoBoardStylesheetProps) => {
    return <div className={classNames(styles.root, className)}>NoBoardStylesheet</div>;
};
