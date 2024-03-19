import { createBoard } from '@wixc3/react-board';
import { Butbutbutbutton } from '../../../components/butbutbutbutton/butbutbutbutton';

export default createBoard({
    name: 'Butbutbutbutton',
    Board: () => <Butbutbutbutton butState={false} />,
    isSnippet: true,
});