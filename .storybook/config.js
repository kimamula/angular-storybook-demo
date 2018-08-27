import { ExampleTableRowComponent } from "../src/app/directives/example-table-row/example-table-row.component";
import { ExampleTableComponent } from "../src/app/directives/example-table/example-table.component";
import { addDecorator, configure, moduleMetadata } from '@storybook/angular';
import { ScriptHelperComponent } from '../src/stories/helpers/script-helper.component'; // automatically import all files ending in *.stories.ts

const req = require.context('../src/stories', true, /.stories.ts$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator(moduleMetadata({
  declarations: [ScriptHelperComponent, ExampleTableComponent, ExampleTableRowComponent]
}));
configure(loadStories, module);
