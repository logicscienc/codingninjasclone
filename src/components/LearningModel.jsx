import React from 'react'
import web_excel from '../assets/web_excel.webp';
import web_learn from '../assets/web_learn.webp';
import web from '../assets/web.webp';

const LearningModel = () => {

     const [scrollHeight, setScrollHeight] = useState(0);
      const [selectedCategory, setSelectedCategory] = useState("Non tech to tech");
    
      const sectionRef = useRef(null);
    
      useEffect(() => {
        const handleScroll = () => {
          const section = sectionRef.current;
          if (!section) return;
    
          const rect = section.getBoundingClientRect();
          const sectionTop = rect.top;
          const sectionHeight = rect.height;
    
          if (sectionTop >= window.innerHeight - 100) {
            setScrollHeight(0);
          } else if (sectionTop + sectionHeight <= 0) {
            setScrollHeight(100);
          } else {
            const progress = Math.min(
              100,
              Math.max(
                0,
                ((window.innerHeight - sectionTop - 100) / sectionHeight) * 100
              )
            );
            setScrollHeight(progress);
          }
        };
    
        handleScroll();
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);
  return (
    <div>
      
    </div>
  )
}

export default LearningModel
