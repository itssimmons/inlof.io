import setupWindow from './setupWindow';

(document.querySelector('#app') as HTMLDivElement).innerHTML = `
  <main id="window">
    <header id="window-header">
      <label>TRY GRAB ME</label>
      
      <div class="button-wrappers">
        <button id="close"></button>
        <button id="minimize"></button>
        <button id="expand"></button>
      </div>
    </header>

    <section id="window-content">
      <!-- content -->
    </section>
  </div>
`;


setupWindow(document.querySelector('#window') as HTMLElement);
