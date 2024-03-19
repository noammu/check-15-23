import { createBoard } from '@wixc3/react-board';
import { NoStyleSheet } from '../../../components/no-style-sheet/no-style-sheet';
import NoStyleSheet_board_module from './no-style-sheet.board.module.scss';

export default createBoard({
    name: 'NoStyleSheet',
    Board: () => <NoStyleSheet className={NoStyleSheet_board_module.boardStyle} />,
    isSnippet: true,
});
