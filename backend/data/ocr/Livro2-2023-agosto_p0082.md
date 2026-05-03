Vamos, porém, partir para uma abordagem direta: tentaremos associar a cada par de vetores, $\vec{u} = (x_1, y_1)$, $\vec{v} = (x_2, y_2)$, a área do paralelogramo por eles formado, expressa diretamente em função de $x_1, y_1, x_2, y_2$. Veremos, depois de algumas peripécias, que tal área é dada pelo valor absoluto do determinante

$$\begin{vmatrix} x_1 & x_2 \\ y_1 & y_2 \end{vmatrix} = x_1y_2 - x_2y_1.$$

10.2 Orientação

Comecemos definindo a orientação de um par de vetores. Sejam $\vec{u}_1, \vec{u}_2$ dois vetores não paralelos e não nulos. Diremos que o par $\vec{u}_1, \vec{u}_2$ tem orientação positiva se o seno do ângulo $\theta$ entre $\vec{u}_1$ e $\vec{u}_2$, medida de $\vec{u}_1$ para $\vec{u}_2$ no sentido trigonométrico, é positivo (ou, o que é equivalente, se, “para girarmos o ponteiro $\vec{u}_1$ para o ponteiro $\vec{u}_2$ pelo menor ângulo, andamos no sentido trigonométrico”).

Figura 10.2:

Note que a orientação depende da ordem em que tomamos os vetores, e que se a orientação de $\vec{u}_1, \vec{u}_2$ é positiva, então a de $\vec{u}_2, \vec{u}_1$ é negativa. Assim, quando falarmos “a orientação de $\vec{u}, \vec{v}$”, estará sempre implícito que se trata de um par ordenado. Diremos que dois pares de vetores $\vec{u}_1, \vec{u}_2$ e $\vec{v}_1, \vec{v}_2$ têm a mesma orientação se as respectivas orientações são simultaneamente positivas ou simultaneamente negativas. Assim, por exemplo, o par $\vec{u}, \vec{v}$ tem orientação positiva se e só se tem a mesma orientação que o par formado pela base canônica, $\vec{e}_1, \vec{e}_2$.

Exercício 10.1 Verifique que se $\vec{u}, \vec{v}$ tem orientação positiva e t é um número real não nulo, então t$\vec{u}, \vec{v}$ e $\vec{u}, t\vec{v}$ têm orientação positiva se $t > 0$ e negativa se $t < 0$.