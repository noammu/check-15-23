import { createBoard } from '@wixc3/react-board';
import { NoChangeOfYehidot } from '../../../components/no-change-of-yehidot/no-change-of-yehidot';

export default createBoard({
    name: 'NoChangeOfYehidot',
    Board: () => <NoChangeOfYehidot />,
    isSnippet: true,
});