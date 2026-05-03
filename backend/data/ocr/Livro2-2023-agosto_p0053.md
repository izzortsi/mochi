Capítulo 7

Produto escalar, de novo

Nos dois capítulos anteriores, com o conceito de espaço vetorial, abrimos caminho para *raciocinar geometricamente* em situações absolutamente não geométricas. Um espaço vetorial é, em muitos aspectos, parecido com o espaço físico em que nos movemos e com sua primeira versão abstrata, o espaço da Geometria clássica. No entanto, os axiomas de espaço vetorial não contemplam a possibilidade de se efetuarem medidas de distâncias ou de ângulos.

Quando trabalhamos com vetores flechinhas, no espaço tridimensional *herdado* da Geometria Euclidiana, essas medidas são feitas via produto escalar. Como já vimos, o produto escalar de vetores flechinhas é definido geometricamente por

$$\langle \vec{u}, \vec{v} \rangle = |\vec{u}| |\vec{v}| \cos \theta,$$

sendo $\theta$ o ângulo entre $\vec{u}$ e $\vec{v}$. A definição puramente algébrica,

$$\langle \vec{u}, \vec{v} \rangle = u_1 v_1 + u_2 v_2 + u_3 v_3,$$

porém, se estende facilmente ao espaço $R^n$: se $\mathbf{x} = (x_1, \ldots, x_n)$ e $\mathbf{y} = (y_1, \ldots, y_n)$, então

$$\langle \mathbf{x}, \mathbf{y} \rangle = x_1 y_1 + \ldots + x_n y_n.$$

A exemplo do que aconteceu com o conceito de espaço vetorial, que evoluiu das flechinhas para espaços bem menos geométricos, podemos estabelecer uma definição geral de *produto escalar*, baseada apenas em algumas propriedades fundamentais.

**Definição:** Dado um espaço vetorial real $\mathbf{V}$, um *produto escalar* (também dito *produto interno*) em $\mathbf{V}$ é uma aplicação

$$\langle , \rangle : \mathbf{V} \times \mathbf{V} \longrightarrow \mathbb{R},$$

$$(\mathbf{u}, \mathbf{v}) \longmapsto \langle \mathbf{u}, \mathbf{v} \rangle$$

com as seguites propriedades:

(i) $\langle \mathbf{u}, \mathbf{v} \rangle = \langle \mathbf{v}, \mathbf{u} \rangle \forall \mathbf{u}, \mathbf{v} \in \mathbf{V}$

(ii) $\langle t\mathbf{u}_1 + \mathbf{u}_2, \mathbf{v} \rangle = t \langle \mathbf{u}_1, \mathbf{v} \rangle + \langle \mathbf{u}_2, \mathbf{v} \rangle \forall \mathbf{u}_1, \mathbf{u}_2, \mathbf{v} \in \mathbf{V}, \forall t \in \mathbb{R}$

(iii) $\langle \mathbf{u}, \mathbf{u} \rangle \geq 0 \forall \mathbf{u} \in \mathbf{V}$

(iv) $\langle \mathbf{u}, \mathbf{u} \rangle = 0 \implies \mathbf{u} = \mathbf{0}$