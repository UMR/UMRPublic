import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
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

platformBrowserDynamic().bootstrapModule(AppModule).catch(err => console.error(err));