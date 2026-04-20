Finally, let me remark that similar results hold if we replace $\mathbb{N}_0$ by $\mathbb{Z}$. Let $N \in \mathbb{N} \setminus \{1\}$ and define the

$$\Sigma_N = \{0, 1, \ldots, N-1\}^{\mathbb{Z}}$$

(11.34)

to be the set of doubly infinite sequences taking only the values $0, \ldots, N-1$. Defining

$$d(x, y) = \frac{1}{2} \sum_{n \in \mathbb{N}_0} \frac{|x_n - y_n| + |x_{-n} - y_{-n}|}{N^n},$$

(11.35)

$\Sigma_N$ becomes a metric space. Again we have

**Lemma 11.15.** We have $d(x, y) \leq N^{-n}$ if $x_j = y_j$ for all $|j| \leq n$ and we have $d(x, y) \geq N^{-n}$ if $x_j \neq y_j$ for at least one $|j| \leq n$.

The shift map $\sigma$ is defined as before. However, note that $\sigma$ is invertible in this case. All other results hold with no further modifications. The details are left to the reader.

**Problem 11.8.** Show that the definition of a totally disconnected set given in this section agrees with the one given in the previous section for subsets of $\mathbb{R}$. (Hint: If $x, y \in M \subset \mathbb{R}$ and $M$ contains no open interval, then there is a $z \notin M$ between $x$ and $y$).

**Problem 11.9.** Show that for the shift on two symbols (cf. Problem 10.7): All points are nonwandering, $\text{Nwa}(\sigma) = \Sigma_2$. There are recurrent points which are not periodic and there are nonwandering points which are not recurrent.

**Problem 11.10.** The (Artin-Mazur) zeta function of a discrete dynamical system $f : M \to M$ is defined to be

$$\zeta_f(z) = \exp \left( \sum_{n=1}^{\infty} \frac{z^n}{n} |\text{Fix}(f^n)| \right),$$

where $|\text{Fix}(f^n)|$ is the cardinality of the set of fixed points of $f^n$ (provided this number is finite for every $n$). Equivalently, $|\text{Fix}(f^n)|$ is the number of periodic orbits of period $n$.

Show that

$$\zeta_{\sigma_A}(z) = \frac{1}{\det(\mathbb{I} - zA)}, \quad |z| < \|A\|.$$

(Hint: (3.23).)