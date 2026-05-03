8.5: O processo de Gram-Schmidt

Exercício 8.11 Por via das dúvidas, veja se está claro: se $\{v_1, \ldots, v_n\}$ é base ortogonal de V, então $\{\varepsilon_1, \ldots, \varepsilon_n\}$, com

$$\varepsilon_i = \frac{1}{|v_i|}v_i, \quad i = 1, \ldots, n,$$

é base ortonormal de V.

Exercício 8.12 Seja V o espaço das funções contínuas definidas em $[0, 2\pi]$ e a valores em $\mathbb{R}$, com o produto interno

$$\langle f, g \rangle = \int_0^{2\pi} f(x)g(x)dx.$$

Seja, para cada $n = 0, 1, 2, \ldots$, o elemento $\varepsilon_n$ de V definido por

$$\varepsilon_n = \begin{cases} \cos \frac{n}{2}x, & n \text{ par} \\ \sin \frac{n+1}{2}x, & n \text{ impar} \end{cases}$$

Mostre que, se $n \neq m$, $\langle \varepsilon_n, \varepsilon_m \rangle = 0$.

8.5 O processo de Gram-Schmidt

A seção anterior destacou o papel fundamental das bases ortonormais em espaços com produto interno. Até agora, porém, não demonstramos a existência de bases ortonormais em um contexto geral. Mais claramente: supondo que V é um espaço vetorial com produto interno, podemos garantir que V tem uma base ortonormal? Todo o trabalho que já tivemos com as projeções deve ter deixado pistas de que a resposta, se V é de dimensão finite, é sim e indicar o processo que nos permite construir, a partir de uma base qualquer de V, uma base ortonormal.

Lema de Gram-Schmidt: Todo espaço vetorial de dimensão finite com produto interno tem base ortonormal. Se $\{v_1, \ldots, v_n\}$ é base de V, então $\{\varepsilon_1, \ldots, \varepsilon_n\}$, construída recursivamente por:

1. $\varepsilon_1 = \frac{1}{|v_1|}v_1,$
2. $u_{i+1} = v_{i+1} - \sum_{j=1}^{i} \langle v_{i+1}, \varepsilon_j \rangle \varepsilon_j,$
3. $\varepsilon_{i+1} = \frac{1}{|u_{i+1}|}u_{i+1},$

é base ortonormal de V.

Demonstração: Os $\varepsilon_i$ são unitários por construção. A demonstração de que $u_{i+1}$ (e, portanto, $\varepsilon_{i+1}$) é ortogonal a $\varepsilon_1, \ldots, \varepsilon_i$ é uma simples conta.

Podemos, agora, juntar as ideias que já desenvolvemos sobre projeções e o Lema de Gram-Schmidt em um teorema.

Teorema da Projeção: Sejam V um espaço vetorial com produto interno e $V_0$ um subespaço vetorial de V. Suponhamos que $V_0$ é de dimensão finite. Então existe uma única aplicação $P : V \rightarrow V_0$ satisfazendo, para cada v em V, as duas propriedades equivalentes: