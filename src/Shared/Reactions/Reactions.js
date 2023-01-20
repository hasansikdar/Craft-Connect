import React from 'react';

const Reactions = ({react, post, handelReaction, id}) => {
    return (
        <div>
            <img name="emoji" onClick={e => handelReaction(id, e.target.src, post?.uniqueId)}
                src={react?.emojilink}
                alt=""
            />
        </div>
    );
};

export default Reactions;