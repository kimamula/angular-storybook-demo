import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ExampleTableComponent } from '../../../app/directives/example-table/example-table.component';

storiesOf('app-example-table', module)
  .add('default', () => ({
    component: ExampleTableComponent
  }));
