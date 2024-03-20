import classNames from 'classnames';
import NoStyleSheet_module from './no-style-sheet.module.scss';

export interface NoStyleSheetProps {
    className?: string;
}

/**
 * This component was created using Codux's Default new component template.
 * To create custom component templates, see https://help.codux.com/kb/en/article/kb16522
 */
export const NoStyleSheet = ({ className }: NoStyleSheetProps) => {
    return (
        <div
            className={classNames(NoStyleSheet_module.hfjjfkjfjgf, NoStyleSheet_module.sdfsdfssdf)}
        >
            NoStyleSheet
            
        </div>
    );
};
