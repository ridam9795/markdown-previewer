import React from 'react'
import marked from 'react-dom';
import renderer from 'react-dom';

function Preview(props) {
    function getMarkDownText() {
        const rawMarkup = marked(props.markdown,{renderer:renderer})
        return {__html: 'avs'};
      } 
    return (
        <div
      //  dangerouslySetInnerHTML={getMarkDownText()}
        dangerouslySetInnerHTML={{__html: props.markdown}}
          id="preview"
        >
            
        </div>
      );
}

export default Preview;