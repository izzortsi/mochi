$$0v_1 + \ldots + 0v_n = x_1v_1 + \ldots + x_nv_n.$$

**Definição**: Os vetores $v_1, \ldots, v_n$ são ditos **linearmente independentes** se nenhum deles é combinação linear dos demais. Neste caso, diz-se também que o conjunto $\{v_1, \ldots, v_n\}$ é **linearmente independente**. No caso contrário, os vetores são ditos **linearmente dependentes** (ou que o conjunto é **linearmente dependente**).

**Exercício 6.3** Mostre que $v_1, \ldots, v_n$ são linearmente independentes se, e somente se, $t_1v_1, \ldots, t_nv_n = \vec{0}$ apenas no caso em que $t_1 = \ldots = t_n = 0$.

**Corolário**: Para que um subconjunto ordenado $\{v_1, \ldots, v_n\}$ do espaço vetorial $V$ seja uma base de $V$, é necessário e suficiente que as duas condições abaixo sejam simultaneamente satisfeitas:

(i) $v_1, \ldots, v_n$ geram $V$;
(ii) $v_1, \ldots, v_n$ são linearmente independentes.$^3$

**Observação**: Pela definição que adotamos no início desta seção, há espaços vetoriais que não têm base (o espaço $\mathbb{R}[x]$ dos polinômios a coeficientes reais, por exemplo, não pode ser gerado por um conjunto finito de polinômios). Mesmo se não vamos trabalhar com bases infinitas, não é difícil dar uma definição mais geral. Diremos que um subconjunto $\alpha$ do espaço $V$ gera $V$ (ou, equivalentemente, que $V$ é o espaço gerado por $\alpha$) se todo elemento de $V$ é combinação linear de um número finito de elementos de $\alpha$ (um bom exercício é mostrar que esta definição é equivalente à do exercício da página 37). Da mesma forma, diremos que $\alpha$ é **linearmente independente** (ou que os elementos de $\alpha$ são **linearmente independentes** - diz- se também que são LI) se nenhum elemento de $\alpha$ pertencer ao espaço gerado pelos demais (note que não exigimos que $\alpha$ seja finito).

**Exercício 6.4** Gaste um tempinho refletindo sobre as definições acima.

Começamos esta seção com a definição de base de um espaço vetorial. Concluímos com uma definição equivalente (mas que, se adotarmos as definições alternativas, acima apresentadas, de espaço gerado e de independência linear, pode ser mais abrangente).

**Definição**: Um subconjunto $\alpha$ de um espaço vetorial $V$ é dito uma **base** de $V$ se satisfaz as duas condições:

(i) $\alpha$ gera $V$;
(ii) $\alpha$ é LI.

**Exercício 6.5** Encontre uma base para o espaço $\mathbb{R}[x]$ dos polinômios a coeficientes reais.

**Questão**: É verdade que todo espaço vetorial tem base?

$^3$Este corolário pode ser usado como definição de base; note que, neste caso, podemos "esquecer" a exigência de ordenação dos $v_1, \ldots, v_n$