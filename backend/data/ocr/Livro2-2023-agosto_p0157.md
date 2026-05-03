Exercício 18.22 Seja $X = \{x_1, \ldots, x_n\} \subset \mathbb{R}$, com $x_1 < x_2 < \ldots < x_n$. Mostre que também podemos, em $S(X)$ definir o sinal da permutação $\sigma$, com as mesmas propriedades, por

$$sgn(\sigma) = \frac{\prod_{1 \leq i < j \leq n} (\sigma(x_j) - \sigma(x_i))}{\prod_{1 \leq i < j \leq n} (x_j - x_i)} = \prod_{1 \leq i < j \leq n} \frac{\sigma(x_j) - \sigma(x_i)}{x_j - x_i}.$$

Provado esse resultado algébrico fundamental, podemos seguir em frente.

18.5 O determinante como forma de volume

Além das permutações de $n$ elementos, trabalharemos também, fixado $n$, com as $p$-listas, que são elementos de $\{1, \ldots, n\}^p$. Uma $p$-lista será designada por $J$, sendo $J = (J_1, \ldots, J_p)$. También trabalharemos com um conjunto especial de $p$-listas, designado pela letra $\mathcal{J}$, definido por:

$$\mathcal{J} = \{J \in \{1, \ldots, n\}^p \mid J_1 < J_2 < \ldots < J_p\}.$$

Lema 1: Seja $\mathbf{V}$ um espaço vetorial de dimensão $n$, real ou complexo. Fixada uma base de $\mathbf{V}$, cujos elementos designaremos por $e_1, \ldots, e_n$, seja, para cada $p$-lista $J$, $e_j \in \mathbf{V}^p$ dado por $e_J = (e_{J_1}, \ldots, e_{J_p})$. Então duas formas $p$-lineares $\omega$ e $\eta$ de $\mathbf{V}$ são iguais sempre que $\omega(e_J) = \eta(e_J)$ para todo $J$ em $\{1, \ldots, n\}^p$.

Demonstração: Fazemos por indução sobre $p$. O caso $p = 1$ é a bijeção entre transformações lineares e matrizes, fixada uma base. Supondo o resultado válido para $p$, consideremos duas formas $(p+1)$-lineares $\omega$ e $\eta$ tais que $\omega(e_J) = \eta(e_J)$ para todo $J$ em $\{1, \ldots, n\}^{p+1}$ e $p+1$ vetores $v_0, \ldots, v_p$. Escrevendo $v_0 = a_1e_1 + \ldots + a_ne_n$, temos:

$$\omega(v_0, \ldots, v_p) = \sum_{j=1}^{n} a_j\omega(e_j, v_1, \ldots, v_p) = \sum_{j=1}^{n} a_j\eta(e_j, v_1, \ldots, v_p) = \eta(v_0, \ldots, v_p)$$

(note que a igualdade central decorre da hipótese de indução).

Lema 2: Sejam $\mathbf{V}$ um espaço vetorial, real ou complexo, e $\omega$ uma forma $p$-linear alternada em $\mathbf{V}$. Para quaisquer $(v_1, \ldots, v_p)$ em $\mathbf{V}^p$ e $\sigma$ em $S_p$, vale

$$\omega(v_{\sigma_1}, \ldots, v_{\sigma_p}) = sgn\sigma \omega(v_1, \ldots, v_p).$$

Demonstração: Usando a Proposição 1 da página 147, podemos escrever $\sigma$ como produto de transposições: $\sigma = \tau_1 \ldots \tau_k$. Da Proposição 2 da página 148, segue $sgn\sigma = (-1)^k$. Como $\omega$ é alternada, temos

$$\omega(v_{\sigma_1}, \ldots, v_{\sigma_p}) = (-1)^k\omega(v_1, \ldots, v_p) = sgn\sigma \omega(v_1, \ldots, v_p).$$