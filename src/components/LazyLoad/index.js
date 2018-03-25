const splashScreen = document.getElementById(`splash-screen`);
const splashScreenStyle = splashScreen.style;

function showSplash() {
    splashScreenStyle.visibility = `visible`;
    return () => splashScreenStyle.visibility = `hidden`;
}

const LazyLoad = function (Component) {
    return () => {
        const closeSplash = showSplash();
        return Component().finally(() => closeSplash())
    }
};

export default LazyLoad;

