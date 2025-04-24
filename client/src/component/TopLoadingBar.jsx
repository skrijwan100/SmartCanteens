import React, { useRef, useEffect } from 'react'
import LoadingBar from 'react-top-loading-bar';


const TopLoadingBar = ({ progress, setProgress }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (progress > 0) {
            ref.current.continuousStart();
        }
        if (progress === 100) {
            ref.current.complete();
        }
    }, [progress]);
    return (
        <div>
            <LoadingBar ref={ref} height={3} />
        </div>
    )
}

export default TopLoadingBar
