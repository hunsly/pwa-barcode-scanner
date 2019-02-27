import LocalizedStrings from 'react-localization';

let localization = new LocalizedStrings({
 en:{
   subdomain:"world",
   header__title:"PWA Barcode Scanner 🛒",
   footer__link_camera:"Camera",
	 footer__link_history:"History",
	 additives__unknown:"Unknown ❓",
	 additives__additives:"Additives",
	 additives__none:"None",
	 DietaryData__special_dieats:"Special Diets",
   DietaryData__unknown:"Unknown ❓",
   DietaryData__yes:"Yes",
   DietaryData__no:"No",
   DietaryData__plantBased:"🌱 Plant Based:",
   DietaryData__Gluten:"🌾 Gluten:",
   DietaryData__Lactose:"🐄 Lactose:",
   DietaryData__PalmOil:"⚠️ Palm Oil:",
   NutrientLevels__title:"Nutrient Levels",
   NutrientLevels__unknown:"Unknown ❓",
   NutrientLevels__title_sugars:"Sugars",
   NutrientLevels__title_salt:"Salt",
   NutrientLevels__title_fat:"Fat",
   "NutrientLevels__title_saturated fat":"Saturated fat",
   NutrientLevels__value_low:"Low",
   NutrientLevels__value_moderate:"Moderate",
   NutrientLevels__value_high:"High",
   ProductDisplayTitle__pictureNotFound:"Picture not found",
   historyDisplay__Scan_some_products:"Scan some products to see them here! 🥚",
   historyDisplay__pictureNotFound:"Picture not found",
   CameraHandler__loading:"Loading...",
   CameraHandler__Enable_your_camera:"Enable your camera with the button below",
   CameraHandler__Camera_is_not_supported:"Camera is not supported 😢",
   AddProductInfo__off:"Open Food Facts",
   AddProductInfo__here:"here",
   AddProductInfo__off_link:"The information provided comes from the {0} Database.",
   AddProductInfo__extend_information:"You can extend the information of this product in {0} 🙂",
   AddProductInfo__contribute:"Learn how to contribute in {0} 🙂",
   productNotFound__barcode_no_results:"The barcode: {0} gave no results!",
   productNotFound__enter_barcode:"You can also enter the barcode below and try again:",
   productNotFound__find_button:"Find",
   productNotFound__find_input_placeholder:"e.g. 7622300710613",
   video__scan_product:"Scan product's barcode and get its nutritional values 🍎",
   video__camera_access_not:"Camera access is not enabled"

 },
 hu: {
 subdomain:"hu",
 header__title:"PWA Vonalkód szkenner 🛒",
 footer__link_camera:"Kamera",
 footer__link_history:"Előzmények",
 additives__unknown:"Ismeretlen ❓",
 additives__additives:"Adalékanyagok",
 additives__none:"Nincs",
 DietaryData__special_dieats:"Speciális diéta",
 DietaryData__unknown:"Ismeretlen ❓",
 DietaryData__yes:"Igen",
 DietaryData__no:"Nem",
 DietaryData__plantBased:"🌱 Nővényi alapú:",
 DietaryData__Gluten:"🌾 Glutén:",
 DietaryData__Lactose:"🐄 Laktóz:",
 DietaryData__PalmOil:"⚠️ Pálma olaj:",
 NutrientLevels__title:"Tápanyag szintek",
 NutrientLevels__unknown:"Ismeretlen ❓",
 NutrientLevels__title_sugars:"Cukrok",
 NutrientLevels__title_salt:"Só",
 NutrientLevels__title_fat:"Zsír",
 "NutrientLevels__title_saturated fat":"Telített zsír",
 NutrientLevels__value_low:"Alacsony",
 NutrientLevels__value_moderate:"Közepes",
 NutrientLevels__value_high:"Magas",
 ProductDisplayTitle__pictureNotFound:"Fotó nem található",
 historyDisplay__Scan_some_products:"Szkennelj be terméket hogy megjelenjen itt! 🥚",
 historyDisplay__pictureNotFound:"Fotó nem található",
 CameraHandler__loading:"Betöltés...",
 CameraHandler__Enable_your_camera:"Kapcsold be a kamerát a gomb megnyomásával",
 CameraHandler__Camera_is_not_supported:"Kamera nincs támogatva 😢",
 AddProductInfo__off:"Open Food Facts",
 AddProductInfo__here:"Itt",
 AddProductInfo__off_link:"Az információk az {0} adatbázisból származnak.",
 AddProductInfo__extend_information:"{0} bővítheted a termékinformációkat 🙂",
 AddProductInfo__contribute:"{0} megismerheted hogy hogyan járulhatsz hozzá 🙂",
 productNotFound__barcode_no_results:" {0} azonosítójú termékre nincs találat!",
 productNotFound__enter_barcode:"Megpróbálhatod kézzel is beírni a  vonalkódot:",
 productNotFound__find_button:"Keresés",
 productNotFound__find_input_placeholder:"pl.: 7622300710613",
 video__scan_product:"Olvasd be a terméket, hogy megismerd az összetevőket! 🍎",
 video__camera_access_not:"Nincs hozzáférés a kamerához"
 }
});



if (('localStorage' in window) && window['localStorage'] !== null) {
 var lang = localStorage.getItem("language");
 if (lang != undefined) localization.setLanguage(lang);
}


export default localization;
