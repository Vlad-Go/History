export const htmlRender = async () => {
  return `<div class="modal">
  <div class="container">
    <div class="inner modal__inner">
        <div class="modal__title">Settings</div>
       
            <ul class="settings__body">
              <li class="settings__item" data-role="clean">Clean Data</li> 
            </ul>
          
             
        <div class="modal__controls">
          <button class="modal__btn start" data-role="done"></button>
        </div>
    </div>
  </div>
</div>`;
};