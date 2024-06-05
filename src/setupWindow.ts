export default (layout: HTMLElement) => {
  const layoutHeading = layout.querySelector<HTMLElement>('#window-header');

  if (!layoutHeading) throw new Error('window header not found');

  const closeButton = layoutHeading.querySelector<HTMLButtonElement>('#close');
  const minimizeButton = layoutHeading.querySelector<HTMLButtonElement>('#minimize');
  const expandButton = layoutHeading.querySelector<HTMLButtonElement>('#expand');

  if (!closeButton || !minimizeButton || !expandButton)
    throw new Error('window header not found');

  closeButton.addEventListener('click', handleClose)
  minimizeButton.addEventListener('click', handleMinimize)
  expandButton.addEventListener('click', handleExpand)

  let grabbing = false;
  let offset = { x: 0, y: 0 };


  layoutHeading.onmousedown = (ev: MouseEvent) => {
    const target = ev.target as HTMLElement;
    target.style.cursor = 'grabbing';

    offset = { x: ev.offsetX, y: ev.offsetY };

    grabbing = true;
  };

  layoutHeading.onmouseup = ev => {
    const target = ev.target as HTMLElement;
    target.style.cursor = 'grab';
    grabbing = false;
  };

  layoutHeading.onmouseenter = ev => {
    const target = ev.target as HTMLElement;
    target.style.cursor = 'grab';
  };

  window.onmouseup = _ => {
    grabbing = false;
  };

  document.addEventListener('mousemove', ev => {
    ev.preventDefault();
    ev.stopPropagation();

    const coords = { x: ev.clientX, y: ev.clientY };

    if (grabbing) {
      layout.style.transform = `
        translateX(${coords.x - offset.x}px)
        translateY(${coords.y - offset.y}px)
      `;
    }
  });
};


const handleMinimize = (ev: MouseEvent) => {
  ev.preventDefault()
  ev.stopPropagation()
}

const handleExpand = (ev: MouseEvent) => {
  ev.preventDefault()
  ev.stopPropagation()
}

const handleClose = (ev: MouseEvent) => {
  ev.preventDefault()
  ev.stopPropagation()
}
