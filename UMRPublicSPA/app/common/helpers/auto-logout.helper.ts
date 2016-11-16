let logoutTimer;

export function activateAutoLogout(refreshTokenLifeTime: number, callback: () => void, thisArg) {
    clearTimer();
    if (refreshTokenLifeTime > 0) {
        logoutTimer = setTimeout(() => {
            console.log(`Trying to automatically logout after ${refreshTokenLifeTime} seconds`);
            callback.call(thisArg);
        }, refreshTokenLifeTime * 1000);
    }
}

export function deActivateAutoLogout() {
    clearTimer();
}

function clearTimer() {
    if (logoutTimer) {
        clearTimeout(logoutTimer);
    }
}