import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app.module';

platformBrowserDynamic().bootstrapModule(AppModule);

declare var module: {
    hot: any;
};
if (module.hot) {
    module.hot.accept();
}
