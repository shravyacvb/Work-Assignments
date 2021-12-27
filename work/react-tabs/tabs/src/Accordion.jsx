import {useState , useEffect} from 'react';
import TabContent from './TabContent';

function Accordion({content}){

    const [isEntryOpen, setIsEntryOpen] = useState({});
    const [previousTitle, setPreviousTitle] = useState({});
    const [text, setText] = useState('');

    useEffect(() => 
    {
      toggleEntry(content)
    },[]);

    let counter = 0;
    let data = '';

    function toggleEntry(content, title) {

        if (title === undefined) {
            for (var key in content) {
              if (content.hasOwnProperty(key)) {
                title = key;
                break;
              }
            }
          }
  
        let resetText = previousTitle === title && isEntryOpen[previousTitle];
        
        setIsEntryOpen({
        ...isEntryOpen,
        [title]: !isEntryOpen[title],
        [previousTitle] : !isEntryOpen[previousTitle]
        });

        setPreviousTitle(title);

        if (!resetText) {
        setText(content[title]);
        }
        else
        {
        setText('');
        setPreviousTitle(undefined);
        }
    }
  

    return (
        <div className="accordion">
            <div className="accordion__menu">
                { 
                    Object.keys(content).map( (title,index)=> {

                        return (
                            <div key={title} className={`accordion__content ${isEntryOpen[title] ? 'accordion__content--open' : ''}`}>
                                <button className="accordion__title" onClick={
                                    () => toggleEntry(content,title)
                                }>{title}</button>
                            </div>
                        );
                    })
                }
            </div>
            <div className="content"><TabContent content={text}/></div>
        </div>
    );
}

export default Accordion;