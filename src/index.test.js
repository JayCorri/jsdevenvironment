import {expect} from 'chai';
import jsdom from 'jsdom';
import fs from 'fs';

describe('index.html', ()=> {
    it('should say hello', (done)=>{ //need to use 'done' because the test is async
        const index = fs.readFileSync('./src/index.html', 'utf-8');
        jsdom.env(index, function(err, window){
            const h1 = window.document.getElementsByTagName('h1')[0];
            expect(h1.innerHTML).to.equal('ay biotch');
            done();
            window.close();
        });
    });
});