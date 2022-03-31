import {useState} from 'react';
import { AiOutlineArrowUp } from "react-icons/ai";

import "../styles/scroll.scss";

export default function Scroll() {
  const [scroll, setScroll] = useState(false);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            setScroll(true)
        } else {
            setScroll(false);
        }
    });

    function scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    }    
    
  return (
    <div className={`${"scroll"} ${scroll ? 'active' : ''}`} onClick={scrollToTop}>
      <AiOutlineArrowUp size={35}/>
    </div>
  )
}
