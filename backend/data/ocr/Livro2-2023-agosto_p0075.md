9.3: Projeção de ponto sobre conjunto convexo

1. Se K não é fechado, a existência da projeção $p_K(\mathbf{v})$, para qualquer $\mathbf{v}$ em $\mathbf{V}$, não é garantida (dê um exemplo).

2. $p_K(\mathbf{v})$, se existe, é única.

3. O elemento $\mathbf{v}_o$ de K é a projeção de $\mathbf{v}$ sobre K se, e somente se,

$$\langle \mathbf{v} - \mathbf{v}_o, \mathbf{w} - \mathbf{v}_o \rangle \leq 0 \forall \mathbf{w} \in K.$$

4. Se existem $p_K(\mathbf{u})$ e $p_K(\mathbf{v})$, então $|p_K(\mathbf{u}) - p_K(\mathbf{v})| \leq |\mathbf{u} - \mathbf{v}|.$

A existência da projeção sobre um subconjunto convexo e fechado de $\mathbb{R}^n$ pode ser demonstrada a partir do fato de que, nesse caso, se K é fechado e limitado, toda função continua $f : K \to \mathbb{R}$ assume seu mínimo em $K$ (faça como exercício). Faremos a seguir uma demonstração que depende apenas da convergência de sequências de Cauchy. É mais simples, instrutiva e se generaliza imediatamente para espaços de Hilbert. Vamos enunciá-la e demonstrá-la, pomposamente, para espaços de Hilbert. Mas não se assuste: pode supor que estamos falando de vetores-flechinha e pontos no plano, que a demonstração é igualzinha, sem tirar nem pôr.

Definição: Um espaço de Hilbert é um espaço vetorial com produto interno no qual toda sequência de Cauchy converge.

Teorema da Projeção: Sejam $H$ um espaço de Hilbert, que suporemos real$^3$, e $K$ um subconjunto convexo e não vazio de $H$. Então para cada ponto $x$ de $V$ existe um único $y$ em $K$, que chamaremos de projeção de $x$ em $K$ e notaremos por $p_K(x)$, caracterizado por

$$|x - p_k(x)| \leq |x - z| \forall z \in K.$$

Além disso, temos:

1. o elemento $y$ de $K$ é a projeção de $x$ sobre $K$ se, e somente se,

$$\langle x - y, z - y \rangle \leq 0 \forall z \in K;$$

2. para quaisquer $x_1$ e $x_2$ em $V$, vale

$$|p_K(x_1) - p_K(x_2)| \leq |x_1 - x_2|,$$

com igualdade se, e somente se, $x - p_K(x) = y - p_K(y).$

Demonstração: Nosso lema básico é a

$$^3\text{isto é: o produto interno de dois elementos de } H\text{ é sempre um número real}$$