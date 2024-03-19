import classNames from 'classnames';
import styles from './add-me-stuff.module.scss';

export interface AddMeStuffProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const AddMeStuff = ({ className }: AddMeStuffProps) => {
    return (
        <div className={classNames(styles.root, className)}>
            <img src="https://i.gifer.com/Td9n.gif" />
            <img
                src="https://wixplosives.github.io/codux-assets-storage/add-panel/image-placeholder.jpg"
                alt=""
            />
            AddMeStuff
        </div>
    );
};
