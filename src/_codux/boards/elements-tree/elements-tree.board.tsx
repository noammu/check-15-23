import { createBoard, ContentSlot } from '@wixc3/react-board';
import { ElementsTree } from '../../../components/elements-tree/elements-tree';
import { useState } from 'react';

export default createBoard({
    name: 'ElementsTree',
    Board: () => {
        const [someContext, setSomeContext] = useState(1);
        return(
            <ContentSlot>
                <ElementsTree someContext={someContext} />
            </ContentSlot>
        )
        },
    isSnippet: true,
});