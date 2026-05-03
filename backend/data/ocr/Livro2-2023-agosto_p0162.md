3. $det[A]^T = det[A]$, para qualquer matriz $n \times n [A]$.

Demonstração:

Os resultados a seguir merecem um certo destaque.

**Proposição 1**: A matriz $n \times n [a_{ij}]$ tem inversa se, e somente se, $det[a_{ij}] \neq 0$.

Demonstração: Se $[a_{ij}]$ tem inversa, então

$$det[a_{ij}] det\left([a_{ij}]^{-1}\right) = det\left([a_{ij}] [a_{ij}]^{-1}\right) = det[I] = 1;$$

logo, $det[a_{ij}] \neq 0$. Reciprocamente, dizer que $det[a_{ij}] \neq 0$ é o mesmo que dizer que $det_n(a_1, \ldots, a_n) \neq 0$, sendo $a_j$ o j-ésimo vetor coluna de $[a_{ij}]$. Mas isso só ocorre se os vetores coluna de $[a_{ij}]$ são linearmente independentes, o que significa que $[a_{ij}]$ tem inversa.

**Proposição 2 (Regra de Cramer):** Se o vetor coluna $[x_i]$ é solução do sistema $n \times n [a_{ij}] [x_i] = [b_i]$, ou seja,

$$\begin{pmatrix} a_{11} & \ldots & a_{1n} \\ \vdots & \ldots & \vdots \\ a_{n1} & \ldots & a_{nn} \end{pmatrix} \begin{pmatrix} x_1 \\ \vdots \\ x_n \end{pmatrix} = \begin{pmatrix} b_1 \\ \vdots \\ b_n \end{pmatrix},$$

então, para cada $i = 1, \ldots, n$, vale $x_j det[a_{ij}] = det[\tilde{a}_{ij}]$, sendo $\tilde{a}_{ij}$ a matriz $n \times n$ que se obtém substituindo a $j$-ésima coluna de $[a_{ij}]$ por $[b_i]$. Em particular se $det[a_{ij}] \neq 0$ então a solução $[x_i]$ é única e, se representamos por $a_j$ os vetores coluna de $[a_{ij}]$ e por $b$ o vetor correspondente a $[b_i]$, é dada por

$$x_j = \frac{det_n(a_1, \ldots, a_{j-1}, b, a_{j+1}, \ldots, a_n)}{det_n(a_1, \ldots, a_n)}.$$

Demonstração: Basta escrever $b = x_1a_1 + \ldots + x_na_n$ e substituir em

$$det_n(a_1, \ldots, a_{j-1}, b, a_{j+1}, \ldots, a_n).$$

Falta uma fórmula de cálculo "efetiva". A fórmula que define o determinante de matriz $n \times n$ não é muito alentadora: prevê a soma de $n!$ parcelas, cada uma com $(n-1)$ multiplicações (sem contar o cálculo do sinal da permutação). Mesmo para $n$ bem pequeno, relativamente às matrizes que aparecem em problemas reais, esse número de operações exige, mesmo com os mais modernos processadores, tempo que nenhum ser humano tem para esperar.6 Modestamente, não vamos aqui discutir algoritmos mais eficientes; apenas apresentaremos um método tradicional, que reduz o cálculo de um determinante $(n+1) \times (n+1)$, essencialmente, ao de $n+1$ determinantes $n \times n$.

6Podemos atuar nas três frentes: melhorar o algoritmo, fabricar processadores mais rápidos e aumentar o tempo de vida. Matemáticos podem se engajar em qualquer uma das três