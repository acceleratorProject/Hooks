import { BREAKPOINTS } from 'styles';

import useMediaQuery from '../useMediaquery/useMediaquery';

const useScreen = () => {
    const isMobile = useMediaQuery(`(max-width: ${BREAKPOINTS.tablet}px)`);
    const isTablet = useMediaQuery(
        `(min-width: ${BREAKPOINTS.tablet}px) and (max-width: ${BREAKPOINTS.desktop}px)`
    );
    const isDesktop = useMediaQuery(`(min-width: ${BREAKPOINTS.desktop}px)`);

    return { isMobile, isTablet, isDesktop };
};

export default useScreen;
