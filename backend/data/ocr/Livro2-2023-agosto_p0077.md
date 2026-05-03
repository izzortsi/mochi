Voltando a $y_m$ e $y_n$, temos:

$$\left| \frac{1}{2}(y_n + y_m) \right|^2 + \frac{|y_m - y_n|^2}{4} = \frac{|y_m - x|^2 + |y_n - x|^2}{2}.$$

Note que, com $n$ e $m$ grandes, o lado direito estará próximo de $d^2$. Mas, como $K$ é convexo, o ponto médio do segmento $[y_n, y_m]$ está em $K$. Logo,

$$\left| \frac{1}{2}(y_n + y_m) \right|^2 \geq d^2.$$

Assim, $|y_m - y_n|$ não pode ficar grande. Mais precisamente, se, para um certo $\alpha > 0$, tomarmos $n_o$ tal que

$$n, m > n_o \Rightarrow |y_m - x|^2 < d^2 + \alpha, \quad |y_n - x|^2 < d^2 + \alpha,$$

teremos

$$\frac{|y_m - y_n|^2}{4} = \frac{|y_m - x|^2 + |y_n - x|^2}{2} - \left| \frac{1}{2}(y_n + y_m) \right|^2 < \frac{d^2 + \alpha + d^2 + \alpha}{2} - d^2 = \alpha.$$

Acabamos de provar, pois, que, se $n_o$ é tal que

$$n, m > n_o \Rightarrow |y_m - x|^2 < d^2 + \alpha, \quad |y_n - x|^2 < d^2 + \alpha,$$

teremos

$$|y_n - y_m| < 2\sqrt{\alpha}.$$

Isto prova que nossa sequência $(y_n)_{n \in \mathbb{N}}$ é de Cauchy, pois, dado $\varepsilon > 0$, basta fazer $\alpha = \varepsilon^2/4$ no raciocínio acima para que o $n_o$ por meio dele obtido nos dará

$$n, m > n_o \Rightarrow |y_m - y_n| < \varepsilon,$$

como queríamos demonstrar.

Restam ainda a provar a unicidade da projeção e as duas outras asserções. Comecemos por o elemento $y$ de $K$ é projeção$^4$ de $x$ sobre $K$ se, e somente se,

$$\langle x - y, z - y \rangle \leq 0 \forall z \in K;$$

Veja a figura. Consideremos os casos $z_1$ e $z_2$. Como $\langle x - y, z_2 - y \rangle \leq 0$, temos

$$|x - z_2|^2 = |(x - y) + (y - z_2)|^2 = |x - y|^2 + |y - z_2|^2 + \langle x - y, y - z_2 \rangle > |x - y|^2.$$

Isto prova que, se $y$ está em $K$ e

$$\langle x - y, z - y \rangle \leq 0 \forall z \in K,$$

então $y = p_K(x)$.

$^4$observe a sutil omissão do artigo definido "a"