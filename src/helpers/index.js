import { appendFile } from "fs";
const API_KEY = "AIzaSyD7R0Z4PmibH-7aVLDWrfNRiXiyvOss40Q";

fetch(`https://www.googleapis.com/webfonts/v1/webfonts?key=${API_KEY}`)
  .then((response) => response.json())
  .then((data) => {
      for (let index = 0; index < data.items.length; index++) {
        for (const [key, value] of Object.entries(data.items[index].files)) {  
          let fontName = data.items[index].family + key
          fontName = fontName.split(' ').join('') 
          const a=`
@font-face {
  font-family:${fontName};
  src: url(${value});
}
          `
          appendFile('./src/fonts.scss', a + '\n', (err) => {
              if (err) {
                  console.error('Xatolik yuz berdi:', err);
              return;
               }
         });
      }
    }
    console.log("Ma'lumot muvaffaqiyatli yozildi!");
  });