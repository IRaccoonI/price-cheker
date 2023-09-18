import { Browser, Page, firefox } from "playwright";

(async () => {
  const browser: Browser = await firefox.launch({
    headless: true, // Отключение headless-режима (по умолчанию true)
    args: ["--disable-notifications"], // Пример дополнительных аргументов командной строки Firefox
    channel: "firefox", // Указание канала Firefox (по умолчанию 'firefox' или 'firefox-legacy')
    // Другие параметры и настройки по желанию
  });
  const page: Page = await browser.newPage();

  await page.goto("https://www.dns-shop.ru/");
  await page.waitForSelector("#js-chatik-container");

  const title = await page.title();
  await page.screenshot({ path: "screenshot.png", fullPage: true });

  console.log(`Заголовок страницы: ${title}`);

  await browser.close();
})();
