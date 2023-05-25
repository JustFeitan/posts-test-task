import '@testing-library/jest-dom/extend-expect';
window.matchMedia =
    window.matchMedia ||
    (() => {
        return {
            matches: false,
            addListener: () => {},
            removeListener: () => {},
        };
    });
//scroll mock
window.scroll = jest.fn();
