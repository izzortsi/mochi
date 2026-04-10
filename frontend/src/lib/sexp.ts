// web/src/sexp.ts

export type SExp = string | SExp[];

export function tokenize(input: string): string[] {
  const tokens: string[] = [];
  let i = 0;
  while (i < input.length) {
    const ch = input[i];
    if (ch === "(" || ch === ")") {
      tokens.push(ch);
      i++;
    } else if (ch === '"') {
      let str = '"';
      i++;
      while (i < input.length && input[i] !== '"') {
        str += input[i];
        i++;
      }
      if (i < input.length) {
        str += '"';
        i++;
      }
      tokens.push(str);
    } else if (/\s/.test(ch)) {
      i++;
    } else {
      let tok = "";
      while (i < input.length && !/[\s()]/.test(input[i])) {
        tok += input[i];
        i++;
      }
      tokens.push(tok);
    }
  }
  return tokens;
}

export function parseSexp(input: string): SExp {
  const tokens = tokenize(input);
  let pos = 0;

  function parseOne(): SExp {
    const tok = tokens[pos++];
    if (tok === "(") {
      const list: SExp[] = [];
      while (pos < tokens.length && tokens[pos] !== ")") {
        list.push(parseOne());
      }
      pos++; // consume ")"
      return list;
    }
    return tok;
  }

  if (tokens.length === 0) return "";
  return parseOne();
}

export function writeSexp(sexp: SExp): string {
  if (typeof sexp === "string") return sexp;
  return "(" + sexp.map(writeSexp).join(" ") + ")";
}

export function getKeyword(sexp: SExp[], key: string): SExp | undefined {
  for (let i = 0; i < sexp.length - 1; i++) {
    if (sexp[i] === key) return sexp[i + 1];
  }
  return undefined;
}
