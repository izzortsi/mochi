4.3.2 – Problemas Resolvidos

1) Sejam $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ um operador linear e as bases $A = \{(3, 4), (5, 7)\}$ e $B = \{(1, 1), (-1, 1)\}$.

Sabendo que

$$T_A = \begin{bmatrix} -2 & 4 \\ 2 & -1 \end{bmatrix},$$

calcular $T_B$ utilizando a relação $T_B = Q^{-1} T_A Q$.

Solução

As bases $A e B$, como se sabe, podem ser representadas, respectivamente, pelas matrizes

$$A = \begin{bmatrix} 3 & 5 \\ 4 & 7 \end{bmatrix} \quad e \quad B = \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix}.$$

Tendo em vista que $Q$ é a matriz de mudança de base de $B$ para $A$, pode-se escrever:

$$Q = A^{-1} B$$

mas,

$$A^{-1} = \begin{bmatrix} 7 & -5 \\ -4 & 3 \end{bmatrix},$$

portanto,

$$Q = \begin{bmatrix} 7 & -5 \\ -4 & 3 \end{bmatrix} \begin{bmatrix} 1 & -1 \\ 1 & 1 \end{bmatrix} = \begin{bmatrix} 2 & -12 \\ -1 & 7 \end{bmatrix}$$