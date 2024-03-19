import { createBoard } from '@wixc3/react-board';
import { Dupdup } from '../../../components/dupdup/dupdup';

export default createBoard({
    name: 'Dupdup',
    Board: () => <Dupdup />,
    isSnippet: true,
});