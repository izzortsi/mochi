8.2 Construindo bases ortonormais

Consideremos a seguinte questão: se $\alpha$ é o plano que passa pela origem e é dado pelos vetores $\vec{u}$ e $\vec{v}$, como construir uma base ortonormal para $\alpha$? Mais claramente, sendo

$$\alpha = \left\{ s\vec{u} + t\vec{v}, (s,t) \in \mathbb{R}^2 \right\},$$

queremos $\vec{\varepsilon}_1$ e $\vec{\varepsilon}_2$ em $\alpha$, unitários e ortogonais.

A solução é simples: começamos fazendo

$$\vec{\varepsilon}_1 = \frac{1}{|\vec{u}|}\vec{u};$$

em seguida, fazemos

$$\vec{v}_1 = \vec{v} - <\vec{v},\vec{\varepsilon}_1 >\vec{\varepsilon}_1;$$

finalmente, tomamos

$$\vec{\varepsilon}_2 = \frac{1}{|\vec{v}_1|}\vec{v}_1.$$

Exercício 8.1 Mostre que de fato, $\vec{\varepsilon}_1$ e $\vec{\varepsilon}_2$ formam base ortonormal para $\alpha$. Faça uma figura, explicitando $\vec{u}$, $\vec{v}$, $\vec{\varepsilon}_1$, $\vec{v}_1$, $\vec{v} - \vec{v}_1$ e $\vec{\varepsilon}_2$.

Construída uma base ortonormal para $\alpha$, é fácil, agora, projetar ortogonalmente um ponto $P$, dado pelo vetor $\vec{w}$, em $\alpha$: se $Q$ é a projeção, dada pelo vetor $\vec{w}_0$, e $\vec{w}_1 = \vec{QP}$, então $\vec{w} = \vec{w}_0 + \vec{w}_1$ e $\vec{w}_1$ e $\vec{\varepsilon}$ são ortogonais, qualquer que seja $\vec{\varepsilon}$ em $\alpha$.

Figura 8.1:

Escrevendo $\vec{w}_0 = t_1\vec{\varepsilon}_1 + t_2\vec{\varepsilon}_2$, com $t_1$ e $t_2$ a determinar, temos: