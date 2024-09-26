import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';

const AnimatedSection = ({ children }) => {
    const ref = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const fadeInUp = {
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0 },
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return (
       
        <motion.div
            ref={ref}
            initial="hidden"
            animate={isVisible ? 'visible' : 'hidden'}
            variants={fadeInUp}
            transition={{ duration: 0.7 }}
        >
            {children}
        </motion.div>
    );
};

export default AnimatedSection;
