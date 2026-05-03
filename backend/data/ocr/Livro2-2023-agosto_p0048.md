vetorial (um conjunto com operações de adição e de multiplicação por escalar, com as propriedades (1) a (8) apresentadas na seção anterior); neste caso, faz sentido pensar em um espaço reduzido ao vetor nulo, que teria como base o conjunto vazio.

Observe que são duas as condições para que $\{v_1, \ldots, v_n\}$ seja uma base de V. A primeira é que $\{v_1, \ldots, v_n\}$ deve **gerar V** (isto é, todo vetor de V deve ser combinação linear de $v_1, \ldots, v_n$).$^2$ A segunda é que não podem existir duas n-uplas distintas, $(x_1, \ldots, x_n)$ e $(y_1, \ldots, y_n)$, que correspondam a um mesmo vetor. Examinemos essa segunda condição.

**Proposição:** Sejam $v_1, \ldots, v_n$ vetores de V. São equivalentes:

(i) existem duas n-uplas distintas $(x_1, \ldots, x_n)$ e $(y_1, \ldots, y_n)$ tais que

$$x_1v_1 + \ldots + x_nv_n = y_1v_1 + \ldots + y_nv_n;$$

(ii) algum dos vetores $v_1, \ldots, v_n$ é combinação linear dos demais;

(iii) existe uma n-upla $(x_1, \ldots, x_n) \neq (0, \ldots, 0)$ tal que

$$\vec{0} = x_1v_1 + \ldots + x_nv_n.$$

Demonstração: Provaremos $(i) \Rightarrow (ii) \Rightarrow (iii) \Rightarrow (i)$.

$(i) \Rightarrow (ii)$: Fixemos um $i$ tal que $x_i \neq y_i$ (certamente existe, já que $(x_1, \ldots, x_n) \neq (y_1, \ldots, y_n)$).

Como

$$x_1v_1 + \ldots + x_nv_n = y_1v_1 + \ldots + y_nv_n,$$

podemos concluir que

$$(y_i - x_i)v_i = (x_1 - y_1)v_1 + \ldots + (x_{i-1} - y_{i-1})v_{i-1} + (x_{i+1} - y_{i+1})v_{i+1} + \ldots + (x_n - y_n)v_n$$

e, portanto, multiplicando dois lados por $(y_i - x_i)^{-1}$, obtemos $v_i$ como combinação linear dos demais:

$$v_i = \frac{(x_1 - y_1)}{(y_i - x_i)}v_1 + \ldots + \frac{(x_{i-1} - y_{i-1})}{(y_i - x_i)}v_{i-1} + \frac{(x_{i+1} - y_{i+1})}{(y_i - x_i)}v_{i+1} + \ldots + \frac{(x_n - y_n)}{(y_n - x_n)}v_n.$$

$(ii) \Rightarrow (iii)$: Se um certo $v_i$ é combinação linear dos demais, podemos escrever, para certos $x_1, \ldots, x_{i-1}, x_{i+1}, \ldots, x_n$,

$$v_i = (x_1v_1 + \ldots + x_{i-1}v_{i-1} + x_{i+1}v_{i+1} + \ldots + x_nv_n).$$

Logo,temos a n-upla $x_1, \ldots, x_{i-1}, -1, x_{i+1}, \ldots, x_n \neq (0, \ldots, 0)$, com

$$\vec{0} = x_1v_1 + \ldots + x_{i-1}v_{i-1} + (-1)v_i + x_{i+1}v_{i+1} + \ldots + x_nv_n.$$

$(iii) \Rightarrow (i)$: Basta notar que, valendo (iii), temos $(0, \ldots, 0) \neq (x_1, \ldots, x_n)$ e

$^2$Neste caso, diz-se também que $v_1, \ldots, v_n$ geram V