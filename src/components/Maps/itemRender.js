export const itemRender = (momumentData) =>{
  const images = [];
  console.log(momumentData);
  momumentData.images.forEach((imgURL) => {
    images.push(`<img class="img-page__content-image"src="${imgURL}" alt="">`);
  });
  return `     
                  <!--Info-->
<input class="content__toolbar-input_info"
type="radio" id="1" checked name="menu">
<div class="img-page__content-item img-page__content-info">
    <span class="img-page__content-title">${momumentData.item}</span>
    <p class="img-page__content-definition">${momumentData.info}</p>
</div>
          <!-- ---- -->
          <!--Images-->
<input class="content__toolbar-input_images
      "type="radio" id="2" name="menu">
<div class="img-page__content-item img-page__content-images">
    ${images.join('')}
</div>
        <!-- ---- -->
<div class="underline"></div>`;
};