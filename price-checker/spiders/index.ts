import { dnsSearch } from './dns/getSearch';

(async () => {
  const products = await dnsSearch('iphone 14');

  console.log(products);
})();
