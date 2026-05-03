18.6 O determinante de transformação linear

Examinemos agora o espaço das $n$-formas lineares alternadas num espaço $\mathbf{V}$ de dimensão $n$, que será notado $\mathcal{A}_n(\mathbf{V})$. Se $\omega \in \mathcal{A}_n(\mathbf{V})$, então $\omega$ é determinada por seu valor em $(v_1, \ldots, v_n)$, onde $\{v_1, \ldots, v_n\}$ é base de $\mathbf{V}$ (isto segue da Observação 1, página 150). Assim, $\mathcal{A}_n(\mathbf{V})$ tem dimensão 1, isto é, se $\omega, \eta \in \mathcal{A}_n(\mathbf{V})$, $\omega \neq 0$, então existe $\lambda \in \mathbb{R}$ tal que $\eta = \lambda \omega$ (ou seja, a menos de fixação da unidade de medida, só existe uma forma de medir coisas de dimensão $n$ em $\mathbf{V})$.

Proposição 1: Se o espaço vetorial $\mathbf{V}$, real ou complexo, tem dimensão $n$, então o espaço vetorial $\mathcal{A}_n$ das formas $n$-lineares alternadas em $\mathbf{V}$ tem dimensão 1.

Demonstração: Já demonstramos a existência de um elemento não nulo em $\mathcal{A}_n$ (o determinante, que notamos $det_n$). Seja $\omega$ outro elemento de $\mathcal{A}_n$; faça $\alpha = \omega(e_1, \ldots, e_n)$. Dos lemas 1 e 2 da seção anterior, segue que, como $\omega$ e $\alpha det_n$ coincidem em $(e_1, \ldots, e_n)$, então são iguais.

Seja agora $T : \mathbf{V} \rightarrow \mathbf{V}$ linear. Para cada $\omega \in \mathcal{A}_n(\mathbf{V})$, seja $\omega_T \in \mathcal{A}_n(\mathbf{V})$ dada por

$$\omega_T(v_1, \ldots, v_n) = \omega(Tv_1, \ldots, Tv_n).$$

A aplicação $\omega \rightarrow \omega_T$ é claramente uma transformação linear de $\mathcal{A}_n(\mathbf{V})$ em $\mathcal{A}_n(\mathbf{V})$. Sendo $\mathcal{A}_n(\mathbf{V})$ de dimensão 1, existe um único escalar $det_T$ tal que

$$\omega(Tv_1, \ldots, Tv_n) = detT \omega(v_1, \ldots, v_n) \forall \omega \in \mathcal{A}_n(\mathbf{V}).$$

Definição: O número $detT$, definido acima, é chamado determinante de $T$.

Proposição 2: Se $T_1, T_2 : \mathbf{V} \rightarrow \mathbf{V}$ são lineares, então,

$$det(T_1T_2) = detT_1.detT_2.$$

Demonstração: Suponhamos $T_1, T_2 : \mathbf{V} \rightarrow \mathbf{V}$ lineares. Então, para qualquer $\omega$ em $\mathcal{A}_n(\mathbf{V})$, temos

$$det(T_1T_2)\omega(v_1, \ldots, v_n) = \omega(T_1T_2v_1, \ldots, T_1T_2v_n) =$$

$$= \omega_T1(T_2v_1, \ldots, T_2v_n) = detT_1\omega(T_2v_1, \ldots, T_2v_n) =$$

$$= detT_1.detT_2.\omega(v_1, \ldots, v_n) \quad \forall(v_1, \ldots, v_n) \in \mathbf{V}^n,$$

18.7 Determinante de matriz

Dada a matriz $n \times n [a_{ij}]$, temos, pelo menos, três maneiras naturais para definir $det [a_{ij}]$:

1. usando a definição de $det_n$ como forma linear, fazemos

$$det [a_{ij}] = det_n(a_1, \ldots, a_n),$$

sendo $a_j$ o j-ésimo vetor coluna de $[a_{ij}]$;