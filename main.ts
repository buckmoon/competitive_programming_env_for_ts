import * as fs from 'fs';
const input = (fs.readFileSync("/dev/stdin", "utf8") as string).split("\n")

const main = (lines: string[]) => {
    //入力
    const [a, b, c]: Array<number> = lines[0].split(" ").map(s => Number(s));

    const ar: number = c % 2 === 0 ? Math.abs(a) : a
    const br: number = c % 2 === 0 ? Math.abs(b) : b

    if ( ar === br){
        return "="
    }
    else if (ar > br) {
        return ">"
    }
    else{
        return "<"
    }
};

console.log(main(input));
