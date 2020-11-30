import React, { useRef, useEffect } from 'react';
import { mountMarketing } from 'marketing/MarketingApp'

export const MarketingApp = () => {
    const ref = useRef(null);
    useEffect(() => {
        mountMarketing(ref.current);
    })
    return <div ref={ref} />;
}