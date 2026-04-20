Problem 3.2. Show that the matrix norm satisfies

$$\|AB\| \leq \|A\|\|B\|.$$

(This shows that $\mathbb{C}^{n \times n}$ is even a Banach algebra.) Conclude $\|A^j\| \leq \|A\|^j$.

Problem 3.3. Show that the matrix product is continuous with respect to the matrix norm. That is, if $A_j \rightarrow A$ and $B_j \rightarrow B$ we have $A_jB_j \rightarrow AB$.

(Hint: Problem 3.2).

Problem 3.4. Let $A_j$ be a sequence in $\mathbb{C}^{n \times n}$. Show that

$$\sum_{j=0}^{\infty} A_j$$

converges if $\sum_{j=0}^{\infty} \|A_j\|$ does.

Problem 3.5. Is there a real matrix $A$ such that

$$\exp(A) = \begin{pmatrix} -\alpha & 0 \\ 0 & -\beta \end{pmatrix}, \quad \alpha, \beta > 0?$$

(Hint: (3.21).)

Problem 3.6. The Stirling numbers of the first kind are define as the coefficients of the polynomials

$$S_n(x) = x(x-1) \cdots (x-n+1) = \sum_{k=0}^{n} s(n,k)x^k.$$

and satisfy the basic recursion $s(n,k) = s(n-1,k-1) - (n-1)s(n-1,k)$.

Show the Stirling numbers satisfy the recursion from the proof of Lemma 3.3.

(Hint: Insert the definition into $S_n(1+x) = (1+x)S_{n-1}(x)$, apply the binomial theorem and compare coefficients. Finally use the basic recursion.)

3.2. Linear autonomous first-order systems

In the previous section we have seen that the solution of the autonomous linear first-order system (3.1) is given by

$$x(t) = \exp(tA)x_0.$$

(3.30)

In particular, the map $\exp(tA)$ provides an isomorphism between all initial conditions $x_0$ and all solutions. Hence the set of all solutions is a vector space isomorphic to $\mathbb{R}^n$ (respectively $\mathbb{C}^n$ if we allow complex initial values).

In order to understand the dynamics of the system (3.1), we need to understand the properties of the function $\exp(tA)$. We will start with the case of two dimensions which covers all prototypical cases. Furthermore, we will assume $A$ as well as $x_0$ to be real-valued.