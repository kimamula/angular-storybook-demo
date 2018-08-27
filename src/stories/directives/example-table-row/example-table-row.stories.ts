import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ExampleTableRowComponent } from '../../../app/directives/example-table-row/example-table-row.component';

storiesOf('app-example-table-row', module)
  .add('default', () => ({
    component: ExampleTableRowComponent,
    props: {
      user: { id: 111, firstName: 'Mark', lastName: 'Otto', handleName: '@mdo' },
      rowIndex: 1
    }
  }));
