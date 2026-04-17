Como consequência da propriedade III, tem-se: $f$ é inversível se, e somente se, det $T \neq 0$, fato esse que será utilizado “preferencialmente” para verificar se $f$ é inversível.

4.2.2 – Problema Resolvido

1) Dado o operador linear $f: \mathbb{R}^2 \rightarrow \mathbb{R}^2$ definido por

$$f(x, y) = (4x - 3y, -2x + 2y),$$

a) mostrar que $f$ é inversível;

b) determinar uma regra que defina $f^{-1}$.

Solução

a) A matriz canônica de $f$ é

$$T = \begin{bmatrix} 4 & -3 \\ -2 & 2 \end{bmatrix} \text{ e det } T = \begin{bmatrix} 4 & -3 \\ -2 & 2 \end{bmatrix} = 8 - 6 = 2 \neq 0$$

Como det $T \neq 0, f$ é inversível.

b) A matriz $T^{-1}$, inversa de $T$, é:

$$T^{-1} = \begin{bmatrix} \frac{2}{2} & \frac{3}{2} \\ \frac{2}{2} & \frac{4}{2} \end{bmatrix} = \begin{bmatrix} 1 & \frac{3}{2} \\ 1 & 2 \end{bmatrix}$$

logo,

$$f^{-1}(x, y) = T^{-1} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 1 & \frac{3}{2} \\ 1 & 2 \end{bmatrix} \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} x + \frac{3}{2}y \\ x + 2y \end{bmatrix}$$