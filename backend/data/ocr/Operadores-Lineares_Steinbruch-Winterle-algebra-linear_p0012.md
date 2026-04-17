2) A rotação do plano de um ângulo $\theta$ definida por

$$f(x, y) = (x \cos \theta - y \sin \theta, x \sin \theta + y \cos \theta),$$

é ortogonal. De fato:

$$|f(x, y)| = \sqrt{(x \cos \theta - y \sin \theta)^2 + (x \sin \theta + y \cos \theta)^2}$$

Desenvolvendo o radicando e simplificando:

$$|f(x, y)| = \sqrt{(x^2 + y^2) \cos^2 \theta + (x^2 + y^2) \sin^2 \theta}$$

$$= \sqrt{(x^2 + y^2) (\cos^2 \theta + \sin^2 \theta)}$$

$$= \sqrt{x^2 + y^2}$$

$$= |(x, y)|, \forall (x, y) \in \mathbb{R}^2$$

3) No $\mathbb{R}^3$, o operador linear definido por

$$f(x, y, z) = (-y, x, -z),$$

é ortogonal. De fato:

$$|f(x, y, z)| = \sqrt{(-y)^2 + x^2 + (-z)^2}$$

$$= \sqrt{x^2 + y^2 + z^2} = |(x, y, z)|$$

4.4.1 – Propriedades dos Operadores Ortogonais

I) Se $f: V \rightarrow V$ é um operador ortogonal e A a matriz de $f$ numa base ortonormal qualquer, isto é, $f(v) = Av$, A é uma matriz ortogonal, ou seja, $A^t = A^{-1}$. De fato, como $f$ é ortogonal, tem-se:

$$|f(v)| = |v|$$