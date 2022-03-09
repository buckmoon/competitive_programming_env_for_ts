import * as fs from 'fs';
const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n")

const main = (lines: string[]) => {
    // const [a, b, c]: Array<number> = lines[0].split(" ").map(s => Number(s)); // よく使う入力操作例（1行目を空白で分割してそれぞれを数値とみなす）
    // 処理を書く

    return "答え"
};

console.log(main(input));
