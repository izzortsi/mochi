6.2 Dimensão

É razoavelmente fácil compreender que, se os vetores $v_1, \ldots, v_m$ geram o espaço $V$, podemos extrair de $\{v_1, \ldots, v_m\}$ um subconjunto $\{w_1, \ldots, w_n\}$ (ordenado) que é uma base de $V$. Com efeito, se $\{v_1, \ldots, v_m\}$ não é linearmente independente, basta ir "jogando fora", passo a passo, os vetores supérfluos, até ficar com um subconjunto linearmente independente que ainda gera $V$. Uma questão análoga é: e se o conjunto $\{v_1, \ldots, v_m\}$ é linearmente independente mas não gera $V$, podemos acrescentar-lhe mais alguns vetores, de forma a obtermos uma base de $V$?

Lema Fundamental: Suponha que os subconjuntos $\alpha = \{v_1, \ldots, v_m\}$ e $\beta = \{u_1, \ldots, u_n\}$ do espaço $V$ são tais que:

(i) $\alpha$ gera $V$;
(ii) $\beta$ é linearmente independente.

Então:

(i) $m \ge n$;
(ii) é possível substituir, em $\alpha, n$ dos $v_i$ por $u_1, \ldots, u_n$, de forma que o novo conjunto assim obtido ainda gere $V$.

Demonstração: Vamos construir $n + 1$ subconjuntos de $V$, que designaremos por $\alpha_0, \ldots, \alpha_n$, todos com $m$ vetores, de forma que:

- $\alpha_0 = \alpha$
- $\alpha_{i+1}$ é obtido de $\alpha_i$, se $i < n$, pela substitução de um elemento de $\alpha$ por um elemento de $\beta$, de forma que $\beta \subset \alpha_n$

Comecemos por $\alpha_1$. Como $\alpha$ gera $V$, podemos encontrar escalares $x_1, \ldots, x_m$ tais que

$$x_1v_1 + \ldots + x_mv_m = u_1.$$

Note também que, como $\beta$ é linearmente independente, $u_1$ não é nulo. Logo, podemos escolher um $j$ tal que $x_j \neq 0$; multiplicando dos dois lados por $x_j^{-1}$ e isolando $v_j$ do lado esquerdo, obtemos

$$v_j = \frac{-x_1}{x_j}v_1 + \ldots + \frac{1}{x_j}u_1 + \ldots + \frac{-x_m}{x_j}v_m.$$

Concluímos, pois, que $v_j$ é combinação linear de $v_1, \ldots, u_1, \ldots, v_m$. Assim, se $\alpha_1$ é o conjunto obtido pela exclusão de $v_j$ de $\alpha$ e sua substitução por $u_1$, temos que $\alpha_1$ gera $V$ (já que, com os vetores de $\alpha_1$ conseguimos gerar $v_j$ e, a partir daí, temos todos os originalmente em $\alpha$, que gera $V$).

Note que podemos escrever

$$\alpha_1 = \{\varepsilon_1, \ldots, \varepsilon_m\},$$

com $\varepsilon_1 = u_1 e \{\varepsilon_2, \ldots, \varepsilon_m\} \subset \alpha$. Suponhamos agora que, para um certo $i$ menor do que $m$ e $n$ (ainda não provamos que $n < m$), tenhamos já definido o conjunto $\alpha_i = \{\varepsilon_1, \ldots, \varepsilon_m\}$, tal que: