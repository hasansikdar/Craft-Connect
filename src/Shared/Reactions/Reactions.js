import React from 'react';

const Reactions = ({react, handelReaction, id}) => {
    return (
        <div>
            <img name="emoji" onClick={e => handelReaction(id, e.target.src)}
                src={react?.emojilink}
                alt=""
            />
        </div>
    );
};

export default Reactions;