1. Se $t_1 w_1 + \ldots + t_{n-k} w_{n-k} = 0$, então $T(t_1 \varepsilon_{k+1} + \ldots + t_{n-k} \varepsilon_n) = 0$, o que significa que $t_1 \varepsilon_{k+1} + \ldots + t_{n-k} \varepsilon_n \in N(T)$. Ora, isto só é possível se $t_1 = \ldots = t_{n-k} = 0$, o que mostra que $w_1, \ldots, w_{n-k}$ são linearmente independentes.

2. Se $w \in Im(T)$, podemos tomar $v$ em $V$ tal que $T v = w$. Fazendo $v = t_1 \varepsilon_1 + \ldots + t_n \varepsilon_n$, temos $w = T v = t_1 T \varepsilon_1 + \ldots + t_k T \varepsilon_k + t_{k+1} w_1 + \ldots + t_n w_{n-k} = t_{k+1} w_1 + \ldots + t_n w_{n-k}$, o que encerra a demonstração.

**Escólio**: Nossa demonstração contou com o apoio de um subespaço auxiliar $V_1$ de $V$, tal que $dim V_1 + dim N(T) = dim V$ e $dim V_1 = dim Im(T)$. Como já observamos, caso $V$ tenha produto interno, podemos escolher $V_1 = N(T)^\perp$. Assim, quando $V$ tem produto interno, nosso teorema também diz que $dim Im(T) = dim N(T)^\perp$.

Suponhamos que $V = R^n$, que $W = \mathbb{R}^m$ e que $T$ seja a transformação linear dada pala matriz $m \times n$ $[a_{ij}]$. Ora, neste caso, a imagem de $T$ é o espaço gerado pelos vetores coluna da matriz e o núcleo de $T$ é o espaço dos vetores que são ortogonais aos vetores linha de $[a_{ij}]$.

**Exercício 17.5** Prove as duas últimas afirmações acima.

**Corolário**: Seja $[a_{ij}]$ matriz $m \times n$ a coeficientes reais. Sejam $E$ o subespaço de $R^n$ gerado pelas linhas de $[a_{ij}]$ e $F$ o subespaço de $\mathbb{R}^m$ gerado pelas colunas de $[a_{ij}]$. Então $dim E = dim F$.

Demonstração: Basta notar que $F = Im(T)$ e que $N(T) = E^\perp$, ou seja: $E = N(T)^\perp$ e $F = Im(T)$.

**Exercício 17.6** Seja $[a_{ij}]$ matriz $m \times n$ a coeficientes complexos. Mostre que o núcleo da transformação linear $T : \mathbb{C}^n \rightarrow \mathbb{C}^m$ dada por $[a_{ij}]$ é o espaço ortogonal ao gerado pelas linhas de $[a_{ij}]$ (a barra indicando conjugação complexa) Observe que isto equivale a ser $N(T)$ ortogonal à imagem da transformação linear $T^* : \mathbb{C}^m \rightarrow \mathbb{C}^n$ dada pela matriz transposta de $[a_{ij}]$.