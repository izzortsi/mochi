2 Cuts

We begin at the beginning and discuss $\mathbb{R}$ = the system of all real numbers from a somewhat theological point of view. The current mathematics teaching trend treats the real number system $\mathbb{R}$ as a given – it is defined axiomatically. Ten or so of its properties are listed, called axioms of a complete ordered field, and the game becomes to deduce its other properties from the axioms. This is something of a fraud, considering that the entire structure of analysis is built on the real number system. For what if a system satisfying the axioms failed to exist? Then one would be studying the empty set! However, you need not take the existence of the real numbers on faith alone – we will give a concise mathematical proof of it.

It is reasonable to accept all grammar school arithmetic facts about

The set $\mathbb{N}$ of natural numbers, $1, 2, 3, 4, \ldots$.

The set $\mathbb{Z}$ of integers, $0, 1, -1, -2, 2, \ldots$.

The set $\mathbb{Q}$ of rational numbers $p/q$ where $p, q$ are integers, $q \neq 0$.

For example, we will admit without question facts like $2 + 2 = 4$, and laws like $a + b = b + a$ for rational numbers $a, b$. All facts you know about arithmetic involving integers or rational numbers are fair to use in homework exercises too.† It is clear that $\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q}$. Now $\mathbb{Z}$ improves $\mathbb{N}$ because it contains negatives and $\mathbb{Q}$ improves $\mathbb{Z}$ because it contains reciprocals. $\mathbb{Z}$ legalizes subtraction and $\mathbb{Q}$ legalizes division. Still, $\mathbb{Q}$ needs further improvement. It doesn’t admit irrational roots such as $\sqrt{2}$ or transcendental numbers such as $\pi$. We aim to go a step beyond $\mathbb{Q}$, completing it to form $\mathbb{R}$ so that

$$\mathbb{N} \subset \mathbb{Z} \subset \mathbb{Q} \subset \mathbb{R}.$$

As an example of the fact that $\mathbb{Q}$ is incomplete we have

1 Theorem No number $r$ in $\mathbb{Q}$ has square equal to 2; i.e., $\sqrt{2} \notin \mathbb{Q}$.

Proof To prove that every $r = p/q$ has $r^2 \neq 2$ we show that $p^2 \neq 2q^2$. It is fair to assume that $p$ and $q$ have no common factors since we would have canceled them out beforehand.

Case 1. $p$ is odd. Then $p^2$ is odd while $2q^2$ is not. Therefore $p^2 \neq 2q^2$.

†A subtler fact that you may find useful is the prime factorization theorem mentioned above. Any integer $\geq 2$ can be factored into a product of prime numbers. For example, 120 is the product of primes $2 \cdot 2 \cdot 2 \cdot 3 \cdot 5$. Prime factorization is unique except for the order in which the factors appear. An easy consequence is that if a prime number $p$ divides an integer $k$ and if $k$ is the product $mn$ of integers then $p$ divides $m$ or it divides $n$. After all, by uniqueness, the prime factorization of $k$ is just the product of the prime factorizations of $m$ and $n$.