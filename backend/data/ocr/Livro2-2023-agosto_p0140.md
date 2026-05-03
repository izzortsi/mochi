que se anula em todos os $x_i$, exceto $x_j$. Assim, usando o símbolo $\Pi$ para **produtório**, podemos definir, para $j = 1, \ldots, n$, os polinômios $p_j$, dados por

$$p_j(x) = \frac{\prod_{i=1,i\neq j}^{n}(x-x_i)}{\prod_{i=1,i\neq j}^{n}(x_j-x_i)}.$$

É imediato que

$$p_j(x_i) = \begin{cases} 0, & i \neq j \\ 1, & i = j \end{cases},$$

de forma que nosso polinômio, $p$, é dado por

$$p(x) = \sum_{j=1}^{n} y_j p_j(x).$$

### 16.2 Polinômios de Lagrange, uma nova base para $\mathcal{P}_n$

Resolvido nosso problema, podemos, da solução, extrair algum ensinamento. Visto que escrevemos nosso polinômio como combinação linear dos polinômios $p_j$ (que são $n$ e, todos, de grau $n-1$) é natural perguntar, e imediatamente responder de forma afirmativa, se os $p_j$ não constituiriam uma base para $\mathcal{P}_n$.

**Proposição:** Dados $n$ números reais (pode ser complexos) distintos, $x_1, \ldots, x_n$, os correspondentes polinômios (ditos de Lagrange $\ell_1, \ldots, \ell_n$, dados por

$$\ell_j(x) = \frac{\prod_{i=1,i\neq j}^{n}(x-x_i)}{\prod_{i=1,i\neq j}^{n}(x_j-x_i)},$$

formam uma base para $\mathcal{P}_n$.

**Demonstração:** Como temos $n$ elementos de $\mathcal{P}_n$, que é de dimensão $n$, basta provar que são linearmente independentes. Suponhamos, pois, que, para escalares $\alpha_1, \ldots, \alpha_n$, seja identicamente nulo o polinômio

$$p(x) = \alpha_1 \ell_1(x) + \cdots + \alpha_n \ell_n(x).$$

Fazendo, sucessivamente, $x = x_1, \ldots, x=n$, obtemos $\alpha_1 = \ldots = \alpha_n = 0$.

**Corolário:** Suponhamos fixados $n$ números distintos, $x_1, \ldots, x_n$; suponhamos, ainda, dados outros $n$ números, que não precisam ser diferentes, $y_1, \ldots, y_n$. Então existe um único polinômio $p$ de grau inferior a $n$ tal que $p(x_i) = y_i$, $i = 1, \ldots, n$.

**Demonstração:** Acabamos de provar a existência. Se houvesse duas soluções distintas, $p_1$ e $p_2$ sua dferença seria um polinômio de grau inferior a $n$ com $n$ raízes, já que se anularia em cada um dos $x_i$.