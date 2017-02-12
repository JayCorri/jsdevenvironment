import './index.css';
import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');

//adding comment to test appveyor
console.log(`I wish I had ${courseValue} rinao`);