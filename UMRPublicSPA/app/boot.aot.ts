import { platformBrowser } from '@angular/platform-browser';
import { AppModuleNgFactory } from './compiled/app/app.module.ngfactory';
import { enableProdMode } from '@angular/core';

declare var APP_CONFIG: {
    ENV: any;
};
declare var module: {
    hot: any;
};
if (APP_CONFIG.ENV === "production") {
    enableProdMode();
}
else {
    if (module.hot) {
        module.hot.accept();
    }
}

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory).catch(err => console.error(err));
