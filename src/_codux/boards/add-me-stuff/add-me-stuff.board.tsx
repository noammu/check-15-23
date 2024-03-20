import { createBoard } from '@wixc3/react-board';
import { AddMeStuff } from '../../../components/add-me-stuff/add-me-stuff';

export default createBoard({
    name: 'AddMeStuff',
    Board: () => <AddMeStuff />,
    isSnippet: true,
    environmentProps: {
        windowWidth: 1024,
    },
});
