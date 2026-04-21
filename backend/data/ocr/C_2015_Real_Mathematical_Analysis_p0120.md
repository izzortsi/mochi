involves a careful use of the address notation from Section 8 and the following simple lemma about dividing a compact metric space $M$ into small pieces. A **piece** of $M$ is any compact nonempty subset of $M$.

**71 Lemma** If $M$ is a nonempty compact metric space and $\epsilon > 0$ is given then $M$ can be expressed as the finite union of pieces, each of diameter $\leq \epsilon$.

**Proof** Reduce the covering $\{M_{\epsilon/2}(x) : x \in M\}$ of $M$ to a finite subcovering and take the closure of each member of the subcovering.

We say that $M$ **divides into** these small pieces. The metaphor is imperfect because the pieces may overlap. The strategy of the proof of Theorem 70 is to divide $M$ into large pieces, divide the large pieces into small pieces, divide the small pieces into smaller pieces and continue indefinitely. Labeling the pieces coherently with words in two letters leads to the Cantor surjection.

Let $W(n)$ be the set of words in two letters, say $a$ and $b$, having length $n$. Then $\#W(n) = 2^n$. For example $W(2)$ consists of the four words $aa, bb, ab,$ and $ba$.

Using Lemma 71 we divide $M$ into a finite number of pieces of diameter $\leq 1$ and we denote by $\mathcal{M}_1$ the collection of these pieces. We choose $n_1$ with $2^{n_1} \geq \#\mathcal{M}_1$ and choose any surjection $w_1 : W(n_1) \to \mathcal{M}_1$. Since there are enough words in $W(n_1)$, $w_1$ exists. We say $w_1$ **labels** $\mathcal{M}_1$ and if $w_1(\alpha) = L$ then $\alpha$ is a **label** of $L$.