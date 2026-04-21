the rings $B_i$, so repetition gives a bijection

$$\phi : \bigsqcup A_i \rightarrow \bigsqcup B_i,$$

(**\bigsqcup** indicates disjoint union) defined by

$$\phi(x) = \begin{cases} f(x) & \text{if } x \in A_i \text{ and } i \text{ is even} \\ g^{-1}(x) & \text{if } x \in A_i \text{ and } i \text{ is odd.} \end{cases}$$

Let $A_* = A \setminus (\bigsqcup A_i)$ and $B_* = B \setminus (\bigsqcup B_i)$ be the rest of $A$ and $B$. Then $f$ bijects $A_*$ to $B_*$ and $\phi$ extends to a bijection $h : A \rightarrow B$ defined by

$$h(x) = \begin{cases} \phi(x) & \text{if } x \in \bigsqcup A_i \\ f(x) & \text{if } x \in A_*. \end{cases}$$

A supplementary aid in understanding the Schroeder Bernstein proof is the following crossed ladder diagram, Figure 18.

**Figure 18** Diagramatic proof of the Schroeder-Bernstein Theorem

Exercise 36 asks you to show directly that $(a,b) \sim [a,b]$. This makes sense since $(a,b) \subset [a,b] \subset \mathbb{R}$ and $(a,b) \sim \mathbb{R}$ should certainly imply $(a,b) \sim [a,b] \sim \mathbb{R}$. The Schroeder-Bernstein theorem gives a quick indirect solution to the exercise. The inclusion map $i : (a,b) \hookrightarrow [a,b]$ sending $x$ to $x$ injects $(a,b)$ into $[a,b]$, while the function $j(x) = x/2 + (a+b)/4$ injects $[a,b]$ into $(a,b)$. The existence of the two injections implies by the Schroeder-Bernstein Theorem that there is a bijection $(a,b) \sim [a,b].$