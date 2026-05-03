Definição: Um **subespaço vetorial** de $\mathbf{V}$ é um suconjunto $W$ de $\mathbf{V}$, não vazio, tal que:

$(i) \quad \mathbf{w} \in W, t \in \mathbb{R} \implies t\mathbf{w} \in W$
$(ii) \quad \mathbf{w}_1, \mathbf{w}_2 \in W \implies \mathbf{w}_1 + \mathbf{w}_2 \in W$

Exercício 5.14 Mostre que todo plano passando pela origem é um subespaço vetorial de $\mathbb{R}^3$.

Definição: O vetor $\mathbf{v}$ é dito uma **combinação linear** dos vetores $\mathbf{v}_1, \ldots, \mathbf{v}_n$ se existem escalares $t_1, \ldots, t_n$ tais que $\mathbf{v} = t_1\mathbf{v}_1 + \ldots + t_n\mathbf{v}_n$.

Definição: Dado um subconjunto $X$ do espaço vetorial $\mathbf{V}$, o **subespaço gerado** por $X$ é o conjunto de todas as combinações lineares de vetores de $X$ (isto é: todos os vetores da forma $t_1\mathbf{v}_1 + \ldots + t_n\mathbf{v}_n$, sendo os $t_i$ escalares e os $\mathbf{v}_i$ elementos de $X$). O espaço gerado pelo conjunto vazio é, por convenção, $\{0\}$.

Exercício 5.15 Mostre que a definição acima é equivalente a: o **subespaço gerado** por $X$ é a interseção de todos os subespaços de $\mathbf{V}$ que contêm $X$.

Exercício 5.16 Se preferir, adote, como definição de subespaço gerado, a do exercício acima. A partir daí, faz sentido escolher a definição seguinte, mais elegante: sejam $\mathbf{V}$ um espaço vetorial e $X$ um subconjunto de $\mathbf{V}$; o elemento $\mathbf{v}$ de $\mathbf{V}$ é **combinação linear** dos elementos de $X$ se $\mathbf{v}$ pertence ao espaço gerado por $X$. Observe que, usando a definição de espaço gerado do exercício anterior, é natural concluir que $0$ é o único vetor obtido como combinação linear dos elementos do conjunto vazio.