<環境構築>
%マークはすでに入力されているため％より後ろを入力しましょう

【前提】
Homebrewがインストールされていること
```
% brew -v
```
※ Homebrewのバージョンが表示されていることを確認


Node.jsがインストールされていること
```
% node -v
```
※ Nodeのバージョンが表示されていることを確認


npmがインストールされていること
```
% npm -v
```
※ npmのバージョンが表示されていることを確認


※ インストール方法が分からない方は、「Homebrew インストール」のように検索しましょう


【手順】
watchmanのインストール
```
% brew install watchman
```


watchmanのバージョンの確認
```
% watchman --version
```


Xcodeのインストール

App StoreからXcodeをインストールしましょう

ツールバーのからXcodeからPreferencesを選択

Locationタブで最新のCommand Line Toolsを選択


※ 本章で、Xcodeは「Command Line Tools」しか利用しないため、選択後Xcodeは閉じましょう

※ アンドロイドでの動作を確認したい場合は、Android Studioをインストールしましょう


Expoのインストール
```
% npm install -g expo-cli
```


作業用ディレクトリに移動する

※ ディレクトリに指定はありません

　 ディレクトリの移動方法が分からないかたは「Linux コマンド ディレクトリ」で検索しましょう


プログラムをローカルPCにダウンロードする
```
% git clone https://github.com/techgymjp/techgym_reactnative_course01
```


アプリケーションのルートディレクトリに移動する
```
% cd techgym_reactnative_course01
```


カレントディレクトリを確認する
```
% pwd
/Users/{ユーザー名}/{...}/techgym_reactnative_course01
```
{...} はプログラムをダウンロードした場所によって変わります


※ 以降はこのアプリケーションのルートディレクトリで学習を進めていきます

カレントディレクトリが異なる場所だと正常に動作しないため、移動してしまった方は再度アプリケーションのルートディレクトリに移動しましょう


利用パッケージをインストールする
```
% npm install
```


アプリケーションを起動する
```
% npm start

~~~ 省略 ~~~

Metro waiting on exp://192.168.0.25:19000
› Scan the QR code above with Expo Go (Android) or the Camera app (iOS)

› Press a │ open Android
› Press i │ open iOS simulator
› Press w │ open web

› Press r │ reload app
› Press m │ toggle menu

› Press ? │ show all commands

```

キーボードで「i」を押すとシミュレータ・Expoが起動します

※ アプリケーションを起動中、プログラムを書き換えると自動でシミュレータが更新されます

※ シミュレータが自動で起動しない方は、コマンドラインからシミュレータを起動しましょう


```
% open -a Simulator
```


以上でreact nativeの環境構築終了です
