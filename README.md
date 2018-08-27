# AngularStorybookDemo

このレポジトリは、 Angular を使った Web アプリケーションにおけるデザイナーとエンジニアの協業のワークフローを提案するものです。

[ngx-schematics-for-storybook](https://github.com/kimamula/ngx-schematics-for-storybook) を使うことで、デザイナーの作業が簡単になるよう工夫しています。

## ワークフロー

1. デザイナー作業
    1. Node.js (と yarn) のインストール
    1. リポジトリを `git clone`, `yarn` or `npm i` する
    1. `yarn run storybook` or `npm run storybook` で storybook を起動し、 http://localhost:6006/ を開く
        1. 以後、 Component の作成、編集をして保存するたびに、 storybook にその状態が反映される
    1. `ng generate component` コマンドで Component を新規作成する
        1. 今回の例では、 `ng g c directives/example-table`
        1. ここまでの作業を反映したものが ng-generate-component ブランチ ([差分](https://github.com/kimamula/angular-storybook-demo/compare/ng-generate-component?expand=1))
    1. 生成された HTML, CSS などを編集する
        1. ここまでの作業を反映したものが designer-work ブランチ ([差分](https://github.com/kimamula/angular-storybook-demo/compare/ng-generate-component...designer-work?expand=1))
        1. これまで、納品段階では jQuery によって何かしら動きがついている場合があったが、 Angular は template の `<script>` タグを削除してしまうため、 workaround として `<script-helper>` を用意している（使い方は差分参照）
        1. 新しい Component の中で既存の Component を使いたい場合、 storybook の中から適切な Component を探して使う
            1. その Component が `@Input()`, `@Output()` を使っている場合、適切にプロパティを指定する必要があり、それを読み取るのが少し難しいかもしれない（storybook でその辺の使い方が分かりやすく表現できていればよいかも）
    1. PR を作る
        1. CI により、 storybook がデプロイされて確認可能になる
1. エンジニア作業
    1. デザイナーが作成した Component を適切に分割したり、 TypeScript によるコーディングを追加したりする
        1. ここまでの作業を反映したものが engineer-work ブランチ ([差分](https://github.com/kimamula/angular-storybook-demo/compare/designer-work...engineer-work?expand=1))
    1. 後からデザイナーが調整を入れる場合は、以下のような Angular 的な要素を含む HTML を編集してもらう必要がある
        1. https://github.com/kimamula/angular-storybook-demo/blob/ebba309a2ad89033abd21948994d69af0b585765/src/app/directives/example-table-row/example-table-row.component.html
        1. https://github.com/kimamula/angular-storybook-demo/blob/ebba309a2ad89033abd21948994d69af0b585765/src/app/directives/example-table/example-table.component.html
    1. CSS についても、適用範囲が Component に閉じることを理解しなければならない

![storybookの見た目](/docs/images/storybook.png "storybookの見た目")

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.1.4.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
