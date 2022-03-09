# Typescript実行環境をローカルに構築

## 目的
- AtCoder 入門
- AtCoder のコードテスト実行環境は手軽だが typescript の実行環境に関しては型のチェックがスキップされているためローカルで手軽に実行できる環境を作るメリットは大きい

## 実行環境構築方法

```
# ローカルにこのリポジトリを clone

# npm install
npm install

# コードの編集(VS Codeがおすすめ)
code main.ts

# テストケースの編集
code sample.txt

# 実行
./node_modules/.bin/ts-node main.ts < sample.txt
