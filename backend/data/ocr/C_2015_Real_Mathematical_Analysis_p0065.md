(d) When is it true that

$$\limsup_{n \to \infty} (a_n + b_n) \leq \limsup_{n \to \infty} a_n + \limsup_{n \to \infty} b_n$$

$$\limsup_{n \to \infty} ca_n = c \limsup_{n \to \infty} a_n?$$

When is it true they are unequal? Draw pictures that illustrate these relations.

(e) Define the **limit infimum**, or lim inf, of a sequence of real numbers, and find a formula relating it to the limit supremum.

(f) Prove that $\lim_{n \to \infty} a_n$ exists if and only if the sequence $(a_n)$ is bounded and $\liminf_{n \to \infty} a_n = \limsup_{n \to \infty} a_n$.

**46.** The unit ball with respect to a norm $\| \|$ on $\mathbb{R}^2$ is

$$\{v \in \mathbb{R}^2 : \|v\| \leq 1\}.$$

(a) Find necessary and sufficient geometric conditions on a subset of $\mathbb{R}^2$ that it is the unit ball for some norm.

(b) Give necessary and sufficient geometric conditions that a subset be the unit ball for a norm arising from an inner product.

(c) Generalize to $\mathbb{R}^m$. [You may find it useful to read about closed sets in the next chapter, and to consult Exercise 41 there.]

47. Assume that $V$ is an inner product space whose inner product induces a norm as $|x| = \sqrt{\langle x, x \rangle}$.

(a) Show that $| \|$ obeys the **parallelogram law**

$$|x + y|^2 + |x - y|^2 = 2|x|^2 + 2|y|^2$$

for all $x, y \in V$.

*(b)** Show that any norm obeying the parallelogram law arises from a unique inner product. [Hints: Define the prospective inner product as

$$\langle x, y \rangle = \left| \frac{x + y}{2} \right|^2 - \left| \frac{x - y}{2} \right|^2$$

Checking that $\langle , \rangle$ satisfies the inner product properties of symmetry and positive definiteness is easy. Also, it is immediate that $|x|^2 = \langle x, x \rangle$, so $\langle , \rangle$ induces the given norm. Checking bilinearity is another story.

(i) Let $x, y, z \in V$ be arbitrary. Show that the parallelogram law implies

$$\langle x + y, z \rangle + \langle x - y, z \rangle = 2\langle x, y \rangle,$$