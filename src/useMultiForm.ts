import React, { ReactElement, useState } from 'react';



export default function useMultiForm(steps: ReactElement[]) {
    const [currentIndex, setCurrentIndex] = useState(0)
    function next() {
        setCurrentIndex(i => {
            if (i >= steps.length - 1) return i;
            return i + 1;
        })
    }
    function back() {
        setCurrentIndex(i => {
            if (i <= 0) return i;
            return i - 1;

        })
    }
    function go(index: number) {
        setCurrentIndex(index)
    }
    return {
        currentIndex,
        step: steps[currentIndex],
        go, next, back,
        steps, isFirstPage: currentIndex === 0,
        isLastPage:currentIndex === steps.length-1
    }
}

