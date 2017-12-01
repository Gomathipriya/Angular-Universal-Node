import 'reflect-metadata';
import 'zone.js/dist/zone-node';
import { renderModuleFactory } from '@angular/platform-server'
import { enableProdMode } from '@angular/core'
import * as express from 'express';
import { join } from 'path';
import { readFileSync } from 'fs';
import { request} from 'request';
import * as environment from '../environment.json';

var jwt = require ('jsonwebtoken'); 

enableProdMode();

const PORT = process.env.PORT || 4200;
const DIST_FOLDER = join(process.cwd(), 'dist');

const app = express();

const template = readFileSync(join(DIST_FOLDER, 'browser', 'index.html')).toString();
const { AppServerModuleNgFactory } = require('main.server');

// Express Engine
import { ngExpressEngine } from '@nguniversal/express-engine';

var secretKey = (<any>environment).pwd;
/* Server-side rendering */
  function angularRouter(req, res) {
    
    var token = generateToken();
    res.render(join(DIST_FOLDER, 'browser','index.html'), {
        req: req,
        res: res,
        providers: [{
          provide: 'serverUrl',
          useValue: `http://localhost:4200`
        },{
          provide: 'token',
          useValue: token
        }]
      });
    
    }

    function generateToken(){
      return jwt.sign({ id: (<any>environment).userName }, secretKey, {
        expiresIn: 60 * 60
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
    console.log(req.headers.authorization);
    console.log(req.headers.authorization.split(" ")[1]);
    jwt.verify(req.headers.authorization.split(" ")[1],secretKey, function(err, decoded) {
      console.log(decoded);
      console.log(err);
      if(err) return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });
      else return res.send({"message":"success"});
    });
});

app.get('*.*', express.static(join(DIST_FOLDER, 'browser')));

app.get('*',angularRouter);

app.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}!`);
});