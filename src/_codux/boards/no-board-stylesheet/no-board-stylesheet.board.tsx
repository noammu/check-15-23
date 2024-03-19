import { createBoard } from '@wixc3/react-board';
import { NoBoardStylesheet } from '../../../components/no-board-stylesheet/no-board-stylesheet';
import NoBoardStylesheet_board_module from './no-board-stylesheet.board.module.scss';

export default createBoard({
    name: 'NoBoardStylesheet',
    Board: () => <NoBoardStylesheet className={NoBoardStylesheet_board_module.boardClass} />,
    isSnippet: true,
});
