const puppeteer = require("puppeteer");

//      Terciado Estructural pino 12 mm 122 x 244 cm

const url1Falabella =
  "https://sodimac.falabella.com/sodimac-cl/product/110284022/Terciado-Estructural-pino-12-mm-122-x-244-cm/110284026";
const url1constructor31 =
  "https://www.constructor31.com/shop/tableros/terciado/terciado-estructural-15mm-1-22x2-44/?utm_source=Google%20Shopping&utm_campaign=Constructor31&utm_medium=cpc&utm_term=5829&gclid=Cj0KCQjwof6WBhD4ARIsAOi65ahLar7dxTIBgV0MIZIzIsc9BVPtBl-ksxJLr1y4S8AwEeKUbB2QIVEaAt1OEALw_wcB";

//      OSB estructural 11 mm 122 x 244 cm

const url2Falabella =
  "https://sodimac.falabella.com/sodimac-cl/product/110319000/OSB-estructural-11-mm-122-x-244-cm/110319009";
const url2constructor31 =
  "https://www.constructor31.com/shop/tableros/osb/osb-11-1-mm-1-22x2-44/?utm_source=Google%20Shopping&utm_campaign=Constructor31&utm_medium=cpc&utm_term=5825&gclid=Cj0KCQjwof6WBhD4ARIsAOi65ajKk3rmk3hB6QYVLU0NxTPBacMXLElpHnxwqNIjp27XdiW0TmD5EvMaAmMlEALw_wcB";

const dataFound = [];
const pageToApplyScrapping = [
  {
    url: url1Falabella,
    priceQuerySelector: "#testId-pod-prices-110284022 > ol > li > div > span",
    nameQuerySelector:
      "#__next > div > section > div.jsx-133031097.container > div.jsx-133031097.productContainer > div.jsx-3641245301.pdp-container > section.jsx-3641245301.pdp-detail-section > div.jsx-1973014639.basic-details-Desktop.rebranded > div:nth-child(2) > h1 > div",
    source: "FALABELLA",
  },
  /*   {
    url: url1constructor31,
    priceQuerySelector:
      "#content > div > div.elementor.elementor-25794.elementor-location-single.post-5829.product.type-product.status-publish.has-post-thumbnail.product_cat-terciado.ast-article-single.ast-woo-product-no-review.align-left.box-shadow-inherit.box-shadow-inherit-hover.ast-product-gallery-layout-horizontal.ast-product-gallery-with-no-image.ast-product-tabs-layout-horizontal.first.instock.shipping-taxable.purchasable.product-type-simple.product > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-265acfc7.elementor-section-content-top.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-1589b455 > div > div > div.elementor-element.elementor-element-2d73440.elementor-widget.elementor-widget-woocommerce-product-price > div > p > span.woocommerce-Price-amount.amount > bdi",
    nameQuerySelector:
      "#content > div > div.elementor.elementor-25794.elementor-location-single.post-5829.product.type-product.status-publish.has-post-thumbnail.product_cat-terciado.ast-article-single.ast-woo-product-no-review.align-left.box-shadow-inherit.box-shadow-inherit-hover.ast-product-gallery-layout-horizontal.ast-product-gallery-with-no-image.ast-product-tabs-layout-horizontal.first.instock.shipping-taxable.purchasable.product-type-simple.product > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-265acfc7.elementor-section-content-top.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-1589b455 > div > div > div.elementor-element.elementor-element-1d19187b.elementor-widget.elementor-widget-woocommerce-product-title.elementor-page-title.elementor-widget-heading > div > h1",
    source: "CONSTRUCTOR 31",
  }, */
];

const genericScrapping = async ({
  url,
  priceQuerySelector = "",
  nameQuerySelector = "",
  source,
}) => {
  console.log("OPEN SOURCE:", source);
  console.log(
    "🚀 ~ file: scraping.js ~ line 174 ~ genericScrapping ~ priceQuerySelector",
    typeof priceQuerySelector
  );
  console.log(
    "🚀 ~ file: scraping.js ~ line 174 ~ genericScrapping ~ nameQuerySelector",
    typeof nameQuerySelector
  );

  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url);
    await page.setViewport({ width: 1920, height: 1080 });
    await page.reload();

    /*     const [precio, name] = await Promise.all([
      page.evaluate(() => document.querySelector(priceQuerySelector).innerText),
      page.evaluate(() => document.querySelector(nameQuerySelector).innerText),
    ]); */
    const precio = await page.evaluate(
      () => document.querySelector(priceQuerySelector.toString()).innerText
    );
    const name = await page.evaluate(
      () => document.querySelector(nameQuerySelector.toString()).innerText
    );
    if (priceQuerySelector && nameQuerySelector) {
      const precio = await page.evaluate(
        () => document.querySelector(priceQuerySelector.toString()).innerText
      );
      const name = await page.evaluate(
        () => document.querySelector(nameQuerySelector.toString()).innerText
      );
      const data = { tienda: source, producto: name, precio: precio };

      console.log(
        "🚀 ~ file: scraping.js ~ line 187 ~ genericScrapping ~ data",
        data
      );
      //subir datos

      await page.waitForTimeout(20000);
      //precios.push(datosFalabella)

      page.close();

      console.log("CLOSE SOURCE:", source);
      dataFound.push(data);
    }
  } catch (error) {
    console.log({ message: error.message, error });
  }
};

const handleScrapping = async () => {
  const promises = pageToApplyScrapping.map((dataSource) =>
    genericScrapping(dataSource)
  );
  try {
    await Promise.all(promises);
  } catch (error) {
    console.log({ error, message: error.message });
  }
};

const scraping = async () => {
  try {
    /*    const datos = await Promise.allSettled([producto1Falabella(), producto1constructor31(),producto2Falabella(),producto2Constructor31()])
        return datos */
    await handleScrapping();
    console.log("FINAL RESULT:", dataFound);
    return dataFound;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { scraping };
