#StringLiteral

+" DoubleStringCharactersopt "
+' SingleStringCharactersopt '

`/['"\\bfnrtvnr\u2028\u2029]|(?<!\d)0|x[0-9a-fA-F]{2}|u[0-9a-fA-F]{4}|u\{(10|0?[0-9a-fA-F])[0-9a-fA-F]{0,4}\}/`
