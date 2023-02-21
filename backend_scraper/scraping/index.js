const { set } = require("mongoose");
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

const producto1 = [];
const producto2 = [];
const producto3 = [];
const producto4 = [];

// TIEMPO RAMDON DE ESPERA DE 1 SEGUNDO A 1 MINUTOS

const unsegundo = 1000;
const dosMinuto = 60000;

/*   minuto ramdon */

const randomMinute = function (min, max) {
  min = Math.ceil(unsegundo);
  max = Math.floor(dosMinuto);
  return Math.floor(Math.random() * (dosMinuto - unsegundo) + unsegundo);
};

const timeRandom = randomMinute();

/* FECHA */
let date = new Date();
const dates = (date) => {
  let formatted_date =
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate();

  return formatted_date;
};
date = dates(date);
// ========== PRODDUCTO 1 =================================================

const producto1Falabella = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();

    await page.goto(url1Falabella);

    await page.reload();

    // DATOS FALABELLA

    const precio = await page.evaluate(
      () =>
        document.querySelectorAll('[data-internet-price="22.990"]')[0]
          .children[0].children[0].textContent
    );

    const name = await page.evaluate(
      () => document.getElementsByClassName("product-name")[0].textContent
    );

    const datos = {
      store: "falabella",
      name,
      price: precio,
      date,
    };

    // MANDAR EL PRECIO AL ARRAY VACIO

    await page.waitForTimeout(timeRandom);

    producto1.push(datos);

    await page.close();

    return producto1;
  } catch (error) {
    console.log(error.message);
  }
};

const producto1constructor31 = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url1constructor31);
    await page.setViewport({ width: 1920, height: 1080 });
    await page.reload();

    // datos constructor31

    const precio = await page.evaluate(
      () =>
        document.querySelector(
          "#content > div > div.elementor.elementor-25794.elementor-location-single.post-5829.product.type-product.status-publish.has-post-thumbnail.product_cat-terciado.ast-article-single.ast-woo-product-no-review.align-left.box-shadow-inherit.box-shadow-inherit-hover.ast-product-gallery-layout-horizontal.ast-product-gallery-with-no-image.ast-product-tabs-layout-horizontal.first.instock.shipping-taxable.purchasable.product-type-simple.product > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-265acfc7.elementor-section-content-top.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-1589b455 > div > div > div.elementor-element.elementor-element-2d73440.elementor-widget.elementor-widget-woocommerce-product-price > div > p > span.woocommerce-Price-amount.amount > bdi"
        ).innerText
    );

    const name = await page.evaluate(
      () =>
        document.querySelector(
          "#content > div > div.elementor.elementor-25794.elementor-location-single.post-5829.product.type-product.status-publish.has-post-thumbnail.product_cat-terciado.ast-article-single.ast-woo-product-no-review.align-left.box-shadow-inherit.box-shadow-inherit-hover.ast-product-gallery-layout-horizontal.ast-product-gallery-with-no-image.ast-product-tabs-layout-horizontal.first.instock.shipping-taxable.purchasable.product-type-simple.product > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-265acfc7.elementor-section-content-top.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-1589b455 > div > div > div.elementor-element.elementor-element-1d19187b.elementor-widget.elementor-widget-woocommerce-product-title.elementor-page-title.elementor-widget-heading > div > h1"
        ).innerText
    );

    const datos = {
      store: "constructor31",
      name,
      price: precio,
      date,
    };

    // MANDAR EL PRECIO AL ARRAY VACIO

    await page.waitForTimeout(timeRandom);

    producto2.push(datos);

    await page.close();

    return producto2;
  } catch (error) {
    console.log(error.message);
  }
};

// ============= PRODUCTO 2 ================================================

const producto2Falabella = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });
    await page.reload();
    await page.goto(url2Falabella);

    const precio = await page.evaluate(
      () =>
        document.querySelector(
          "#testId-pod-prices-110319000 > ol > li > div > span"
        ).innerText
    );

    const name = await page.evaluate(
      () =>
        document.querySelector(
          "#__next > div > section > div.jsx-133031097.container > div.jsx-133031097.productContainer > div.jsx-3641245301.pdp-container > section.jsx-3641245301.pdp-detail-section > div.jsx-1973014639.basic-details-Desktop.rebranded > div:nth-child(2) > h1 > div"
        ).innerText
    );

    const datos = {
      store: "falabella",
      name,
      price: precio,
      date,
    };

    // subir datos

    await page.waitForTimeout(timeRandom);

    producto3.push(datos);

    page.close();

    return producto3;
  } catch (error) {
    console.log(error.message);
  }
};

const producto2Constructor31 = async () => {
  try {
    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.goto(url2constructor31);
    await page.setViewport({ width: 1920, height: 1080 });
    await page.reload();

    const precio = await page.evaluate(
      () =>
        document.querySelector(
          "#content > div > div.elementor.elementor-25794.elementor-location-single.post-5825.product.type-product.status-publish.has-post-thumbnail.product_cat-osb.product_tag-osb.product_tag-osb-barato.product_tag-osb-estructural.ast-article-single.ast-woo-product-no-review.align-left.box-shadow-inherit.box-shadow-inherit-hover.ast-product-gallery-layout-horizontal.ast-product-gallery-with-no-image.ast-product-tabs-layout-horizontal.first.instock.sale.shipping-taxable.purchasable.product-type-simple.product > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-265acfc7.elementor-section-content-top.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-1589b455 > div > div > div.elementor-element.elementor-element-2d73440.elementor-widget.elementor-widget-woocommerce-product-price > div > p > del > span > bdi"
        ).textContent
    );

    const name = await page.evaluate(
      () =>
        document.querySelector(
          "#content > div > div.elementor.elementor-25794.elementor-location-single.post-5825.product.type-product.status-publish.has-post-thumbnail.product_cat-osb.product_tag-osb.product_tag-osb-barato.product_tag-osb-estructural.ast-article-single.ast-woo-product-no-review.align-left.box-shadow-inherit.box-shadow-inherit-hover.ast-product-gallery-layout-horizontal.ast-product-gallery-with-no-image.ast-product-tabs-layout-horizontal.first.instock.sale.shipping-taxable.purchasable.product-type-simple.product > div > section.elementor-section.elementor-top-section.elementor-element.elementor-element-265acfc7.elementor-section-content-top.elementor-section-boxed.elementor-section-height-default.elementor-section-height-default > div > div > div.elementor-column.elementor-col-50.elementor-top-column.elementor-element.elementor-element-1589b455 > div > div > div.elementor-element.elementor-element-1d19187b.elementor-widget.elementor-widget-woocommerce-product-title.elementor-page-title.elementor-widget-heading > div > h1"
        ).textContent
    );

    const datos = {
      store: "constructor31",
      name,
      price: precio,
      date,
    };

    // subir datos

    await page.waitForTimeout(timeRandom);

    producto4.push(datos);

    page.close();

    return producto4;
  } catch (error) {
    console.log(error.message);
  }
};

const scraping = async () => {
  try {
    const data = await Promise.allSettled([
      producto1Falabella(),
      producto1constructor31(),
      producto2Falabella(),
      producto2Constructor31(),
    ]);

    return data.map((elemets) => elemets.value[0]);
  } catch (error) {
    console.log(error.message);
  }
};
function finish() {
  return "proceso finalizado.";
}
module.exports = {
  scraping,
};
