Exercício 7.4 Mostre que o exemplo 3b é, de fato, um espaço com produto interno. A grande dificuldade é provar que $l^2(\mathbb{R})$ é um espaço vetorial, já que não é evidente que

$$\sum_{n=1}^{\infty} x_n^2 < \infty, \sum_{n=1}^{\infty} y_n^2 < \infty \implies \sum_{n=1}^{\infty} (x_n + y_n)^2 < \infty.$$

Se, depois de dois dias tentando, não conseguir, a resposta virá nas próximas páginas...

Exceto em caso de menção explícita em contrário, todos nossos espaços vetoriais são reais. Mas é importante ressaltar que, no caso em que o corpo dos escalares é $\mathbb{C}$, também podemos falar em produto escalar. A principal observação preliminar é que, enquanto, para números reais, é verdade que $|x| = \sqrt{xx}$, o que vale nos complexos é $|z| = \sqrt{zz}$ (lembre que, se $z = x + iy$, então $\bar{z} = x - iy$). Assim, é natural definir, em $\mathbb{C}^n$,

$$\langle (z_1, \ldots, z_n), (w_1, \ldots, w_n) \rangle = z_1 \bar{w}_1 + \cdots + z_n \bar{w}_n.$$

Exercício 7.5 Note que, identificando, da maneira natural, $\mathbb{C}^n$ a $\mathbb{R}^{2n}$, o produto escalar que acabamos de definir é o produto escalar usual de $\mathbb{R}^{2n}$.

Definição: Dado um espaço vetorial complexo $\mathbf{V}$, um produto escalar (também dito produto interno) em $\mathbf{V}$ é uma aplicação

$$\langle, \rangle : \mathbf{V} \times \mathbf{V} \longrightarrow \mathbb{C},$$
$$(\mathbf{u}, \mathbf{v}) \longmapsto \langle\mathbf{u}, \mathbf{v}\rangle$$

com as seguites propriedades:

(i) $\langle\mathbf{u}, \mathbf{v}\rangle = \overline{\langle\mathbf{v}, \mathbf{u}\rangle} \forall\mathbf{u}, \mathbf{v} \in \mathbf{V}$
(ii) $\langle t\mathbf{u}_1 + \mathbf{u}_2, \mathbf{v}\rangle = t \langle\mathbf{u}_1, \mathbf{v}\rangle + \langle\mathbf{u}_2, \mathbf{v}\rangle \forall\mathbf{u}_1, \mathbf{u}_2, \mathbf{v} \in \mathbf{V}, \forall t \in \mathbb{C}$
(iii) $\langle\mathbf{u}, \mathbf{u}\rangle \geq 0 \forall\mathbf{u} \in \mathbf{V}$
(iv) $\langle\mathbf{u}, \mathbf{u}\rangle = 0 \implies \mathbf{u} = \mathbf{0}$$

Exercício 7.6 Prove, a partir da definição, as seguites propriedades:

(i) $\langle\mathbf{u}_1 + \mathbf{u}_2, \mathbf{v}\rangle = \langle\mathbf{u}_1, \mathbf{v}\rangle + \langle\mathbf{u}_2, \mathbf{v}\rangle \forall\mathbf{u}_1, \mathbf{u}_2, \mathbf{v} \in \mathbf{V}$
(ii) $\langle\mathbf{0}, \mathbf{v}\rangle = 0 \forall\mathbf{v} \in \mathbf{V}$
(iii) $\langle t\mathbf{u}, \mathbf{v}\rangle = t \langle\mathbf{u}, \mathbf{v}\rangle \forall\mathbf{u} \in \mathbf{V}, \forall t \in \mathbb{C}$
(iv) $\langle\mathbf{u}, t\mathbf{v}\rangle = \bar{t} \langle\mathbf{u}, \mathbf{v}\rangle \forall\mathbf{u} \in \mathbf{V}, \forall t \in \mathbb{C}$$

Exercício 7.7 Note que $\langle\mathbf{u} + \mathbf{v}, \mathbf{u} + \mathbf{v}\rangle = \langle\mathbf{u}, \mathbf{u}\rangle + \langle\mathbf{v}, \mathbf{v}\rangle + 2Re \langle\mathbf{u}, \mathbf{v}\rangle$.

Já que nossos espaços com produto interno serão sempre supostos reais, é um bom exercício verificar, nas demonstrações que virão, quais valem também no caso complexo.