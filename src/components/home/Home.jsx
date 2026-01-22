import React from "react";
import { PERSONAL_INFO, SOCIAL_LINKS } from "../../constants/data";
import { motion } from "framer-motion";
import ProfileImg from "../../assets/profile.jpg";

const Home = () => {
  return (
    <section className="min-h-screen flex items-center justify-center pt-24 pb-12 px-4" id="home">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        
        {/* Text Content */}
        <div className="flex flex-col gap-6 order-2 md:order-1">
          <div className="flex gap-4">
             {SOCIAL_LINKS.map(link => (
                 <a key={link.name} href={link.url} target="_blank" rel="noopener noreferrer" className="text-2xl text-slate-500 hover:text-slate-900 transition-colors">
                     <i className={link.icon}></i>
                 </a>
             ))}
          </div>

          <motion.div
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.5 }}
          >
              <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-4 flex items-center gap-4">
                  {PERSONAL_INFO.name}
                  <motion.span 
                    animate={{ rotate: [0, 14, -8, 14, -4, 10, 0, 0] }}
                    transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1 }}
                    className="inline-block origin-[70%_70%]"
                  >
                      👋
                  </motion.span>
              </h1>
              <div className="flex items-center gap-4 mb-6">
                  <span className="h-[1px] w-12 bg-slate-400"></span>
                  <h3 className="text-xl md:text-2xl font-medium text-slate-600">
                      {PERSONAL_INFO.title}
                  </h3>
              </div>
              <p className="text-lg text-slate-500 max-w-lg leading-relaxed mb-8">
                  {PERSONAL_INFO.description}
              </p>
              
              <a href="#contact" className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-2xl hover:bg-slate-800 transition-colors">
                  Say Hello
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24"><path d="M14.2199 21.9352C13.0399 21.9352 11.3699 21.1052 10.0499 17.1352L9.32988 14.9752L7.16988 14.2552C3.20988 12.9352 2.37988 11.2652 2.37988 10.0852C2.37988 8.91525 3.20988 7.23525 7.16988 5.90525L15.6599 3.07525C17.7799 2.36525 19.5499 2.57525 20.6399 3.65525C21.7299 4.73525 21.9399 6.51525 21.2299 8.63525L18.3999 17.1252C17.0699 21.1052 15.3999 21.9352 14.2199 21.9352ZM7.63988 7.33525C4.85988 8.26525 3.86988 9.36525 3.86988 10.0852C3.86988 10.8052 4.85988 11.9052 7.63988 12.8252L10.1599 13.6652C10.3799 13.7352 10.5599 13.9152 10.6299 14.1352L11.4699 16.6552C12.3899 19.4352 13.4999 20.4252 14.2199 20.4252C14.9399 20.4252 16.0399 19.4352 16.9699 16.6552L19.7999 8.16525C20.3099 6.62525 20.2199 5.36525 19.5699 4.71525C18.9199 4.06525 17.6599 3.98525 16.1299 4.49525L7.63988 7.33525Z"></path></svg>
              </a>
          </motion.div>
        </div>

        {/* Image Content */}
        <div className="order-1 md:order-2 flex justify-center">
            <motion.div 
               className="relative w-72 h-72 md:w-96 md:h-96"
               animate={{ 
                   borderRadius: ["60% 40% 30% 70%/60% 30% 70% 40%", "30% 60% 70% 40%/50% 60% 30% 60%", "60% 40% 30% 70%/60% 30% 70% 40%"]
               }}
               transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
               style={{ 
                   backgroundImage: `url(${ProfileImg})`,
                   backgroundSize: 'cover',
                   backgroundPosition: 'center',
                   boxShadow: "inset 0 0 0 9px rgb(255 255 255 / 30%)" 
               }}
            >
            </motion.div>
        </div>

      </div>
      
    </section>
  );
};

export default Home;
