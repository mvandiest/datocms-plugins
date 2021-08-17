import './style.sass';
import sanitize from 'sanitize-html';
import pretty from 'pretty';

window.DatoCmsPlugin.init((plugin) => {
  console.log('console.log(plugin.parameters);', console.log(plugin.parameters));
  const sanitizeOptions = plugin.parameters.sanitizeHtmlOptions;
  plugin.startAutoResizer();

  const container = document.createElement('div');
  container.classList.add('container');

  const button = document.createElement('button');
  button.classList.add('DatoCMS-button');
  button.classList.add('DatoCMS-button--simple');
  button.textContent = 'Sanitize HTML';
  button.onclick = () => {
    // eslint-disable-next-line no-alert
    if (window.confirm('This will remove all CSS classes and disallowed tags. Are you sure?')) {
      const oldValue = plugin.getFieldValue(plugin.fieldPath);
      const newValue = pretty(sanitize(oldValue, sanitizeOptions), { ocd: true });
      console.log(newValue);
      plugin.setFieldValue(plugin.fieldPath, newValue);
    }
  };
  container.appendChild(button);

  document.body.appendChild(container);
});
