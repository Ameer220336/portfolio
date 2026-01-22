import React, { useEffect, useState } from "react";

const ScrollUp = () => {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const toggleVisible = () => {
            const scrolled = document.documentElement.scrollTop;
            if (scrolled > 300) {
                setVisible(true);
            } else if (scrolled <= 300) {
                setVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisible);
        return () => window.removeEventListener('scroll', toggleVisible);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    if (!visible) return null;

  return (
    <button 
        onClick={scrollToTop} 
        className="fixed bottom-24 right-6 bg-slate-900 text-white p-3 rounded-xl shadow-lg hover:bg-slate-800 transition-colors z-40 hidden md:block"
    >
      <i className="uil uil-arrow-up text-xl"></i>
    </button>
  );
};

export default ScrollUp;
