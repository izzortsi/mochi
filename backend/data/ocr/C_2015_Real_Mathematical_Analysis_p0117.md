For example, every discrete space is totally disconnected. So is $\mathbb{Q}$.

**67 Theorem** The Cantor set is a compact, nonempty, perfect, and totally disconnected metric space.

**Proof** The metric on $C$ is the one it inherits from $\mathbb{R}$, the usual distance $|x - y|$. Let $E$ be the set of endpoints of all the $C^n$-intervals,

$$E = \{0, 1, 1/3, 2/3, 1/9, 2/9, 7/9, 8/9, \ldots\}.$$

Clearly $E$ is denumerable and contained in $C$, so $C$ is nonempty and infinite. It is compact because it is the intersection of compacts.

To show $C$ is perfect and totally disconnected, take any $x \in C$ and any $\epsilon > 0$. Fix $n$ so large that $1/3^n < \epsilon$. The point $x$ lies in one of the $2^n$ intervals $I$ of length $1/3^n$ that comprise $C^n$. Fix this $I$. The set $E \cap I$ is infinite and contained in the interval $(x - \epsilon, x + \epsilon)$. Thus $C$ clusters at $x$ and $C$ is perfect. See Figure 51.

**Figure 51** The endpoints of $C$ cluster at $x$.

The interval $I$ is closed in $\mathbb{R}$ and therefore in $C^n$. The complement $J = C^n \setminus I$ consists of finitely many closed intervals and is therefore closed too. Thus, $I$ and $J$ are clopen in $C^n$. By the Inheritance Principle their intersections with $C$ are clopen in $C$, so $C \cap I$ is a clopen neighborhood of $x$ in $C$ which is contained in the $\epsilon$-neighborhood of $x$, completing the proof that $C$ is totally disconnected.

**68 Corollary** The Cantor set is uncountable.

**Proof** Being compact, $C$ is complete, and by Theorem 56, every complete, perfect, nonempty metric space is uncountable.

A more direct way to see that the Cantor set is uncountable involves a geometric coding scheme. Take the code $0 = \text{left}$ and $2 = \text{right}$. Then

$$C_0 = \text{left interval} = [0, 1/3] \quad C_2 = \text{right interval} = [2/3, 1],$$

and $C^1 = C_0 \cup C_2$. Similarly, the left and right subintervals of $C_0$ are coded $C_{00}$ and $C_{02}$, while the left and right subintervals of $C_2$ are $C_{20}$ and $C_{22}$. This gives

$$C^2 = C_{00} \sqcup C_{02} \sqcup C_{20} \sqcup C_{22}.$$