<環境構築>
環境設定としては
%マークはすでに入力されているため％より後ろを入力してください

homebrewをインストール
```
% /bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"
```


PATHを通す
```
% echo 'eval "$(/opt/homebrew/bin/brew shellenv)"' >> /Users/ユーザー名/.zprofile 
% eval "$(/opt/homebrew/bin/brew shellenv)"
```
ユーザー名の部分は、各々のmacで確認してください


homebrewのバージョンの確認
```
% brew -v
```
バージョンの表示がされていたら、homebrewをインストールできています

nodebrewのインストール
```
% brew install nodebrew
```

nodebrewのバージョンの確認
```
% nodebrew -v
```
バージョンの表示がされていたら、nodebrewをインストールできています

Node.jsのインストール
```
% nodebrew install-binary stable
```
※Warning: Failed to create the file とエラーが出てしまう場合は、mkdir -p ~/.nodebrew/srcを実行してからインストールしてください

有効になっているかの確認
```
% nodebrew ls
```
※current: noneとなっている場合は、nodebrew use [version]でバージョン情報を追加してください

PATHの設定
```
% echo 'export PATH=$HOME/.nodebrew/current/bin:$PATH' >> ~/.zprofile
```
【重要】このタイミングで一度ターミナルを再起動させてください

Node.jsのバージョンの確認
```
% node -v
```

watchmanのインストール
```
% brew install watchman
```

watchmanのバージョンの確認
```
% watchman -version
```

Xcodeのインストール
　　App StoreからXcodeをインストールしてください
　　ツールバーのからXcodeからPreferencesを選択
　　Locationタブで最新のCommand Line Toolsを選択
  
EXPOのインストール
```
% npm install -g expo-cli
```
以上でreact nativeの環境構築終了です
