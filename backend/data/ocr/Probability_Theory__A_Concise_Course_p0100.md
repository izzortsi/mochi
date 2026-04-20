Proof. To say that $\varepsilon_i$ is persistent means that

$$v = \sum_{n=0}^{\infty} v_n = \lim_{z \to 1} V(z) = 1,$$

or equivalently,

$$\lim_{z \to 1} U(z) = \lim_{z \to 1} \frac{1}{1 - V(z)} = \infty.$$

Suppose

$$\sum_{n=0}^{\infty} u_n < \infty.$$

(7.18)

Then, since the $u_n$ are all nonnegative,

$$\sum_{n=0}^{N} u_n < \lim_{z \to 1} U(z) < \sum_{n=0}^{\infty} u_n$$

for every $N$, and hence, taking the limit as $N \to \infty$, we have

$$\lim_{z \to 1} U(z) = \sum_{n=0}^{\infty} u_n.$$

In other words, $U(z)$ approaches a finite limit as $z \to 1$ if and only if (7.18) holds. Equivalently, $U(z) \to \infty$ as $z \to 1$, i.e., $\varepsilon_i$ is persistent, if and only if (7.17) holds.

Theorem 7.2. If the initial state $\varepsilon_i$ is persistent, then with probability 1 the system returns infinitely often to $\varepsilon_i$ as the number of steps $n \to \infty$. If $\varepsilon_i$ is transient, then with probability 1 the system returns to $\varepsilon_i$ only finitely often, i.e., after a certain number of steps the system never again returns to $\varepsilon_i$.

Proof. Suppose the system first returns to $\varepsilon_i$ after $v_1$ steps, returns a second time to $\varepsilon_i$ after $v_2$ steps, and so on. If there are fewer than $k$ returns to $\varepsilon_i$ as $n \to \infty$, we set $v_k = \infty$. Then the event $\{v_k < \infty\}$ means that there are at least $k$ returns to $\varepsilon_i$, and the probability of the system returning to $\varepsilon_i$ at least once is just

$$\mathbf{P}\{v_1 < \infty\} = v.$$

If the event $\{v_1 < \infty\}$ occurs, the system returns to its initial state $\varepsilon_i$ after $v_1$ steps, and its subsequent behavior is the same as if it just started its motion in $\varepsilon_1$. It follows that

$$\mathbf{P}\{v_2 < \infty \mid v_1 < \infty\} = v.$$

Clearly $v_1 = \infty$ implies $v_2 = \infty$, and hence $v_2 < \infty$ implies $v_1 < \infty$. Therefore

$$\mathbf{P}\{v_2 < \infty\} = \mathbf{P}\{v_2 < \infty \mid v_1 < \infty\}\mathbf{P}\{v_1 < \infty\} = v^2,$$