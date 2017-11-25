import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import { request} from 'request';

enableProdMode();

const PORT = process.env.PORT || 4200;
const DIST_FOLDER = join(process.cwd(), 'dist');

const app = express();

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
const { AppServerModuleNgFactory } = require('main.server');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';

/* Server-side rendering */
  function angularRouter(req, res) {
    res.render(join(DIST_FOLDER, 'browser','index.html'), {
        req: req,
        res: res,
        providers: [{
          provide: 'serverUrl',
          useValue: `http://localhost:4200`
        }]
      });
    
    }
//app.get('/', angularRouter);

  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
app.engine('html', ngExpressEngine({
  bootstrap: AppServerModuleNgFactory
}));

app.set('view engine', 'html');
app.set('views', 'src')

app.get("/api/*",(req,res)=> {
    console.log("Hi");
    res.send({"message":"success"});
});

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*',angularRouter);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});