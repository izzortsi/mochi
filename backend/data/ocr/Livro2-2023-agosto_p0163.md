O ponto de partida é a observação, simples, de que, no cálculo do determinante de $[a_{ij}]$, a entrada $a_{ij}$ só multiplica entradas da matriz que se obtém *riscando* a linha $i$ e a coluna $j$. Logo vemos que, com um pouco de sorte, $a_{ij}$ deve multiplicar, talvez a menos do sinal, o determinante dessa matriz um pouco menor. O resultado preciso é a chamada **fórmula dos cofatores**.

**Proposição 3**: Seja $[a_{ij}]$ matriz $n \times n (n > 1)$. Fixada a coluna $j$, o determinante de $[a_{ij}]$ é dado pela **fórmula dos cofatores**:

$$det [a_{ij}] = \sum_{i=1}^{n} (-1)^{i+j} a_{ij} M_{ij},$$

sendo $M_{ij}$ o determinante da matriz $(n-1) \times (n-1)$ $[\tilde{a}_{ij}]$ obtida de $[a_{ij}]$ *riscando* a linha $i$ e a coluna $j$. Equivalentemente, fixada a linha $i$, temos

$$det [a_{ij}] = \sum_{j=1}^{n} (-1)^{i+j} a_{ij} M_{ij}.$$

Demonstração: Vamos provar apenas a primeira fórmula, já que para a segunda, basta tomar a transposta da matriz. Para simplificar, começamos com $j = 1$. Chamando, como de hábito, os vetores coluna de $a_1, \ldots, a_n$ e recorrendo a nossa definição de $det_n$, temos

$$det [a_{ij}] = det_n \left( \sum_{i=1}^{n} a_{i1} e_i, a_2, \ldots, a_n \right) = \sum_{i=1}^{n} a_{i1} det_n (e_i, a_2, \ldots, a_n).$$

Vejamos, agora, o que nos dá, para $i$ fixo, $det_n (e_i, a_2, \ldots, a_n)$. Usando a notação de barras para o determinante, trata-se de

$$\begin{vmatrix}
0 & a_{12} & \ldots & a_{1n} \\
\vdots & \vdots & \vdots \\
1 & a_{i2} & \ldots & a_{in} \\
\vdots & \vdots & \vdots \\
0 & a_{n2} & \ldots & a_{nn}
\end{vmatrix} = \begin{vmatrix}
0 & a_{12} & \ldots & a_{1n} \\
\vdots & \vdots & \vdots \\
1 & 0 & \ldots & 0 \\
\vdots & \vdots & \vdots \\
0 & a_{n2} & \ldots & a_{nn}
\end{vmatrix} = (-1)^{i-1} \begin{vmatrix}
1 & 0 & \ldots & 0 \\
0 & a_{12} & \ldots & a_{1n} \\
\vdots & \vdots & \vdots \\
0 & a_{i2} & \ldots & a_{in} \\
\vdots & \vdots & \vdots \\
0 & a_{n2} & \ldots & a_{nn}
\end{vmatrix}.$$

(O chapéus sobre as entradas da $i$-ésima linha indicam que essa linha foi suprimida). O último determinante faz aparecer, se riscarmos a primeira linha e a primeira coluna, a matriz $[\tilde{a}_{ij}]$. Se definirmos a aplicação que, a cada matriz $(n-1) \times (n-1)$ $[b_{ij}]$, associa o número

$$\begin{vmatrix}
1 & 0 & \ldots & 0 \\
0 & b_{11} & \ldots & b_{1(n-1)} \\
\vdots & \vdots & \vdots \\
0 & b_{(n-1)2} & \ldots & b_{(n-1)(n-1)}
\end{vmatrix},$$

teremos uma forma $(n-1)$-linear e alternada nas colunas de $[b_{ij}]$ que, além disso, assumirá o valor 1 quando $[b_{ij}]$ for a matriz identidade. Ora, só há uma função com tais características: o

$$^7\text{O número} (-1)^{i+j} M_{ij} \text{ é chamado cofator de } a_{ij}; M_{ij} \text{ é dito determinante menor associado a } a_{ij}$$