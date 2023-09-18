import { Browser, Page, firefox } from 'playwright';

export enum MARKET {
  DNS = 'dns',
}
export interface GetSearchResponseItem {
  id: string;
  title: string;
  price: number;
  market: MARKET;
  imgSrc: string;
  averageRating: number;
  totalRating: number;
}

function parseKString(str: string): number {
  const match = str.match(/^(\d+(\.\d+)?)([kK])$/); // Ищем соответствие шаблону
  if (match) {
    const number = parseFloat(match[1]); // Извлекаем число из строки
    const unit = match[3].toLowerCase(); // Извлекаем единицу измерения и переводим в нижний регистр
    if (unit === 'k') {
      return number * 1000; // Умножаем на 1000, если единица - "k"
    }
  }
  return parseFloat(str); // Если строка не соответствует формату, просто парсим как число
}

function getPrice(str: string): number {
  const firstNumber = str.match(/[\d\s]+/); // Находим первую последовательность цифр
  if (firstNumber) {
    return +firstNumber[0].replaceAll(/\s/g, '');
  }
  return 0;
}

export const dnsSearch = async () => {
  const browser: Browser = await firefox.launch({
    headless: true, // Отключение headless-режима (по умолчанию true)
    args: ['--disable-notifications'], // Пример дополнительных аргументов командной строки Firefox
    channel: 'firefox', // Указание канала Firefox (по умолчанию 'firefox' или 'firefox-legacy')
    // Другие параметры и настройки по желанию
  });
  const page: Page = await browser.newPage();

  await page.goto(
    'https://www.dns-shop.ru/search/?q=iphone+14&category=17a8a01d16404e77',
  );
  await page.waitForSelector('#js-chatik-container');

  const productLocators = page.locator('.catalog-product');
  const elementsCount = await productLocators.count();
  const products: GetSearchResponseItem[] = [];

  for (let index = 0; index < elementsCount; index++) {
    const element = await productLocators.nth(index);
    products.push({
      totalRating: parseKString(
        await element.locator('.catalog-product__rating').innerText(),
      ),
      averageRating:
        +(await element
          .locator('.catalog-product__rating')
          .getAttribute('data-rating')) || 0,
      id: `${index}`,
      imgSrc: await element.locator('img').getAttribute('data-src'),
      market: MARKET.DNS,
      price: getPrice(await element.locator('.product-buy__price').innerText()),
      title: await element.locator('.catalog-product__name').innerText(),
    });
  }

  browser.close();
  return products;
};
