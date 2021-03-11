import React from 'react';
import {tagButtons} from '../../constants';
import TagButton from '../tag-button';

const TagButtonsList = ({active, onTagButtonClick}) => (
    <>
      {
        tagButtons.map(({name, text}) => (
            <TagButton
                onButtonClick={onTagButtonClick}
                key={name}
                text={text}
                name={name}
                active={active === name}
            />
        ))
      }
    </>
)

export default TagButtonsList;
