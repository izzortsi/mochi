tem-se

$$\mu \cdot v = a_1 b_1 + a_2 b_2$$

● Representando $\mu$ e $v$ na forma matricial, isto é,

$$\mu = \begin{bmatrix} a_1 \\ a_2 \end{bmatrix} \quad e \quad v = \begin{bmatrix} b_1 \\ b_2 \end{bmatrix},$$

pode-se escrever

$$\mu \cdot v = \mu^t v,$$

(1)

isto é,

$$\mu \cdot v = [a_1 \quad a_2] \begin{bmatrix} b_1 \\ b_2 \end{bmatrix} = a_1 b_1 + a_2 b_2.$$

Na notação (1), está-se identificando a matriz $\mu^t v$, de ordem 1, com o número $\mu \cdot v$, o que será utilizado em futuras demonstrações.

Exemplos

1) No $\mathbb{R}^2$, o operador linear definido por

$$f(x,y) = \left(\frac{4}{5}x - \frac{3}{5}y, \frac{3}{5}x + \frac{4}{5}y\right)$$

é ortogonal. De fato:

$$|f(x,y)| = \sqrt{\left(\frac{4}{5}x - \frac{3}{5}y\right)^2 + \left(\frac{3}{5}x + \frac{4}{5}y\right)^2}$$

$$= \sqrt{\frac{16}{25}x^2 - \frac{24}{25}xy + \frac{9}{25}y^2 + \frac{9}{25}x^2 + \frac{24}{25}xy + \frac{16}{25}y^2}$$

$$= \sqrt{\frac{25}{25}x^2 + \frac{25}{25}y^2}$$

$$= \sqrt{x^2 + y^2}$$

$$= |(x,y)|, \forall (x,y) \in \mathbb{R}^2$$