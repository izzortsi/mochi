6.2: Dimensão

• $\varepsilon_1 = \mathbf{u}_1, \ldots, \varepsilon_i = \mathbf{u}_i$
• $\{\varepsilon_{i+1}, \ldots, \varepsilon_m\} \subset \alpha$
• $\alpha_i$ gera $\mathbf{V}$

Podemos então encontrar escalares $x_1, \ldots, x_m$ tais que

$$x_1\varepsilon_1 + \ldots + x_m\varepsilon_m = \mathbf{u}_{i+1},$$

ou seja,

$$x_1\mathbf{u}_1 + \ldots + x_i\mathbf{u}_i + x_{i+1}\varepsilon_{i+1} + \ldots + x_m\varepsilon_m = \mathbf{u}_{i+1}.$$

É hora de observar que, como $\beta$ é linearmente independente, podemos tomar um $j > i$ tal que $x_j \neq 0$ (caso contrário, $\mathbf{u}_{i+1}$ seria combinação linear de $\mathbf{u}_1, \ldots, \mathbf{u}_i$). Isto significa que, procedendo como no caso de $\alpha_1$ e definindo $\alpha_{i+1}$ pela exclusão de $\varepsilon_j$ e sua substitução por $\mathbf{u}_{i+1}, \alpha_{i+1}$ terá as mesmas propriedades de $\alpha_i$ acima listadas (devemos, é claro, renomear os vetores de $\alpha_{i+1}$ de forma que $\mathbf{u}_{i+1}$ passe a se chamar $\varepsilon_{i+1}$).

O que acima fizemos mostra que podemos definir os conjuntos $\alpha_i$, com as três propriedades acima, para todo $i$ de 1 até o menor entre $m$ e $n$. Isto prova:

(i) $m \ge n$, pois, caso contrário, $\mathbf{u}_n$ seria combinação linear de $\mathbf{u}_1, \ldots, \mathbf{u}_m$
(ii) $\alpha_n$ gera $\mathbf{V}$ e $\alpha_n = \{ \mathbf{u}_1, \ldots, \mathbf{u}_n, \varepsilon_{n+1}, \ldots, \varepsilon_m \}$, com $\{\varepsilon_{n+1}, \ldots, \varepsilon_m\} \subset \alpha$

Suponhamos agora que nosso espaço, $\mathbf{V}$, tenha uma base, $\alpha$, formada por $n$ elementos. Como $\alpha$ gera $\mathbf{V}$, todo conjunto linearmente independente em $\mathbf{V}$ tem, no máximo, $n$ elementos; como $\alpha$ é linearmente independente, todo conjunto que gera $\mathbf{V}$ tem, no mínimo, $n$ elementos. Daí segue um teorema crucial.

**Teorema:** Se o espaço vetorial $\mathbf{V}$ tem uma base com $n$ elementos, então toda base de $\mathbf{V}$ tem, exatamente, $n$ elementos. Além disso, se $\beta = \{ \mathbf{v}_1, \ldots, \mathbf{v}_n \}$ é um subconjunto de $\mathbf{V}$ com $n$ elementos, então são equivalentes:

(i) $\mathbf{v}_1, \ldots, \mathbf{v}_n$ formam uma base de $\mathbf{V}$;
(ii) $\mathbf{v}_1, \ldots, \mathbf{v}_n$ geram $\mathbf{V}$;
(iii) $\mathbf{v}_1, \ldots, \mathbf{v}_n$ são linearmente independentes.

Demonstração: A primeira afirmação é o que acabamos de concluir. Além disso, temos, obviamente, (i) $\Leftrightarrow$ (ii) e (iii) (juntos). Basta, pois, provar que (ii) $\Leftrightarrow$ (iii).

(ii) $\Rightarrow$ (iii): Observe que, se fosse possível ter $\mathbf{V}$ gerado por $\beta$ sem que $\beta$ fosse linearmente independente, então poderíamos descartar pelo menos um elemento de $\beta$ (que seja combinação linear dos demais), obtendo um conjunto de $n - 1$ elementos que ainda geraria $\mathbf{V}$, o que, como acabamos de observar, não é possível. (ii) $\Rightarrow$ (iii): Se, por outro lado, sabemos que $\beta$ é linearmente independente, podemos, tomando uma base $\alpha$ de $\mathbf{V}$ (que, já sabemos, tem $n$ elementos e gera $\mathbf{V}$), concluir diretamente, do Lema Fundamental, que $\beta$ gera $\mathbf{V}$.

Diante do acima exposto, concluímos que existe um número bem determinado, $n$, tal que toda base do espaço $\mathbf{V}$ tem $n$ elementos. Dizemos, pois, que a **dimensão** de $\mathbf{V}$ é $n$.