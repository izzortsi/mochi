Identidade do Paralelogramo:

$$|u + v|^2 = \langle u + v, u + v \rangle = |u|^2 + |v|^2 + 2\langle u, v \rangle$$
$$|u - v|^2 = \langle u - v, u - v \rangle = |u|^2 + |v|^2 - 2\langle u, v \rangle$$

$$|u + v|^2 + |u - v|^2 = 2(|u|^2 + |v|^2)$$

Vamos começar fixando $x$ em $V$ e definindo

$$d = \inf \{|z - x|, z \in K\}.$$

A ideia é achar $y$ em $K$ tal que $|y - x| = d$. Note que $d \geq 0$ e que podemos garantir a existência de uma sequência $(y_n)_{n \in \mathbb{N}}$ de elementos de $K$ tal que

$$\lim_{n \to \infty} |y_n - x| = d.$$

Basta tomar, para cada natural $n$, um $y_n$ em $K$ tal que $|y_n - x| < d + 1/n$.

Se $V$ é de dimensão finita (como é o plano), podemos extrair (graças ao Teorema de Bolzano-Weierstraß) de $(y_n)_{n \in \mathbb{N}}$ uma subsequência convergente. Mas não vamos! A graça deste Teorema é que podemos provar diretamente que qualquer sequência como a nossa $(y_n)_{n \in \mathbb{N}}$ é de Cauchy. Daí seguirá, por estarmos em dimensão finita (ou em um espaço de Hilbert) que existe um $y$ em $V$ tal que $y_n \to y$. Como $K$ é fechado, segue $y \in K$. E daí, e da desigualdade triangular,

$$d \leq |y - x| = |(y - y_n) + (y_n - x)| \leq |y - y_n| + |y_n - x| \to 0 + d = d.$$

Então, se estamos de acordo, resta provar que nossa sequência, $(y_n)_{n \in \mathbb{N}}$, é de Cauchy. E é aí que entra a identidade do paralelogramo. vamos pensar em termos de losango, para começar: suponhamos que nossos $y_n$, para $n$ grande sejam tais que "praticamente" $|y_n - x| = d$.

Suponhamos que tomamos $m$ e $n$ maiores que um certo $n_o$ e consideramos $y_n$ e $y_m$. A identidade do paralelogramo, $|u + v|^2 + |u - v|^2 = 2(|u|^2 + |v|^2)$, nos dá, fazendo

$$u = y_m - x, \quad v = y_n - x,$$

e dividindo tudo por 4:

$$\left| \frac{u + v}{2} \right|^2 + \left| \frac{u - v}{2} \right|^2 = \frac{|u|^2 + |v|^2}{2}.$$