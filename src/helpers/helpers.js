import { useEffect } from 'react';

export default function animateInView(refElement, animationStartFrom, customThreshold) {
    const animationDirection = animationStartFrom ? animationStartFrom : 'bottom';
    const threshold = customThreshold ? customThreshold : '.5'
  
    var observer = new IntersectionObserver(function(entries) {
        if(entries[0].isIntersecting === true)
        //console.log(refElement.current.querySelector('.opacity-0'))
        for (let item of refElement.current.children) {
            item.classList.add('fadeIn');
        }
    }, { threshold: [threshold] });

    useEffect(() => {
        observer.observe(refElement.current);
    }, [])

    return animationDirection;
}