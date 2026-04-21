7 Theorem Every interval $(a, b)$, no matter how small, contains both rational and irrational numbers. In fact it contains infinitely many rational numbers and infinitely many irrational numbers.

Proof Think of $a, b$ as cuts $a = A|A', b = B|B'$. The fact that $a < b$ implies the set $B \setminus A$ is a nonempty set of rational numbers. Choose a rational $r \in B \setminus A$. Since $B$ has no largest element, there is a rational $s$ with $a < r < s < b$. Now consider the transformation

$$T: t \mapsto r + (s - r)t.$$

It sends the interval $[0, 1]$ to the interval $[r, s]$. Since $r$ and $s - r$ are rational, $T$ sends rationals to rationals and irrationals to irrationals. Clearly $[0, 1]$ contains infinitely many rationals, say $1/n$ with $n \in \mathbb{N}$, so $[r, s]$ contains infinitely many rationals. Also $[0, 1]$ contains infinitely many irrationals, say $1/n\sqrt{2}$ with $n \in \mathbb{N}$, so $[r, s]$ contains infinitely many irrationals. Since $[r, s]$ contains infinitely many rationals and infinitely many irrationals, the same is true of the larger interval $(a, b)$.

Theorem 7 expresses the fact that between any two rational numbers lies an irrational number, and between any two irrational numbers lies a rational number. This is a fact worth thinking about for it seems implausible at first. Spend some time trying to picture the situation, especially in light of the following related facts:

(a) There is no first (i.e., smallest) rational number in the interval $(0, 1)$.

(b) There is no first irrational number in the interval $(0, 1)$.

(c) There are strictly more irrational numbers in the interval $(0, 1)$ (in the cardinality sense explained in Section 4) than there are rational numbers.

The transformation in the proof of Theorem 7 shows that the real line is like rubber: stretch it out and it never breaks.

A somewhat obscure and trivial fact about $\mathbb{R}$ is its Archimedean property: for each $x \in \mathbb{R}$ there is an integer $n$ that is greater than $x$. In other words, there exist arbitrarily large integers. The Archimedean property is true for $\mathbb{Q}$ since $p/q \leq |p|$. It follows that it is true for $\mathbb{R}$. Given $x = A|B$, just choose a rational number $r \in B$ and an integer $n > r$. Then $n > x$. An equivalent way to state the Archimedean property is that there exist arbitrarily small reciprocals of integers.

Mildly interesting is the existence of ordered fields for which the Archimedean property fails. One example is the field $\mathbb{R}(x)$ of rational functions with real coefficients. Each such function is of the form

$$R(x) = \frac{p(x)}{q(x)}$$