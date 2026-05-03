Note que $\langle x - y, z_1 - y \rangle > 0$ não implica em $|x - z_1| < |x - y|$. Mas, supondo $z_1$ e $y$ em $K$, temos que, para $t$ em $[0, 1]$, $z = y + t(z_1 - y)$ pertence a $K$ e

$$|z - x|^2 = |y - x|^2 + t(t|z_1 - y|^2 + 2\langle y - x, z_1 - y \rangle >).$$

Agora basta observar que, para $t$ positivo e próximo de 0, o termo

$$t(t|z_1 - y|^2 + 2\langle y - x, z_1 - y \rangle >)$$

é negativo, o que mostra que haverá, em $K$ tal que $|x - z| < |x - y|$. Assim, provamos que, se $y = p_K(x)$, então

$$\langle x - y, z - y \rangle \leq 0 \text{ \forall } z \in K.$$

A demonstração de que, para quaisquer $x_1$ e $x_2$ em $V$, vale $|p_K(x_1) - p_K(x_2)| \leq |x_1 - x_2|$ também tem um sabor geométrico (embora, por envolver quatro pontos, a figura plana a seguir seja um pouco enganosa.

De

$$\langle x - x_1, x_1 - y_1 \rangle \geq 0,$$

$$\langle y_1 - y, x_1 - y_1 \rangle \geq 0,$$

segue

$$\langle x - x_1 + y_1 - y, x_1 - y_1 \rangle \geq 0.$$

Fazendo $x - x_1 + y_1 - y = a$ e $x_1 - y_1 = b$, temos $x - y = a + b$, com

$$\langle a, b \rangle \geq 0,$$

de modo que

$$|x - y|^2 = |a + b|^2 = |a|^2 + |b|^2 + 2\langle a, b \rangle \geq |b|^2 = |x_1 - y_1|^2,$$

com igualdade se, e somente se, $a = 0$. Note, de passagem, que andamos usando $p_K(x)$ de forma um pouco dúbia, já que não tinhamos provado a unicidade da projeção, mas que agora, fazendo $x_1 = x_2$, a unicidade está garantida.