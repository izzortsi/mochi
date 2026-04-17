4.5 – OPERADOR SIMÉTRICO

Diz-se que um operador linear $f: \mathbb{V} \rightarrow \mathbb{V}$ é simétrico se a matriz A que o representa numa base ortonormal é simétrica, isto é, se

$$A = A^t$$

● Demonstra-se que a matriz, numa base ortonormal, de um operador simétrico é sempre simétrica, independente da base ortonormal do espaço vetorial. Neste estudo serão utilizadas somente bases canônicas.

Exemplos

1) O operador linear $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2$, $f(x, y) = (2x + 4y, 4x - y)$ é simétrico pois a matriz canônica de $f$

$$A = \begin{bmatrix} 2 & 4 \\ 4 & -1 \end{bmatrix}$$

é simétrica, isto é, $A = A^t$

2) No $\mathbb{R}^3$, o operador $f$ definido por $f(x, y, z) = (x - y, -x + 3y - 2z, -2y)$ é simétrico e sua matriz canônica é

$$A = \begin{bmatrix} 1 & -1 & 0 \\ -1 & 3 & -2 \\ 0 & -2 & 0 \end{bmatrix} = A^t$$

4.5.1 – Propriedade dos Operadores Simétricos

Se $f: \mathbb{V} \rightarrow \mathbb{V}$ é um operador simétrico, tem-se para quaisquer vetores $\mu, \epsilon, v \in \mathbb{V}$:

$$f(\mu) \cdot v = \mu \cdot f(v)$$

De fato, sendo $A = A^t$ a matriz simétrica de $f$, vem: