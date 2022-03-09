# Typescript実行環境をローカルに構築

## 目的
- AtCoder 入門
- AtCoder のコードテスト実行環境は手軽だが typescript の実行環境に関しては型のチェックがスキップされているためローカルで手軽に実行できる環境を作るメリットは大きい

## 実行環境構築方法

```
# 事前準備：作業環境用のディレクトリを作成して移動

# ローカルにこのリポジトリを clone
git clone https://github.com/buckmoon/competitive_programming_env_for_ts.git

# 移動
cd competitive_programming_env_for_ts/ 

# npm install
npm install

# 動作確認実行
./node_modules/.bin/ts-node main.ts < sample.txt # 「<」 と表示されればOK

# コードの編集(VS Codeがおすすめ)
code main.ts

# テストケースの編集
code sample.txt

# 自分の書いたコードの実行は
# 動作確認実行に同じ
# bashrc などに短縮コマンド書いても良さそう
```

## 参考情報
- `code` コマンドについて https://iwb.jp/vscode-code-command-howto/
- bashrc での短縮コマンド登録 https://qiita.com/yutat93/items/b5bb9c0366f21bcbea62
- zshrc での短縮コマンド登録 https://qiita.com/terufumi1122/items/1bbb1cf96e376e30e9fc
