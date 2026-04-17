Exemplo – A matriz

$$A = \begin{bmatrix}
-\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0 \\
0 & 0 & 1 \\
\frac{1}{\sqrt{2}} & \frac{1}{\sqrt{2}} & 0
\end{bmatrix}$$

é ortogonal, pois para os vetores

$$\mu_1 = \left( -\frac{1}{\sqrt{2}}, 0, \frac{1}{\sqrt{2}} \right), \mu_2 = \left( \frac{1}{\sqrt{2}}, 0, \frac{1}{\sqrt{2}} \right) \text{ e } \mu_3 = (0, 1, 0), \text{ tem-se:}$$
$$\mu_1 \cdot \mu_1 = \mu_2 \cdot \mu_2 = \mu_3 \cdot \mu_3 = 1$$
$$\mu_1 \cdot \mu_2 = \mu_1 \cdot \mu_3 = \mu_2 \cdot \mu_3 = 0$$

● A demonstração da propriedade II) para uma matriz ortogonal de ordem n é análoga.

III) O produto de duas matrizes ortogonais é uma matriz ortogonal.

IV) Num espaço vetorial euclidiano, a matriz de mudança de uma base ortonormal para outra base ortonormal é uma matriz ortogonal.

V) A matriz, numa base ortonormal, de um operador ortogonal $f: V \rightarrow V$ é sempre ortogonal, independente da base ortonormal do espaço vetorial $V$.

VI) Todo operador ortogonal $f: V \rightarrow V$ preserva o produto interno dos vetores. De fato, se $\mu$ e $v$ são dois vetores quaisquer de $V$ e $A$ a matriz que representa o operador $f$, tem-se:

$$f(\mu) \cdot f(v) = (A\mu) \cdot (Av)$$
$$= (A\mu)^t (Av)$$
$$= (\mu^t A^t) Av$$
$$= \mu^t (A^t A) v$$
$$= \mu^t v = \mu \cdot v.$$