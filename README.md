# ラーメン工房
ユーザーが美味しいと思うラーメンを投稿して、全員で共有するwebアプリです。
転職用のポートフォリオとして作成しました。

![image](https://user-images.githubusercontent.com/54758561/73115815-ce668880-3f6e-11ea-81b8-ce341cdddb98.png)

![image](https://user-images.githubusercontent.com/54758561/73115826-3026f280-3f6f-11ea-8704-da6ac4af18fd.png) ![image](https://user-images.githubusercontent.com/54758561/73115903-ce678800-3f70-11ea-8671-9646c3eea210.png)

## リンク
https://infinite-reaches-05797.herokuapp.com/

**テストユーザーログイン：**
* ログインボタンを押していただければ、テストユーザーのメールアドレスとパスワードが入力してあるので、ログインができます。
  ※観覧用としてご自由にお使いください
* スマホでご覧の場合、ホーム画面の右側を押していただくとメニューが現れます。
* 投稿にもあらかじめデータを入力してあるので、ボタンを押していただければ投稿できます。

## 特に見ていただきたい部分
* jQueryを使い、投稿に対するコメントと、コメントの削除を非同期通信を行えるようにしました。
* インクリメンタルサーチを実装しました。
* レスポンシブ対応しています。

## 使用技術
**サーバーサイド：**
* Ruby: 2.5.1
  - Rails: 5.2.2
* Heroku

**gem：**
* kaminari
* devise
* font-awesome-rails
* ransack

**フロントエンド：**
* HTML
* CSS

**javaScriptパッケージ：**
* jQuery

## 機能一覧
* ユーザー登録、ログイン機能全般
* 記事投稿機能
* いいね機能
* ランキング機能
* 検索機能
* コメント機能
* 投稿記事削除
* 投稿記事編集