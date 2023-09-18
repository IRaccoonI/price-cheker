import { dnsSearch } from './dns/getSearch';

(async () => {
  const products = await dnsSearch();

  console.log(products);
})();
