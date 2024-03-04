'use client'
import {useState, useEffect, useRef} from 'react';

interface AnimatedNumbersProps {
    start?:number;
    end: number;
}
export default function AnimatedNumbers({start = 0, end}: AnimatedNumbersProps) {
    const [value, setValue] = useState(start)
    const ref = useRef(start)

    const counter = end / 200;
    
    const Count = () => {
        if (ref.current < end) {
            const result = Math.ceil(ref.current + counter);
            if (result > end) return setValue(end);
            setValue(result);
            ref.current = result;
        }
        setTimeout(Count, 70)
    };

    useEffect(() => {
        let isMounted = true;
        if (isMounted) {
          Count();
        }
        return () => {
          isMounted = false;
        };
      }, [end]);



 return (
     <>
        {value} 
     </>
 );
};