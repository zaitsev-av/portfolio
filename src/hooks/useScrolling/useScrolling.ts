import {useEffect, useState} from "react";

export function useScrolling() {
	const [scrolled, setScrolled] = useState(false);
	
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 0) {
				setScrolled(true);
			} else {
				setScrolled(false);
			}
		};
		
		window.addEventListener('scroll', handleScroll);
		
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	}, []);
	return scrolled;
}