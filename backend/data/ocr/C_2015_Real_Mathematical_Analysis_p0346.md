39 Theorem The wedge product $\wedge : \Omega^k \times \Omega^\ell \rightarrow \Omega^{k+l}$ satisfies four natural conditions:

(a) distributivity: $(\alpha + \beta) \wedge \gamma = \alpha \wedge \gamma + \beta \wedge \gamma$ and $\gamma \wedge (\alpha + \beta) = \gamma \wedge \alpha + \gamma \wedge \beta$.

(b) insensitivity to presentations: $\alpha \wedge \beta = \sum_{I,J} a_I b_J dx_{IJ}$ for general presentations $\alpha = \sum a_I dx_I$ and $\beta = \sum b_J dx_J$.

(c) associativity: $\alpha \wedge (\beta \wedge \gamma) = (\alpha \wedge \beta) \wedge \gamma$.

(d) signed commutativity: $\beta \wedge \alpha = (-1)^{k\ell} \alpha \wedge \beta$ when $\alpha$ is a $k$-form and $\beta$ is an $\ell$-form. In particular $dx \wedge dy = -dy \wedge dx$.

40 Lemma The wedge product of basic forms satisfies

$$dx_I \wedge dx_J = dx_{IJ}.$$

Proof #1 See Exercise 55.

Proof #2 If $I$ and $J$ ascend then the lemma merely repeats the definition of the wedge product. Otherwise, let $\pi$ and $\rho$ be permutations that make $\pi I$ and $\rho J$ non-descending. Call $\sigma$ the permutation of $IJ$ that is $\pi$ on the first $k$ terms and $\rho$ on the last $\ell$. The sign of $\sigma$ is $\text{sgn}(\pi) \text{sgn}(\rho)$ and

$$dx_I \wedge dx_J = \text{sgn}(\pi) \text{sgn}(\rho) dx_{\pi I} \wedge dx_{\rho J} = \text{sgn}(\sigma) dx_{\sigma(IJ)} = dx_{IJ}.$$

Proof of Theorem 39 (a) To check distributivity, suppose that $\alpha = \sum a_I dx_I$ and $\beta = \sum b_I dx_I$ are $k$-forms, while $\gamma = \sum c_J dx_J$ is an $\ell$-form and all sums are ascending presentations. Then

$$\sum (a_I + b_I) dx_I$$

is the ascending presentation of $\alpha + \beta$ (this is the only trick in the proof) and

$$(\alpha + \beta) \wedge \gamma = \sum_{I,J} (a_I + b_I) c_J dx_{IJ} = \sum_{I,J} a_I c_J dx_{IJ} + \sum_{I,J} b_I c_J dx_{IJ},$$

which is $\alpha \wedge \gamma + \beta \wedge \gamma$, and verifies distributivity on the left. Distributivity on the right is checked in a similar way.

(b) Let $\sum a_I dx_I$ and $\sum b_J dx_J$ be general nonascending presentations of $\alpha$ and $\beta$. By distributivity and Lemma 40 we have

$$\left( \sum a_I dx_I \right) \wedge \left( \sum b_J dx_J \right) = \sum_{I,J} a_I b_J dx_I \wedge dx_J = \sum_{I,J} a_I b_J dx_{IJ}$$