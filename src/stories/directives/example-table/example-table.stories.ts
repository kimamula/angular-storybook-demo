import { storiesOf } from '@storybook/angular';
import { action } from '@storybook/addon-actions';
import { ExampleTableComponent } from '../../../app/directives/example-table/example-table.component';

storiesOf('app-example-table', module)
  .add('default', () => ({
    component: ExampleTableComponent,
    props: {
      users: [
        { id: 111, firstName: 'Mark', lastName: 'Otto', handleName: '@mdo' },
        { id: 222, firstName: 'Jacob', lastName: 'Thornton', handleName: '@fat' },
        { id: 123, firstName: 'Larry', lastName: 'the Bird' },
      ],
      disabledUserIds: [222]
    }
  }));
