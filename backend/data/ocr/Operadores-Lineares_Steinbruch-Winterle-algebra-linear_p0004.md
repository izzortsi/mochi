ou

$$f^{-1}(x, y) = \left(x + \frac{3}{2} y, x + 2y\right)$$

• Deve ser entendido que se $f$ leva o vetor $(x, y)$ ao vetor $(x', y')$, isto é,

$$\begin{bmatrix} x' \\ y' \end{bmatrix} = T \begin{bmatrix} x \\ y \end{bmatrix},$$

o operador $f^{-1}$ traz de volta o vetor $(x', y')$ para a posição inicial $(x, y)$, ou seja,

$$\begin{bmatrix} x \\ y \end{bmatrix} = T^{-1} \begin{bmatrix} x' \\ y' \end{bmatrix}$$

Assim, neste problema, se $v = (x, y) = (2, 1)$:

$$\begin{bmatrix} x' \\ y' \end{bmatrix} = T \begin{bmatrix} x \\ y \end{bmatrix} = \begin{bmatrix} 4 & -3 \\ -2 & 2 \end{bmatrix} \begin{bmatrix} 2 \\ 1 \end{bmatrix} = \begin{bmatrix} 5 \\ -2 \end{bmatrix}$$

e

$$\begin{bmatrix} x \\ y \end{bmatrix} = T^{-1} \begin{bmatrix} x' \\ y' \end{bmatrix} = \begin{bmatrix} 1 & \frac{3}{2} \\ 1 & 2 \end{bmatrix} \begin{bmatrix} 5 \\ -2 \end{bmatrix} = \begin{bmatrix} 2 \\ 1 \end{bmatrix}$$

• As transformações lineares planas vistas no Capítulo 3 são todas operadores lineares inversíveis. Fica a cargo do leitor verificar que o inverso de uma reflexão em relação a uma reta é uma reflexão em relação à mesma reta, o inverso de uma dilatação é uma contração, etc.