import { AppComponent as GridColumnHidingMovingComponent } from './app.component';

const gridColumnHidingMovingExampleConfig = {
  title: 'Column hiding & moving',
  description: `
  <p>Click the <kbd>Column Shown</kbd> button, you can select or drag the columns.</p>
  `,
  component: GridColumnHidingMovingComponent,
  files: [
    {
      file: 'app.component.html',
      content: require('!!highlight-loader?raw=true&lang=html!./app.component.html'),
      filecontent: require('!!raw-loader!./app.component.html'),
    },
    {
      file: 'app.component.ts',
      content: require('!!highlight-loader?raw=true&lang=typescript!./app.component.ts'),
      filecontent: require('!!raw-loader!./app.component.ts'),
    },
    {
      file: 'app.component.scss',
      content: require('!!highlight-loader?raw=true&lang=scss!./app.component.scss'),
      filecontent: require('!!raw-loader!./app.component.scss'),
    },
  ],
};

export { GridColumnHidingMovingComponent, gridColumnHidingMovingExampleConfig };
