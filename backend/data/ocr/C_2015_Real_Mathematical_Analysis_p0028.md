By definition, a **field** is a system consisting of a set of elements and two operations, addition and multiplication, that have the preceding algebraic properties – commutativity, associativity, etc. Besides just existing, cut arithmetic is consistent with $\mathbb{Q}$ arithmetic in the sense that if $c, r \in \mathbb{Q}$ then

$$c^* + r^* = (c + r)^* \quad \text{and} \quad c^* \cdot r^* = (cr)^*.$$

By definition, this is what we mean when we say that $\mathbb{Q}$ is a **subfield** of $\mathbb{R}$. The cut order enjoys the additional properties of

**transitivity** $x < y < z$ implies $x < z$.

**trichotomy** Either $x < y$, $y < x$, or $x = y$, but only one of the three things is true.

**translation** $x < y$ implies $x + z < y + z$.

By definition, this is what we mean when we say that $\mathbb{R}$ is an **ordered field**. Besides, the product of positive cuts is positive and cut order is consistent with $\mathbb{Q}$ order: $c^* < r^*$ if and only if $c < r$ in $\mathbb{Q}$. By definition, this is what we mean when we say that $\mathbb{Q}$ is an ordered subfield of $\mathbb{R}$. To summarize

**3 Theorem** The set $\mathbb{R}$ of all cuts in $\mathbb{Q}$ is a complete ordered field that contains $\mathbb{Q}$ as an ordered subfield.

The **magnitude** or absolute value of $x \in \mathbb{R}$ is

$$|x| = \begin{cases} x & \text{if } x \geq 0 \\ -x & \text{if } x < 0. \end{cases}$$

Thus, $x \leq |x|$. A basic, constantly used fact about magnitude is the following.

**4 Triangle Inequality** For all $x, y \in \mathbb{R}$ we have $|x + y| \leq |x| + |y|$.

**Proof** The translation and transitivity properties of the order relation imply that adding $y$ and $-y$ to the inequalities $x \leq |x|$ and $-x \leq |x|$ gives

$$x + y \leq |x| + y \leq |x| + |y|$$

$$-x - y \leq |x| - y \leq |x| + |y|.$$

Since

$$|x + y| = \begin{cases} x + y & \text{if } x + y \geq 0 \\ -x - y & \text{if } x + y \leq 0 \end{cases}$$

and both $x + y$ and $-x - y$ are less than or equal to $|x| + |y|$, we infer that $|x + y| \leq |x| + |y|$ as asserted.