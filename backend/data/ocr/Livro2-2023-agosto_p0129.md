(ii) $\Rightarrow$ (i) : Como, para todo natural $m$, vale $P^{m+1}(T) \subset P^m(T)$, basta provar o resultado para o caso $k = 1$ (faça $P_1 = P^k$; a convergência de $P_1^m(T)$ para $p^*$ implica na de $P^m(T)$). Suponhamos, pois, que

$$P(T) \subset b_1 + \alpha T = \{b_1 + \alpha x, x \in T\},$$

para um certo $b_1$ em $\mathbb{R}^n$ e um certo escalar $\alpha$, com $|\alpha| < 1$. A ideia é simples: vamos provar que, para todo natural $k$, existe $b_k$ tal que

$$P^k(T) \subset b_k + \alpha^k T.$$

O caso $k = 1$ está nas hipóteses; se o resultado vale para $k$, então

$$P^{k+1}(T) = P(P^k(T)) \subset Pb_k + \alpha^k P(T) \subset (Pb_k + \alpha^k b_1) + \alpha^{k+1} T,$$

o que prova nossa assertiva, com $b_{k+1} = (Pb_k + \alpha^k b_1)$. Desta forma, se $\delta(X)$ representa o diâmetro do conjunto $X$, temos, para todo natural $k$,

$$\delta(P^k(T)) \leq |\alpha^k| \delta(T).$$

Em particular, se tomarmos um $x_o$ qualquer em $T$, a sequência $(P^k x_o)_{k \in \mathbb{N}}$ é de Cauchy e, portanto, convergente. Basta então fazer $p^* = \lim_{k \to \infty} P^k x_o$. A continuidade de $P$ garante $Pp^* = p^*$. Como $T$ é fechado, temos $p^* \in T$, o que garante $p^* = P^k p^* \in P^k(T) \forall k \in \mathbb{N}$. Desta forma, fixado $\varepsilon > 0$, basta tomar $k_o$ em $\mathbb{N}$ tal que $|\alpha^{k_o}| \delta(T) < \varepsilon$. Suponhamos $k > k_o$. Teremos então, se $x \in T$,

$$|P^k x - p^*| = |P^k x - P^k p^*| \leq \delta(P^k(T)) \leq |\alpha^k| \delta(T) < \varepsilon.$$

Para a recíproca, comece com os seguentes exercícios:

**Exercício 14.9** Suponhamos $n \geq 2$. Sejam $a = (n^{-1}, n^{-1}, \ldots, n^{-1}) \in \mathbb{R}^n$ e $\varepsilon = \sqrt{\frac{1}{n(n-1)}}$. Prove que, se $p = (p_1, \ldots, p_n)$ é tal que $p_1 + \cdots + p_n = 1$ e $|p - a| = \sqrt{(p_1 - k^{-1})^2 + \cdots + (p_n - n^{-1})^2} < \varepsilon$, então $p$ está em $T$.

(i) $\Rightarrow$ (ii) : Sejam $a = (n^{-1}, n^{-1}, \ldots, n^{-1}) \in \mathbb{R}^n$ e $\varepsilon = \sqrt{\frac{1}{n(n-1)}}$. Seja $F$ o subespaço afim de $\mathbb{R}^n$ definido por

$$F = \{p \in \mathbb{R}^n \mid p_1 + \cdots + p_n = 1\}.$$

Pelo exercício acima, a interseção com $F$ da bola de centro $a$ e raio $\varepsilon$, $B_\varepsilon(a) \cap F$, está contida em $T$. Como tudo se passa em $F$, isto é,

$$Pp \in F \text{ \forall } p \in P,$$

temos que, se $P^k(T) \rightarrow p^*$, existe $k$ tal que

$$P^k(T) \subset B_{\varepsilon/2}(p^*) \cap F \subset p^* - \frac{1}{2}a + \frac{1}{2}(B_\varepsilon(a) \cap F) \subset p^* - \frac{1}{2}a + \frac{1}{2}T,$$

o que conclui a demonstração.