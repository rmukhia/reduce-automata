%lex

%%

\s+                   /* skip whitespace */
[0-9]+("."[0-9]+)?\b  return 'NUMBER'
"("                   return '('
")"                   return ')'
"{"                   return '{'
"}"                   return '}'
"="                   return '='
","                   return ','
"@K"                  return 'K'
"@sigma"              return 'sigma'
"@delta"              return 'delta'
"@S"                  return 'S'
"@F"                  return 'F'
"@e"                  return 'e'
.                     return 'char'
[A-Za-z][A-Za-z0-9]*  return 'id'
<<EOF>>               return 'EOF'

/lex

%%

STMT
    : K_STMT SIGMA_STMT DELTA_STMT S_STMT F_STMT EOF
      {
        const M = {
          K : $1,
          sigma : $2,
          delta : $3,
          S : $4,
          F : $5,
        };
        typeof console !== 'undefined' ? 
          console.log(M) : print(M);
        return M;
      };

K_STMT
    : K '=' '{' STATES '}'
      { $$ = $4; };

SIGMA_STMT
    : sigma '=' '{' ALPHABETS '}'
      { $$ = $4; };

DELTA_STMT
    : delta '=' '{' TRANSITIONS '}'
      { $$ = $4; };

S_STMT
    : S '=' '{' STATES '}'
      { $$ = $4; };

F_STMT
    : F '=' '{' STATES '}'
      { $$ = $4; };

TRANSITIONS
    : TRANSITIONS ',' TRANSITION
      { 
        const tt = $1;
        if (!($3[0] in tt)) tt[$3[0]] = {};
        if (!($3[1] in tt[$3[0]])) tt[$3[0]][$3[1]] = new Set();
        tt[$3[0]][$3[1]].add($3[2]);
        $$ = tt;
      }
    | TRANSITION
      {
        const t = {};
        t[$1[0]] = {};
        t[$1[0]][$1[1]] = new Set([$1[2]]);
        $$ = t;
      };

TRANSITION
    : '(' STATE ',' ALPHABET ',' STATE ')'
      { 
        $$ = [$2, $4, $6];
      };
        

STATES
    : STATES ',' STATE
      { $$ = $1.add($3); }
    | STATE
      { $$ = new Set([$1]); };

ALPHABETS
    : ALPHABETS ',' ALPHABET
      { $$ = $1.add($3); }
    | ALPHABET
      { $$ = new Set([$1]); };

STATE
    : char
    | id;

ALPHABET
    : char 
    | e;
