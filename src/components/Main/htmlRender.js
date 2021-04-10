export const htmlRender = () => {
  return `
  <div class="main-page"  style="background-image: url('./img/map.jpg');">
      <div class="overlay"></div>
      <div class="container main-page__container" > 
        <div class="page__inner main-page__inner">
          <div class="main-page__header">
            <h1 class="title main-page__title">History</h1>
          </div>
          <div class="main-page__body">
              <ul class="main-page__menu">
                <li class="main-page__menu-item">
                  <a href="#dates">Dates</a>
                </li>
                <li class="main-page__menu-item">
                  <a href="#definitions">Definitions</a>
                </li>
                <li class="main-page__menu-item">
                  <a href="#personalities">Personalities</a>
                </li>
                <li class="main-page__menu-item">
                  <a href="#monuments">Monuments</a>
                </li>
                <li class="main-page__menu-item">
                  <a href="#maps">Maps</a>
                </li>
                <li class="main-page__menu-item">
                  <a href="#architecture">Architecture</a>
                </li>
                <li class="main-page__menu-item">
                  <a href="#arts">Arts</a>
                </li>
              </ul>
          </div>
          <div class="main-page__footer">
              <div class="line" data-role="settings"></div>
          </div>
        </div>
      </div>
   </div>`;
};