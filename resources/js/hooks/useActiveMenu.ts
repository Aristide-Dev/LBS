import { useState, useEffect } from 'react';

export function useActiveMenu(itemIds: string[], offset: number = 100) {
    const [activeId, setActiveId] = useState<string>('');

    useEffect(() => {
        if (itemIds.length === 0) return;

        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            
            // Special case: near top of page
            if (scrollPosition < 100) {
                setActiveId(itemIds[0].startsWith('#') ? itemIds[0] : `#${itemIds[0]}`);
                return;
            }

            // Find the section that is currently most visible in the viewport
            // We look at all sections and pick the one that crossed a threshold
            const viewportThreshold = scrollPosition + offset + 50;

            let currentId = activeId;

            // Iterate backwards to find the last section that has its top above the threshold
            // This is generally more reliable for scroll spy
            for (let i = itemIds.length - 1; i >= 0; i--) {
                const id = itemIds[i];
                const cleanId = id.startsWith('#') ? id.substring(1) : id;
                const element = document.getElementById(cleanId);

                if (element && element.offsetTop <= viewportThreshold) {
                    currentId = id.startsWith('#') ? id : `#${id}`;
                    break;
                }
            }

            // Special case: near bottom of page
            if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 20) {
                currentId = itemIds[itemIds.length - 1].startsWith('#') ? itemIds[itemIds.length - 1] : `#${itemIds[itemIds.length - 1]}`;
            }

            setActiveId(currentId);
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, [itemIds, offset]);

    return activeId;
}
